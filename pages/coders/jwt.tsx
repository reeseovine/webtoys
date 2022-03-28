import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import { Select, TextArea } from '@/components/inputs'

const parseToken = (input: string) => {
	try {
		return input
			.replaceAll('-', '+')
			.replaceAll('_', '/')
			.split('.')
			.slice(0, 2)
			.map(atob)
			.map((part) => JSON.stringify(JSON.parse(part), null, '\t'))
	} catch (e) {
		return ['', '']
	}
}

const Tool = () => {
	const [input, setInput] = useState('')
	let [header, payload] = parseToken(input)

	return (
		<Page title='JSON Web Token Decoder'>
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
						rows={3}
					/>
				}
			/>

			<Segment
				title='Header'
				controls={[{ type: 'copy', data: header }]}
				body={<TextArea value={header} disabled={true} rows={5} />}
			/>
			<Segment
				title='Payload'
				controls={[{ type: 'copy', data: payload }]}
				body={<TextArea value={payload} disabled={true} rows={5} />}
			/>
		</Page>
	)
}

export default Tool
