import { useState } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Button,
	Select,
	Number,
	TextField,
	TextArea
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiTuneVariant,
	mdiNumeric,
	mdiWeb,
	mdiAccount,
	mdiSync
} from '@mdi/js'

import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from 'uuid'


const Tool = () => {
	const [version, setVersion] = useLocalStorage('uuid-version', '4')
	const [count, setCount] = useLocalStorage('uuid-count', 1)
	const [namespace, setNS] = useLocalStorage('uuid-namespace', '')
	const [name, setName] = useState('')
	// dummy value to allow re-rendering without changing anything else
	const [nonce, setNonce] = useState(0)

	let output = ''
	try {
		if (version === '3'){
			output = uuidv3(name, namespace)
		} else if (version === '5'){
			output = uuidv5(name, namespace)
		} else {
			for (var i = 0; i < count; i++){
				if (version === '1'){
					output += uuidv1()
				} else if (version === '4'){
					output += uuidv4()
				}

				if (i < count-1) output += '\n'
			}
		}
	} catch(e) { console.error(e) }

	return (
		<Page title='UUID Generator'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiTuneVariant,
						name: 'Version',
						description: 'Select which UUID variant to use',
						control: <Select value={version} options={[
									{key: '1', value: "1 (timestamp)"},
									{key: '3', value: "3 (namespace md5)"},
									{key: '4', value: "4 (random)"},
									{key: '5', value: "5 (namespace sha-1)"},
								]} onChange={(e: Event) => setVersion((e.target as HTMLSelectElement).value)} />
					},
					...(version === '3' || version === '5' ? [{
						icon: mdiWeb,
						name: 'Namespace UUID',
						control: <TextField
									className={`
										!w-auto
										max-w-48
									`}
									value={namespace}
									onChange={(e: Event) => setNS((e.target as HTMLInputElement).value)} />
					}, {
						icon: mdiAccount,
						name: 'Name',
						control: <TextField
									className={`
										!w-auto
										max-w-48
									`}
									value={name}
									onChange={(e: Event) => setName((e.target as HTMLInputElement).value)} />
					}] : [{
						icon: mdiNumeric,
						name: 'Count',
						description: 'How many UUIDs to generate',
						control: <Number
									value={count}
									min={1}
									onChange={(e: Event) => setCount(parseInt((e.target as HTMLInputElement).value))} />
					}])
				]} />

			<Segment
				title='Output'
				controls={[
					(version === '1' || version === '4' ? <Button icon={mdiSync} hint='Regenerate' onClick={() => setNonce(new Date().getTime())} /> : null),
					{type: 'copy', data: output}
				]}
				body={version === '3' || version === '5'
					? <TextField
						value={output}
						disabled={true} />
					: <TextArea
						value={output}
						disabled={true}
						rows={count} /> }
			/>
		</Page>
	)
}

export default Tool
