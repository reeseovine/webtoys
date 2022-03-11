import Link from 'next/link'
import { useState } from 'react';
import Icon from '@mdi/react'
import {
	mdiChevronDown,
	mdiHomeOutline
} from '@mdi/js';

import tools from '@/shared/tools.ts'

const NavEntry = ({ name, icon, id, url, children }: Props) => {
	const [collapsed, collapse] = useState(false);

	return (
		<>
			<Link key={id} href={url}>
				<div className="cursor-pointer text-slate-800 dark:text-slate-100 hover:text-slate-900 hover:dark:text-slate-90 hover:bg-slate-200 hover:dark:bg-slate-700 transition-colors duration-100 py-2 px-3 mb-1 rounded-md flex justify-between items-center gap-4">
					<Icon
						path={icon}
						size={.75}
						className='shrink-0' />
					<div className="grow whitespace-normal">{name}</div>
					{Array.isArray(children) ?
						<Icon
							path={mdiChevronDown}
							size={.75}
							onClick={() => collapse(!collapsed)}
							className={`shrink-0 transition-transform duration-150 ${collapsed ? '' : 'rotate-180'}`} />
					: null}
				</div>
			</Link>
			<div key={id+'_children'} className={`pl-8 overflow-y-hidden ${Array.isArray(children) && !collapsed ? 'h-max' : 'h-0'}`}>
				{children}
			</div>
		</>
	)
}

const Drawer = () => {
	return (
		<>
			<label htmlFor='drawer-toggle' className='
				z-20
				fixed
				top-0 left-0
				right-0 bottom-0

				bg-slate-900
				opacity-0
				peer-checked:opacity-50
				invisible
				peer-checked:visible
				transition-all
				duration-300

				cursor-pointer

				md:hidden
			' />
			<div className='
				h-full
				w-10/12
				z-30
				fixed
				top-0 left-0
				-translate-x-full
				peer-checked:translate-x-0
				transition-transform
				duration-300

				md:w-auto
				md:basis-80
				md:shrink-0
				md:transition-none
				md:relative
				md:translate-x-0

				lg:basis-96

				2xl:basis-1/3

				overflow-y-auto

				bg-slate-100
				dark:bg-slate-800
			'>
				<nav className='
					p-6
					sm:p-12
					md:p-8
					lg:p-12

					2xl:max-w-sm
					2xl:ml-auto
				'>
					<NavEntry
						name="Home"
						icon={mdiHomeOutline}
						url='/' />
					{tools.categories.map(category => (
						<NavEntry
							name={category.name}
							icon={category.icon}
							url={'/'+category.id}
							children={tools.tools.filter(tool => tool.category === category.id).map(tool => (
								<NavEntry
									name={tool.name}
									icon={tool.icon}
									url={`/${category.id}/${tool.id}`} />
							))} />
					))}
				</nav>
			</div>
		</>
	)
}

export default Drawer
