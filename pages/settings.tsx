import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import { Select, Toggle } from '@/components/inputs'

import Icon from '@mdi/react'
import { mdiTranslate, mdiPaletteOutline, mdiNumeric } from '@mdi/js'

const Settings = () => {
	const [language, setLanguage] = useLocalStorage('language', 'default')
	const [prismTheme, setPrismTheme] = useLocalStorage('prism-theme', 'duotoneDark')
	const [prismLineNumbers, setPrismLineNumbers] = useLocalStorage('prism-linenumbers', false)

	return (
		<Page title='Settings'>
			<Segment
				type='config'
				title='General'
				items={[
					{
						icon: mdiTranslate,
						name: 'Language',
						control: (
							<Select
								value={language}
								options={[
									{ key: 'default', value: 'System default' },
									{ key: 'en-US', value: 'English (United States)' },
								]}
								onChange={(e: Event) => setLanguage((e.target as HTMLSelectElement).value)}
							/>
						),
					},
				]}
			/>

			{/*<Segment
				type='config'
				title='Accessibility'
				items={[]} />*/}

			<Segment
				type='config'
				title='Code editor'
				items={[
					{
						icon: mdiPaletteOutline,
						name: 'Color scheme',
						control: (
							<Select
								value={prismTheme}
								options={[
									{ key: 'dracula', value: 'Dracula' },
									{ key: 'duotoneDark', value: 'Duotone (Dark)' },
									{ key: 'duotoneLight', value: 'Duotone (Light)' },
									{ key: 'github', value: 'GitHub' },
									{ key: 'nightOwl', value: 'Night Owl (Dark)' },
									{ key: 'nightOwlLight', value: 'Night Owl (Light)' },
									{ key: 'oceanicNext', value: 'Oceanic Next' },
									{ key: 'okaidia', value: 'Okaidia' },
									{ key: 'palenight', value: 'Pale Night' },
									{ key: 'shadesOfPurple', value: 'Shades of Purple' },
									{ key: 'synthwave84', value: 'Synthwave 84' },
									{ key: 'ultramin', value: 'Ultramin' },
									{ key: 'vsDark', value: 'VSCode (Dark)' },
									{ key: 'vsLight', value: 'VSCode (Light)' },
								]}
								onChange={(e: Event) => setPrismTheme((e.target as HTMLSelectElement).value)}
							/>
						),
					} /* {
						icon: mdiNumeric,
						name: 'Show line numbers',
						control: <Toggle
									checked={prismLineNumbers}
									onChange={(e: Event) => setPrismLineNumbers((e.target as HTMLInputElement).checked)} />
					}, */,
				]}
			/>
		</Page>
	)
}

export default Settings
