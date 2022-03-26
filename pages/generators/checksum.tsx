import { useState, useEffect } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Toggle,
	FileDrop,
	TextField
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiFormatLetterCase
} from '@mdi/js'


import md5 from 'js-md5'

const toHex = (buffer: ArrayBuffer) =>
	Array.from(new Uint8Array(buffer))
	.map(x => x.toString(16).padStart(2, '0'))
	.join('')

const hash = async (input: ArrayBuffer, caps: boolean): Promise<string[]> => {
	if (input.byteLength === 0) return ['','','','']
	let results = [
		md5(input),
		toHex(await crypto.subtle.digest('SHA-1', input)),
		toHex(await crypto.subtle.digest('SHA-256', input)),
		toHex(await crypto.subtle.digest('SHA-512', input))
	]
	if (caps){
		return results.map(h => h.toUpperCase())
	}
	return results
}

const Tool = () => {
	const [caps, setCaps] = useLocalStorage('checksum-caps', false)
	const [data, setData] = useState(new ArrayBuffer(0))
	const [output, setOutput] = useState(['','','',''])

	useEffect(() => {
		hash(data, caps).then(setOutput)
	}, [data, caps])

	return (
		<Page title='File Checksum'>
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

			<Segment body={
				<FileDrop
					readAs='arrayBuffer'
					multiple={true}
					cb={(contents: ArrayBuffer, file: File) => setData(contents)}
				/>
			} />

			<Segment
				type='inline'
				title='MD5'
				controls={[{type: 'copy', data: output[0]}]}
				body={<TextField value={output[0]} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='SHA1'
				controls={[{type: 'copy', data: output[1]}]}
				body={<TextField value={output[1]} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='SHA256'
				controls={[{type: 'copy', data: output[2]}]}
				body={<TextField value={output[2]} disabled={true} />}
			/>
			<Segment
				type='inline'
				title='SHA512'
				controls={[{type: 'copy', data: output[3]}]}
				body={<TextField value={output[3]} disabled={true} />}
			/>
		</Page>
	)
}

export default Tool
