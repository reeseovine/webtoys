import Link from 'next/link'
import { useState } from 'react';
import Icon from '@mdi/react'
import {
	mdiChevronDown,
	mdiHomeOutline
} from '@mdi/js';

import tools from '@/shared/tools.ts'

const NavEntry = ({ name, icon, id, url, children }: Props) => {
	const [collapsed, collapse] = useState(true);

	return (
		<>
			<Link key={id} href={url}>
				<div className="cursor-pointer text-slate-800 dark:text-slate-100 hover:text-slate-900 hover:dark:text-slate-90 hover:bg-slate-200 hover:dark:bg-slate-700 transition-colors duration-100 py-2 px-3 mb-1 rounded-md flex justify-between items-center gap-4">
					<Icon
						path={icon}
						size={.75} />
					<div className="grow">{name}</div>
						{Array.isArray(children) ?
							<Icon
								path={mdiChevronDown}
								size={.75}
								onClick={() => collapse(!collapsed)}
								className={`transition-transform duration-150 ${collapsed ? '' : 'rotate-180'}`} />
						: null}
				</div>
			</Link>
			<div key={id+'_children'} className={`pl-8 overflow-y-hidden ${Array.isArray(children) && !collapsed ? 'h-max' : 'h-0'}`}>
				{children}
			</div>
		</>
	)
}

const Drawer = ({ className }: Props) => {
	return (
		<div className={`bg-slate-100 dark:bg-slate-800 overflow-y-auto ${className}`}>
			<nav className='p-12'>
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
	)
}

export default Drawer
