import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Textarea
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiSwapHorizontal
} from '@mdi/js'

import he from 'he'


const Tool = () => {
	const [mode, setMode] = useState('encode')
	const [input, setInput] = useState('')
	let output = he[mode](input)

	return (
		<Page title='HTML Entity Encoder & Decoder'>
			<Segment
				type='config'
				body={[
					{
						icon: mdiSwapHorizontal,
						name: 'Conversion',
						description: 'Select which conversion mode you want to use',
						control: <Select value={mode} options={[
									{key: 'encode', value: "Encode"},
									{key: 'decode', value: "Decode"}
								]} onChange={e => setMode(e.target.value)} />
					}
				]} />

			<Segment
				title='Input'
				controls={[
					{type: 'file', callback: data => setInput(data)},
					{type: 'clear', onClick: () => setInput('')}
				]}
				body={<Textarea value={input} onChange={e => setInput(e.target.value)} rows={5} />}
			/>

			<Segment
				title='Output'
				controls={[{type: 'copy', data: output}]}
				body={<Textarea value={output} disabled={true} rows={5} />}
			/>
		</Page>
	)
}

export default Tool
