import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Button,
	Select,
	Textfield
} from '@/components/inputs'

import classes from '@/shared/classes'

import Icon from '@mdi/react'
import {
	mdiNumeric,
	mdiHexadecimal,
	mdiContentCopy,
	mdiClose
} from '@mdi/js'

import Clipboard from 'react-clipboard.js';


const baseLookup = {
	bin: 2,
	oct: 8,
	dec: 10,
	hex: 16
}

const convert = (number, base) => {
	let input = parseInt(number, baseLookup[base])
	if (isNaN(input)) return ['','','','']
	else return [
		input.toString(2),
		input.toString(8),
		input.toString(10),
		input.toString(16)
	]
}

const Html = () => {
	const [pretty, setPretty] = useState(true)
	const [base, setBase] = useState('dec')
	const [input, setInput] = useState('')

	let [resultBin, resultOct, resultDec, resultHex] = convert(input, base)

	return (
		<Page>
			<h1 className={`mb-6 ${classes.headings.h1}`}>
				Number Base Converter
			</h1>

			<Segment
				type='config'
				body={[
					{
						icon: mdiNumeric,
						name: 'Pretty print',
						description: 'Nicely format the resulting numbers',
						control: <input type="checkbox" checked={pretty} onChange={(e) => setPretty(e.target.checked)} />
					}, {
						icon: mdiHexadecimal,
						name: 'Input base',
						description: 'Select which base your input is in',
						control: <Select value={base} options={{
									hex: 'Hexadecimal',
									dec: 'Decimal',
									oct: 'Octal',
									bin: 'Binary'
								}} onChange={e => setBase(e.target.value)} />
					}
				]} />

			<Segment
				type='inline'
				title='Input'
				controls={<Button icon={mdiClose} hint="Clear" />}
				body={<Textfield onChange={e => setInput(e.target.value)} />}
			/>

			<Segment
				type='inline'
				title='Hexadecimal'
				controls={
					<Clipboard data-clipboard-text={resultHex}>
						<Button icon={mdiContentCopy} hint="Copy" />
					</Clipboard>
				}
				body={<Textfield value={resultHex} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Decimal'
				controls={
					<Clipboard data-clipboard-text={resultDec}>
						<Button icon={mdiContentCopy} hint="Copy" />
					</Clipboard>
				}
				body={<Textfield value={resultDec} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Octal'
				controls={
					<Clipboard data-clipboard-text={resultOct}>
						<Button icon={mdiContentCopy} hint="Copy" />
					</Clipboard>
				}
				body={<Textfield value={resultOct} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Binary'
				controls={
					<Clipboard data-clipboard-text={resultBin}>
						<Button icon={mdiContentCopy} hint="Copy" />
					</Clipboard>
				}
				body={<Textfield value={resultBin} disabled={true} />}
			/>
		</Page>
	)
}

export default Html
