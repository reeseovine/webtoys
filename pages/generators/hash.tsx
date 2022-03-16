import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Toggle,
	Textarea,
	Textfield
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiFormatLetterCase
} from '@mdi/js'


import MD5 from 'md5.js'
import SHA from 'sha.js'

const hash = (number, caps) => {
	let results = [
		new MD5().update(number).digest('hex'),
		SHA('sha1').update(number).digest('hex'),
		SHA('sha256').update(number).digest('hex'),
		SHA('sha512').update(number).digest('hex'),
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
				body={[
					{
						icon: mdiFormatLetterCase,
						name: 'Uppercase',
						description: 'Show alphabetical digits as capital letters',
						control: <Toggle checked={caps} onChange={(e) => setCaps(e.target.checked)} />
					}
				]} />

			<Segment
				title='Input'
				controls={[
					{type: 'file', callback: data => setInput(data)},
					{type: 'clear', onClick: () => setInput('')}
				]}
				body={<Textarea value={input} onChange={e => setInput(e.target.value)} rows={6} />}
			/>

			<Segment
				type='inline'
				title='MD5'
				controls={[{type: 'copy', data: resultMD5}]}
				body={<Textfield value={resultMD5} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='SHA1'
				controls={[{type: 'copy', data: resultSHA1}]}
				body={<Textfield value={resultSHA1} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='SHA256'
				controls={[{type: 'copy', data: resultSHA256}]}
				body={<Textfield value={resultSHA256} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='SHA512'
				controls={[{type: 'copy', data: resultSHA512}]}
				body={<Textfield value={resultSHA512} disabled={true} />}
			/>
		</Page>
	)
}

export default Tool
