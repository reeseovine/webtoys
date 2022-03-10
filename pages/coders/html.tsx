import { useState } from 'react'

import Page from '@/components/page'
import Section from '@/components/section'
import Segment from '@/components/segment'
import {
	Button,
	Select,
	Textarea
} from '@/components/inputs'

import classes from '@/shared/classes.ts'

import Icon from '@mdi/react'
import {
	mdiSwapHorizontal,
	mdiContentPaste,
	mdiContentCopy,
	mdiClose
} from '@mdi/js'

import Clipboard from 'react-clipboard.js';

import he from 'he'


const Html = () => {
	const [mode, setMode] = useState('encode')
	const [input, setInput] = useState('')
	let output = he[mode](input)

	return (
		<Page>
			<Section>
				<h1 className={`mb-6 ${classes.headings.h1}`}>
					HTML Encoder / Decoder
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
						<Button icon={mdiContentPaste} hint="Paste" />
						<Button icon={mdiClose} hint="Clear" />
					</>}
					body={<Textarea onChange={e => setInput(e.target.value)} rows={5} />}
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
			</Section>
		</Page>
	)
}

export default Html
