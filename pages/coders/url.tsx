import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Button,
	FileLoader,
	Select,
	Textarea
} from '@/components/inputs'

import classes from '@/shared/classes'

import Icon from '@mdi/react'
import {
	mdiSwapHorizontal,
	mdiSwapVertical,
	mdiFileOutline,
	mdiContentCopy,
	mdiClose
} from '@mdi/js'

import Clipboard from 'react-clipboard.js';

import he from 'he'


const Html = () => {
	const [mode, setMode] = useState('encode')
	const [input, setInput] = useState('')
	let output = (() => {
		try {
			if (mode === 'encode') return encodeURIComponent(input)
			if (mode === 'decode') return decodeURIComponent(input)
		} catch(e) {}
	})()

	return (
		<Page>
			<h1 className={`mb-6 ${classes.headings.h1}`}>
				URL Encoder & Decoder
			</h1>

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

export default Html
