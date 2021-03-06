import Head from 'next/head'
import { useRouter } from 'next/router'

import Drawer from '@/components/drawer'
import { H1 } from '@/components/typography'

import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js'

interface PageProps {
	title?: string
	children: React.ReactNode
	className?: string
}

const Page = ({ title, children, className = '' }: PageProps) => {
	const router = useRouter()

	return (
		<>
			{title && router.pathname !== '/' ? (
				<Head>
					<title>{title} - WebToys</title>
				</Head>
			) : null}

			<div
				className='
					h-screen
					w-full

					md:flex
					md:items-stretch
				'
			>
				<input id='drawer-toggle' type='checkbox' className='hidden peer' />
				<Drawer />
				<section
					className='
						h-full
						overflow-y-auto
						grow
						z-10

						bg-white
						dark:bg-slate-900
					'
				>
					<div
						className={`
							${className}
							min-h-full
							2xl:max-w-5xl
							flex
							flex-col

							p-6
							sm:p-12
						`}
					>
						<label
							htmlFor='drawer-toggle'
							className='
								block
								mt-2
								mb-6
								lg:hidden
							'
						>
							<Icon path={mdiMenu} size={1} className='cursor-pointer' />
						</label>
						<H1 className='mb-6'>{title}</H1>
						{children}
					</div>
				</section>
			</div>
		</>
	)
}

export default Page
