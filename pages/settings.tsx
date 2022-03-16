import { useState } from 'react'

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

import Cookies from 'js-cookie'


const Settings = () => {
	return (
		<Page title='Settings'>
			<Segment
				type='config'
				title=''
				body={[
					{
						icon: mdiTranslate,
						name: 'Language',
						control: <Select options={[
									{key: 'default', value: "System default"},
									{key: 'en-US', value: "English (United States)"}
								]} onChange={e => Cookies.set('language', e.target.value)} />
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
						control: <Select options={[
									{key: 'prism', value: "Default"},
									{key: 'dark', value: "Dark"},
									{key: 'funky', value: "Funky"},
									{key: 'okaidia', value: "Okaidia"},
									{key: 'twilight', value: "Twilight"},
									{key: 'coy', value: "Coy"},
									{key: 'solarizedlight', value: "Solarized Light"},
									{key: 'tomorrow', value: "Tomorrow Night"},
								]} onChange={e => Cookies.set('prism-theme', e.target.value)} />
					}, {
						icon: mdiNumeric,
						name: 'Show line numbers',
						control: <Toggle onChange={e => Cookies.set('prism-linenumbers', e.target.value)} />
					}
				]} />
		</Page>
	)
}

export default Settings
