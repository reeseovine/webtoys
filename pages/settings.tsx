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
	const language = storage.get('language', 'default')
	const prismTheme = storage.get('prism-theme', 'duotoneDark')
	const prismLineNumbers = storage.get('prism-linenumbers', false)

	return (
		<Page title='Settings'>
			<Segment
				type='config'
				title=''
				items={[
					{
						icon: mdiTranslate,
						name: 'Language',
						control: <Select value={language} options={[
									{key: 'default', value: "System default"},
									{key: 'en-US', value: "English (United States)"}
								]} onChange={(e: Event) => storage.set('language', (e.target as HTMLSelectElement).value)} />
					}
				]} />

			<Segment
				type='config'
				title='Accessibility'
				items={[]} />

			<Segment
				type='config'
				title='Code editor'
				items={[
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
								]} onChange={(e: Event) => storage.set('prism-theme', (e.target as HTMLSelectElement).value)} />
					}, {
						icon: mdiNumeric,
						name: 'Show line numbers',
						control: <Toggle
									checked={prismLineNumbers}
									onChange={(e: Event) => storage.set('prism-linenumbers', (e.target as HTMLInputElement).checked)} />
					}
				]} />
		</Page>
	)
}

export default Settings
