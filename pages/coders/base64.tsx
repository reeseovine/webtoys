import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Textarea
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiSwapHorizontal,
	mdiFileCogOutline
} from '@mdi/js'


const Tool = () => {
	const [mode, setMode] = useState('encode')
	const [encoding, setEncoding] = useState('utf-8')
	const [input, setInput] = useState('')
	let output = (() => {
		try {
			if (mode === 'encode') return btoa(input)
			if (mode === 'decode') return atob(input)
		} catch(e) {
			return ''
		}
	})()

	return (
		<Page title='Base 64 Encoder & Decoder'>
			<Segment
				type='config'
				body={[
					{
						icon: mdiSwapHorizontal,
						name: 'Conversion',
						description: 'Select which conversion mode you want to use',
						control: <Select options={{
									encode: "Encode",
									decode: "Decode"
								}} onChange={e => setMode(e.target.value)} />
					}, {
						icon: mdiFileCogOutline,
						name: 'Encoding',
						description: 'Select which character encoding you want to use',
						control: <Select options={{
									'utf-8': 'UTF-8'
								}} onChange={e => setEncoding(e.target.value)} />
					}
				]} />

			<Segment
				title='Input'
				controls={[
					{type: 'file', callback: data => setInput(data)},
					{type: 'clear', onClick: () => setInput('')}
				]}
				body={<Textarea value={input} onChange={e => setInput(e.target.value)} rows={5} />}
			/>

			<Segment
				title='Output'
				controls={[{type: 'copy', data: output}]}
				body={<Textarea value={output} disabled={true} rows={5} />}
			/>
		</Page>
	)
}

export default Tool
