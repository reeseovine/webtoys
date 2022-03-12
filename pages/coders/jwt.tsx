import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Textarea
} from '@/components/inputs'


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

const Tool = () => {
	const [input, setInput] = useState('')
	let [header, payload] = parseToken(input)

	return (
		<Page title='JSON Web Token Decoder'>
			<Segment
				title='Input'
				controls={[
					{type: 'file', callback: data => setInput(data)},
					{type: 'clear', onClick: () => setInput('')}
				]}
				body={<Textarea value={input} onChange={e => setInput(e.target.value)} rows={3} />}
			/>

			<Segment
				title='Header'
				controls={[{type: 'copy', data: header}]}
				body={<Textarea value={header} disabled={true} rows={5} />}
			/>
			<Segment
				title='Payload'
				controls={[{type: 'copy', data: payload}]}
				body={<Textarea value={payload} disabled={true} rows={5} />}
			/>
		</Page>
	)
}

export default Tool
