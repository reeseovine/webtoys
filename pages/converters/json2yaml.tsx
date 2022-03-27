import { useState } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Toggle,
	Code
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiSwapHorizontal,
	mdiFormatIndentIncrease
} from '@mdi/js'

import { Language } from 'prism-react-renderer'
import YAML from 'yaml'


const Tool = () => {
	const [mode, setMode] = useLocalStorage('json2yaml-mode', 'yaml' as Language)
	const [pretty, setPretty] = useLocalStorage('json2yaml-pretty', true)
	const [input, setInput] = useState('')
	let output
	try {
		if (input.length === 0) output = ''
		else if (mode === 'yaml'){
			output = YAML.stringify(YAML.parse(input))
		} else if (mode === 'json'){
			if (pretty) output = JSON.stringify(YAML.parse(input), null, "\t")
			else        output = JSON.stringify(YAML.parse(input))
		}
	} catch (e){
		output = ''
		console.error(e)
	}

	return (
		<Page title='Convert JSON to YAML and back'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiSwapHorizontal,
						name: 'Conversion',
						description: 'Select which conversion mode you want to use',
						control: <Select value={mode} options={[
									{key: 'yaml', value: "JSON to YAML"},
									{key: 'json', value: "YAML to JSON"}
								]} onChange={(e: Event) => setMode((e.target as HTMLSelectElement).value as Language)} />
					}, {
						icon: mdiFormatIndentIncrease,
						name: 'Pretty print',
						description: 'Format the result for readability',
						control: <Toggle checked={pretty} onChange={(e: Event) => setPretty((e.target as HTMLInputElement).checked)} />
					}
				]} />

			<div className={`
				grow
				flex
				flex-col
				xl:flex-row

				items-stretch
				gap-6
			`}>
				<Segment
					title={mode === 'yaml' ? 'JSON' : 'YAML'}
					controls={[
						{type: 'file', callback: (data: string) => setInput(data)},
						{type: 'clear', onClick: () => setInput('')}
					]}
					body={<Code
							value={input}
							language={mode === 'yaml' ? 'json' : 'yaml'}
							editable={true}
							onChange={(e: Event) => setInput((e.target as HTMLTextAreaElement).value)}
							className='grow' />}
					className='grow xl:basis-1/2 !m-0 flex flex-col'
				/>

				<Segment
					title={mode === 'yaml' ? 'YAML' : 'JSON'}
					controls={[{type: 'copy', data: output}]}
					body={<Code
							value={output}
							language={mode}
							editable={false}
							className='grow' />}
					className='grow xl:basis-1/2 !m-0 flex flex-col'
				/>
			</div>
		</Page>
	)
}

export default Tool
