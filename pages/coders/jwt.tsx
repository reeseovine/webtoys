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
	mdiFileOutline,
	mdiContentCopy,
	mdiClose
} from '@mdi/js'

import Clipboard from 'react-clipboard.js';


const parseToken = (input) => {
	try {
		let res = input.replaceAll('-','+').replaceAll('_','/')
		res = res.split('.').slice(0,2).map(atob)
		res = res.map(part => JSON.stringify(JSON.parse(part), null, '\t'))
		return res
	} catch(e) {
		return ['','']
	}
}

const Html = () => {
	const [input, setInput] = useState('')
	let [header, payload] = parseToken(input)

	return (
		<Page>
			<H1 className='mb-6'>JSON Web Token Decoder</H1>

			<Segment
				title='Input'
				controls={<>
					<FileLoader cb={data => setInput(data)} />
					<Button icon={mdiClose} hint="Clear" onClick={() => setInput('')} />
				</>}
				body={<Textarea value={input} onChange={e => setInput(e.target.value)} rows={3} />}
			/>

			<Segment
				title='Header'
				controls={<>
					<Clipboard data-clipboard-text={header}>
						<Button icon={mdiContentCopy} hint="Copy" />
					</Clipboard>
				</>}
				body={<Textarea value={header} disabled={true} rows={5} />}
			/>
			<Segment
				title='Payload'
				controls={<>
					<Clipboard data-clipboard-text={payload}>
						<Button icon={mdiContentCopy} hint="Copy" />
					</Clipboard>
				</>}
				body={<Textarea value={payload} disabled={true} rows={5} />}
			/>
		</Page>
	)
}

export default Html
