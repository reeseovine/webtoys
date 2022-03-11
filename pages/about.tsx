import Link from 'next/link'

import Page from '@/components/page'

import Icon from '@mdi/react'
import {
	mdiHeart,
	mdiGithub
} from '@mdi/js'

const About = () => (
	<Page>
		<div className='text-center leading-relaxed'>
			<img
				src='/images/logo-circular.svg'
				alt='circular logo'
				className='w-32 mt-10 mb-16 mx-auto' />

			<p className='mb-6 text-lg'>
				WebToys is made with <Icon path={mdiHeart} alt='love' size={1} className='inline-block text-pink-500' /> by <a href="https://github.com/katacarbix">Reese Sapphire</a>
			</p>

			<a href="https://github.com/katacarbix">
				<Icon path={mdiGithub} alt='github' size={1.5} className='inline-block text-slate-400 dark:text-slate-500' />
			</a>
		</div>
	</Page>
)

export default About
