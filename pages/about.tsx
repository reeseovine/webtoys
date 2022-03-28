import Page from '@/components/page'
import { P, A } from '@/components/typography'

import Icon from '@mdi/react'
import { mdiHeart, mdiGithub } from '@mdi/js'

const About = () => (
	<Page className='h-full'>
		<div className='h-full flex flex-col justify-center items-center gap-10'>
			<img src='/images/logo-circular.svg' alt='WebToys logo' width={128} height={128} />

			<P className='text-center'>
				WebToys is made with{' '}
				<Icon path={mdiHeart} aria-label='love' size={1} className='inline-block text-pink-500' />{' '}
				by <A href='https://github.com/reeseovine'>Reese Sapphire</A>
			</P>

			<a href='https://github.com/reeseovine/webtoys' className='mb-20'>
				<Icon
					path={mdiGithub}
					aria-label='github'
					size={1.5}
					className='inline-block text-slate-400 dark:text-slate-500'
				/>
			</a>
		</div>
	</Page>
)

export default About
