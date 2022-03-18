import Image from 'next/image'

import Page from '@/components/page'
import {
	P, A
} from '@/components/typography'

import Icon from '@mdi/react'
import {
	mdiHeart,
	mdiGithub
} from '@mdi/js'

const About = () => (
	<Page>
		<div className='h-full flex flex-col justify-center items-center'>
			<Image
				src='/images/logo-circular.svg'
				alt='circular logo'
				className='w-32 mb-10 mx-auto' />

			<P className='mb-10'>
				WebToys is made with <Icon path={mdiHeart} aria-label='love' size={1} className='inline-block text-pink-500' /> by <A href="https://github.com/reeseovine">Reese Sapphire</A>
			</P>

			<a href="https://github.com/reeseovine/webtoys">
				<Icon path={mdiGithub} aria-label='github' size={1.5} className='inline-block text-slate-400 dark:text-slate-500' />
			</a>
		</div>
	</Page>
)

export default About
