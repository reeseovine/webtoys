import { useState } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import { Select, Toggle, TextField } from '@/components/inputs'

import Icon from '@mdi/react'
import { mdiNumeric, mdiHexadecimal } from '@mdi/js'

type Base = 'bin' | 'oct' | 'dec' | 'hex'
const baseMap = {
	bin: 2,
	oct: 8,
	dec: 10,
	hex: 16,
}

const prettyBin = (number: string): string => {
	let out: string[] = []
	if (number.length > 1) {
		for (var i = number.length; i > 0; i -= 4) {
			out.unshift(number.slice(i - 4 >= 0 ? i - 4 : 0, i))
		}
		return out.join(' ')
	} else return number
}
const prettyOct = (number: string): string => {
	let out: string[] = []
	if (number.length > 1) {
		for (var i = number.length; i > 0; i -= 3) {
			out.unshift(number.slice(i - 3 >= 0 ? i - 3 : 0, i))
		}
		return out.join(' ')
	} else return number
}
const prettyDec = (number: string): string => {
	let out: string[] = []
	if (number.length > 1) {
		for (var i = number.length; i > 0; i -= 3) {
			out.unshift(number.slice(i - 3 >= 0 ? i - 3 : 0, i))
		}
		return out.join(',')
	} else return number
}
const prettyHex = (number: string): string => {
	let out: string[] = []
	if (number.length > 1) {
		for (var i = number.length; i > 0; i -= 2) {
			out.unshift(number.slice(i - 2 >= 0 ? i - 2 : 0, i))
		}
		return out.join(' ')
	} else return number
}

const convert = (number: string, base: Base, pretty: boolean) => {
	let input = parseInt(number, baseMap[base])
	if (isNaN(input)){
		return ['', '', '', '']
	} else if (pretty){
		return [
			prettyBin(input.toString(2)),
			prettyOct(input.toString(8)),
			prettyDec(input.toString(10)),
			prettyHex(input.toString(16)),
		]
	} else {
		return [input.toString(2), input.toString(8), input.toString(10), input.toString(16)]
	}
}

const Tool = () => {
	const [pretty, setPretty] = useLocalStorage('base-pretty', true)
	const [base, setBase] = useLocalStorage('base-base', 'dec' as Base)
	const [input, setInput] = useState('')

	let [resultBin, resultOct, resultDec, resultHex] = convert(input, base, pretty)

	return (
		<Page title='Number Base Converter'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiNumeric,
						name: 'Pretty print',
						description: 'Format the results for readability',
						control: (
							<Toggle
								checked={pretty}
								onChange={(e: Event) => setPretty((e.target as HTMLInputElement).checked)}
							/>
						),
					},
					{
						icon: mdiHexadecimal,
						name: 'Input base',
						description: 'Select which base your input is in',
						control: (
							<Select
								value={base}
								options={[
									{ key: 'hex', value: 'Hexadecimal' },
									{ key: 'dec', value: 'Decimal' },
									{ key: 'oct', value: 'Octal' },
									{ key: 'bin', value: 'Binary' },
								]}
								onChange={(e: Event) => setBase((e.target as HTMLSelectElement).value as Base)}
							/>
						),
					},
				]}
			/>

			<Segment
				type='inline'
				title='Input'
				controls={[{ type: 'clear', onClick: () => setInput('') }]}
				body={
					<TextField
						value={input}
						onChange={(e: Event) => setInput((e.target as HTMLInputElement).value)}
					/>
				}
			/>

			<Segment
				type='inline'
				title='Hexadecimal'
				controls={[{ type: 'copy', data: resultHex }]}
				body={<TextField value={resultHex} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Decimal'
				controls={[{ type: 'copy', data: resultDec }]}
				body={<TextField value={resultDec} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Octal'
				controls={[{ type: 'copy', data: resultOct }]}
				body={<TextField value={resultOct} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='Binary'
				controls={[{ type: 'copy', data: resultBin }]}
				body={<TextField value={resultBin} disabled={true} />}
			/>
		</Page>
	)
}

export default Tool
