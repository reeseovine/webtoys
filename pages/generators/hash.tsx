import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Toggle,
	TextArea,
	TextField
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiFormatLetterCase
} from '@mdi/js'


import md5 from 'js-md5'
import SHA from 'sha.js'

const hash = (input: string, caps: boolean) => {
	let results = [
		md5(input),
		SHA('sha1').update(input).digest('hex'),
		SHA('sha256').update(input).digest('hex'),
		SHA('sha512').update(input).digest('hex'),
	]
	if (caps){
		return results.map(h => h.toUpperCase())
	} else {
		return results
	}
}

const Tool = () => {
	const [caps, setCaps] = useState(false)
	const [input, setInput] = useState('')

	let [resultMD5, resultSHA1, resultSHA256, resultSHA512] = hash(input, caps)

	return (
		<Page title='Hash Generator'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiFormatLetterCase,
						name: 'Uppercase',
						description: 'Show alphabetical digits as capital letters',
						control: <Toggle checked={caps} onChange={(e: Event) => setCaps((e.target as HTMLInputElement).checked)} />
					}
				]} />

			<Segment
				title='Input'
				controls={[
					{type: 'file', callback: (data: string) => setInput(data)},
					{type: 'clear', onClick: () => setInput('')}
				]}
				body={<TextArea value={input} onChange={(e: Event) => setInput((e.target as HTMLTextAreaElement).value)} rows={6} />}
			/>

			<Segment
				type='inline'
				title='MD5'
				controls={[{type: 'copy', data: resultMD5}]}
				body={<TextField value={resultMD5} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='SHA1'
				controls={[{type: 'copy', data: resultSHA1}]}
				body={<TextField value={resultSHA1} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='SHA256'
				controls={[{type: 'copy', data: resultSHA256}]}
				body={<TextField value={resultSHA256} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='SHA512'
				controls={[{type: 'copy', data: resultSHA512}]}
				body={<TextField value={resultSHA512} disabled={true} />}
			/>
		</Page>
	)
}

export default Tool
