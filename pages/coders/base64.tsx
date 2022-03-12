import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Button,
	FileLoader,
	Select,
	Textarea
} from '@/components/inputs'
import {
	H1
} from '@/components/typography'

import Icon from '@mdi/react'
import {
	mdiSwapHorizontal,
	mdiFileCogOutline,
	mdiFileOutline,
	mdiContentCopy,
	mdiClose
} from '@mdi/js'

import Clipboard from 'react-clipboard.js';


const Base64 = () => {
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
		<Page>
			<H1 className='mb-6'>Base 64 Encoder & Decoder</H1>

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
				controls={<>
					<FileLoader cb={data => setInput(data)} />
					<Button icon={mdiClose} hint="Clear" onClick={() => setInput('')} />
				</>}
				body={<Textarea value={input} onChange={e => setInput(e.target.value)} rows={5} />}
			/>

			<Segment
				title='Output'
				controls={<>
					<Clipboard data-clipboard-text={output}>
						<Button icon={mdiContentCopy} hint="Copy" />
					</Clipboard>
				</>}
				body={<Textarea value={output} disabled={true} rows={5} />}
			/>
		</Page>
	)
}

export default Base64
