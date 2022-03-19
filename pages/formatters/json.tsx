import { useState } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Code
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiFormatIndentIncrease
} from '@mdi/js'

import YAML from 'yaml'


const Tool = () => {
	const [indent, setIndent] = useLocalStorage('json-indent', 'tab')
	const [input, setInput] = useState('')
	let output
	try {
		if (input.length === 0) output = ''
		else switch (indent){
			case '2':
				output = JSON.stringify(YAML.parse(input), null, 2)
				break
			case '4':
				output = JSON.stringify(YAML.parse(input), null, 4)
				break
			case 'tab':
				output = JSON.stringify(YAML.parse(input), null, '\t')
				break
		}
	} catch (e){
		output = ''
		console.error(e)
	}

	return (
		<Page title='JSON Formatter'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiFormatIndentIncrease,
						name: 'Indentation',
						description: '',
						control: <Select value={indent} options={[
									{key: '2', value: "2 spaces"},
									{key: '4', value: "4 spaces"},
									{key: 'tab', value: "Tab"}
								]} onChange={(e: Event) => setIndent((e.target as HTMLSelectElement).value)} />
					}
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
					title='Input'
					controls={[
						{type: 'file', callback: (data: string) => setInput(data)},
						{type: 'clear', onClick: () => setInput('')}
					]}
					body={<Code
							value={input}
							language='json'
							editable={true}
							onChange={(e: Event) => setInput((e.target as HTMLTextAreaElement).value)}
							className='grow' />}
					className='grow flex flex-col basis-1/2 !m-0'
				/>

				<Segment
					title='Output'
					controls={[{type: 'copy', data: output}]}
					body={<Code
							value={output}
							language='json'
							editable={false}
							className='grow' />}
					className='grow flex flex-col basis-1/2 !m-0'
				/>
			</div>
		</Page>
	)
}

export default Tool
