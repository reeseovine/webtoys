import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiTranslate
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
						control: <Select options={{
									'default': "System default",
									'en-US': "English (United States)"
								}} onChange={e => Cookies.set('language', e.target.value)} />
					}
				]} />
		</Page>
	)
}

export default Settings
