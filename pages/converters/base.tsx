import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Toggle,
	TextField
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiNumeric,
	mdiHexadecimal
} from '@mdi/js'


type Base = 'bin' | 'oct' | 'dec' | 'hex'
const baseMap = {
	bin: 2,
	oct: 8,
	dec: 10,
	hex: 16
}

const convert = (number: string, base: Base) => {
	let input = parseInt(number, baseMap[base])
	if (isNaN(input)) return ['','','','']
	else return [
		input.toString(2),
		input.toString(8),
		input.toString(10),
		input.toString(16)
	]
}

const Tool = () => {
	const [pretty, setPretty] = useState(true)
	const [base, setBase] = useState('dec' as Base)
	const [input, setInput] = useState('')

	let [resultBin, resultOct, resultDec, resultHex] = convert(input, base)

	return (
		<Page title='Number Base Converter'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiNumeric,
						name: 'Pretty print',
						description: 'Format the results for readability',
						control: <Toggle checked={pretty} onChange={(e: Event) => setPretty((e.target as HTMLInputElement).checked)} />
					}, {
						icon: mdiHexadecimal,
						name: 'Input base',
						description: 'Select which base your input is in',
						control: <Select value={base} options={[
									{key: 'hex', value: 'Hexadecimal'},
									{key: 'dec', value: 'Decimal'},
									{key: 'oct', value: 'Octal'},
									{key: 'bin', value: 'Binary'}
								]} onChange={(e: Event) => setBase((e.target as HTMLSelectElement).value as Base)} />
					}
				]} />

			<Segment
				type='inline'
				title='Input'
				controls={[{type: 'clear', onClick: () => setInput('')}]}
				body={<TextField value={input} onChange={(e: Event) => setInput((e.target as HTMLInputElement).value)} />}
			/>

			<Segment
				type='inline'
				title='Hexadecimal'
				controls={[{type: 'copy', data: resultHex}]}
				body={<TextField value={resultHex} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Decimal'
				controls={[{type: 'copy', data: resultDec}]}
				body={<TextField value={resultDec} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Octal'
				controls={[{type: 'copy', data: resultOct}]}
				body={<TextField value={resultOct} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Binary'
				controls={[{type: 'copy', data: resultBin}]}
				body={<TextField value={resultBin} disabled={true} />}
			/>
		</Page>
	)
}

export default Tool
