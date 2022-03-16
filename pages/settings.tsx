import { useState } from 'react'

import storage from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Toggle
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiTranslate,
	mdiPaletteOutline,
	mdiNumeric
} from '@mdi/js'


const Settings = () => {
	const [language, setLanguage] = useState(storage.get('language', 'default'))
	storage.set('language', language)

	const [prismTheme, setPrismTheme] = useState(storage.get('prism-theme', 'duotoneDark'))
	storage.set('prism-theme', prismTheme)
	const [prismLineNumbers, setPrismLineNumbers] = useState(storage.get('prism-linenumbers', false))
	storage.set('prism-linenumbers', prismLineNumbers)

	return (
		<Page title='Settings'>
			<Segment
				type='config'
				title=''
				body={[
					{
						icon: mdiTranslate,
						name: 'Language',
						control: <Select value={language} options={[
									{key: 'default', value: "System default"},
									{key: 'en-US', value: "English (United States)"}
								]} onChange={e => setLanguage(e.target.value)} />
					}
				]} />

			<Segment
				type='config'
				title='Accessibility'
				body={[]} />

			<Segment
				type='config'
				title='Code editor'
				body={[
					{
						icon: mdiPaletteOutline,
						name: 'Color scheme',
						control: <Select value={prismTheme} options={[
									{key: 'dracula', value: "Dracula"},
									{key: 'duotoneDark', value: "Duotone (Dark)"},
									{key: 'duotoneLight', value: "Duotone (Light)"},
									{key: 'github', value: "GitHub"},
									{key: 'nightOwl', value: "Night Owl (Dark)"},
									{key: 'nightOwlLight', value: "Night Owl (Light)"},
									{key: 'oceanicNext', value: "Oceanic Next"},
									{key: 'okaidia', value: "Okaidia"},
									{key: 'palenight', value: "Pale Night"},
									{key: 'shadesOfPurple', value: "Shades of Purple"},
									{key: 'synthwave84', value: "Synthwave 84"},
									{key: 'ultramin', value: "Ultramin"},
									{key: 'vsDark', value: "VSCode (Dark)"},
									{key: 'vsLight', value: "VSCode (Light)"},
								]} onChange={e => setPrismTheme(e.target.value)} />
					}, {
						icon: mdiNumeric,
						name: 'Show line numbers',
						control: <Toggle
									value={prismLineNumbers}
									onChange={e => setPrismLineNumbers(e.target.value)} />
					}
				]} />
		</Page>
	)
}

export default Settings
