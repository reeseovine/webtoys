import Head from 'next/head'
import Drawer from '@/components/drawer'

import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js';

interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>{title} - WebToys</title>
			</Head>
		) : null}

		<div className='
			h-screen
			w-full

			md:flex
			md:flex-row-reverse
			md:items-stretch
		'>
			<input id="drawer-toggle" type="checkbox" class="hidden peer" />
			<section className='
				h-full
				overflow-y-auto
				grow
				z-10

				p-6
				sm:p-12
				md:p-8
				lg:p-12

				bg-white
				dark:bg-slate-900
			'>
				<div className='
					2xl:max-w-5xl
				'>
					<label htmlFor='drawer-toggle' className='
						block
						mt-2
						mb-6
						md:hidden
					'>
						<Icon
							path={mdiMenu}
							size={1}
							className='cursor-pointer' />
					</label>
					{children}
				</div>
			</section>
			<Drawer />
		</div>
	</>
)

export default Page
