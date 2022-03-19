import { useState } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	TextArea
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiSwapHorizontal,
	mdiFileCogOutline
} from '@mdi/js'


const Tool = () => {
	const [mode, setMode] = useLocalStorage('base64-mode', 'encode')
	const [encoding, setEncoding] = useLocalStorage('base64-encoding', 'utf-8')
	const [input, setInput] = useState('')
	let output = ((): string => {
		try {
			if (mode === 'encode') return btoa(input)
			if (mode === 'decode') return atob(input)
		} catch(e) {}
		return ''
	})()

	return (
		<Page title='Base 64 Encoder & Decoder'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiSwapHorizontal,
						name: 'Conversion',
						description: 'Select which conversion mode you want to use',
						control: <Select value={mode} options={[
									{key: 'encode', value: "Encode"},
									{key: 'decode', value: "Decode"}
								]} onChange={(e: Event) => setMode((e.target as HTMLSelectElement).value)} />
					}, {
						icon: mdiFileCogOutline,
						name: 'Encoding',
						description: 'Select which character encoding you want to use',
						control: <Select options={[
									{key: 'utf-8', value: 'UTF-8'}
								]} value={encoding} onChange={(e: Event) => setEncoding((e.target as HTMLSelectElement).value)} />
					}
				]} />

			<Segment
				title='Input'
				controls={[
					{type: 'file', callback: (data: string) => setInput(data)},
					{type: 'clear', onClick: () => setInput('')}
				]}
				body={<TextArea value={input} onChange={(e: Event) => setInput((e.target as HTMLTextAreaElement).value)} rows={5} />}
			/>

			<Segment
				title='Output'
				controls={[{type: 'copy', data: output}]}
				body={<TextArea value={output} disabled={true} rows={5} />}
			/>
		</Page>
	)
}

export default Tool
