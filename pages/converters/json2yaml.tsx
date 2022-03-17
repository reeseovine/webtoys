import { useState } from 'react'

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

import YAML from 'yaml'


const Tool = () => {
	const [mode, setMode] = useState('yaml')
	const [pretty, setPretty] = useState(true)
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
				body={[
					{
						icon: mdiSwapHorizontal,
						name: 'Conversion',
						description: 'Select which conversion mode you want to use',
						control: <Select value={mode} options={[
									{key: 'yaml', value: "JSON to YAML"},
									{key: 'json', value: "YAML to JSON"}
								]} onChange={e => setMode(e.target.value)} />
					}, (mode === 'json' ? {
						icon: mdiFormatIndentIncrease,
						name: 'Pretty print',
						description: 'Format the result for readability',
						control: <Toggle checked={pretty} onChange={(e) => setPretty(e.target.checked)} />
					} : null)
				]} />

			<div className={`
				grow
				flex
				flex-col
				md:flex-row
				lg:flex-col
				xl:flex-row

				items-stretch
				gap-4
			`}>
				<Segment
					title={mode === 'yaml' ? 'JSON' : 'YAML'}
					controls={[
						{type: 'file', callback: data => setInput(data)},
						{type: 'clear', onClick: () => setInput('')}
					]}
					body={<Code
							value={input}
							language={mode === 'yaml' ? 'json' : 'yaml'}
							editable={true}
							onChange={e => setInput(e.target.value)}
							className='grow' />}
					className='grow flex flex-col basis-1/2 !m-0'
				/>

				<Segment
					title={mode === 'yaml' ? 'YAML' : 'JSON'}
					controls={[{type: 'copy', data: output}]}
					body={<Code
							value={output}
							language={mode}
							editable={false}
							className='grow' />}
					className='grow flex flex-col basis-1/2 !m-0'
				/>
			</div>
		</Page>
	)
}

export default Tool
