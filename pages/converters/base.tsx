import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Toggle,
	Textfield
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiNumeric,
	mdiHexadecimal
} from '@mdi/js'


const baseMap = {
	bin: 2,
	oct: 8,
	dec: 10,
	hex: 16
}

const convert = (number, base) => {
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
	const [base, setBase] = useState('dec')
	const [input, setInput] = useState('')

	let [resultBin, resultOct, resultDec, resultHex] = convert(input, base)

	return (
		<Page title='Number Base Converter'>
			<Segment
				type='config'
				body={[
					{
						icon: mdiNumeric,
						name: 'Pretty print',
						description: 'Nicely format the resulting numbers',
						control: <Toggle checked={pretty} onChange={(e) => setPretty(e.target.checked)} />
					}, {
						icon: mdiHexadecimal,
						name: 'Input base',
						description: 'Select which base your input is in',
						control: <Select value={base} options={[
									{key: 'hex', value: 'Hexadecimal'},
									{key: 'dec', value: 'Decimal'},
									{key: 'oct', value: 'Octal'},
									{key: 'bin', value: 'Binary'}
								]} onChange={e => setBase(e.target.value)} />
					}
				]} />

			<Segment
				type='inline'
				title='Input'
				controls={[{type: 'clear', onClick: () => setInput('')}]}
				body={<Textfield value={input} onChange={e => setInput(e.target.value)} />}
			/>

			<Segment
				type='inline'
				title='Hexadecimal'
				controls={[{type: 'copy', data: resultHex}]}
				body={<Textfield value={resultHex} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Decimal'
				controls={[{type: 'copy', data: resultDec}]}
				body={<Textfield value={resultDec} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Octal'
				controls={[{type: 'copy', data: resultOct}]}
				body={<Textfield value={resultOct} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Binary'
				controls={[{type: 'copy', data: resultBin}]}
				body={<Textfield value={resultBin} disabled={true} />}
			/>
		</Page>
	)
}

export default Tool
