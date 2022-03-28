import { useState } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import { Select, TextArea } from '@/components/inputs'

import Icon from '@mdi/react'
import { mdiSwapHorizontal } from '@mdi/js'

import he from 'he'

const Tool = () => {
	const [mode, setMode] = useLocalStorage('html-mode', 'encode')
	const [input, setInput] = useState('')
	let output
	if (mode === 'encode') output = he.encode(input)
	else output = he.decode(input)

	return (
		<Page title='HTML Entity Encoder &amp; Decoder'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiSwapHorizontal,
						name: 'Conversion',
						description: 'Select which conversion mode you want to use',
						control: (
							<Select
								value={mode}
								options={[
									{ key: 'encode', value: 'Encode' },
									{ key: 'decode', value: 'Decode' },
								]}
								onChange={(e: Event) => setMode((e.target as HTMLSelectElement).value)}
							/>
						),
					},
				]}
			/>

			<Segment
				title='Input'
				controls={[
					{ type: 'file', callback: (data: string) => setInput(data) },
					{ type: 'clear', onClick: () => setInput('') },
				]}
				body={
					<TextArea
						value={input}
						onChange={(e: Event) => setInput((e.target as HTMLTextAreaElement).value)}
						rows={5}
					/>
				}
			/>

			<Segment
				title='Output'
				controls={[{ type: 'copy', data: output }]}
				body={<TextArea value={output} disabled={true} rows={5} />}
			/>
		</Page>
	)
}

export default Tool
