import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiChevronDown, mdiHomeOutline, mdiCogOutline, mdiInformationVariant } from '@mdi/js'

import { categories, tools, CategoryType, ToolType } from '@/shared/tools'

interface EntryProps {
	name: string
	icon: string
	url?: string
	onClick?: any
	caret?: boolean
	collapsed?: boolean
	className?: string
}

const Entry = ({
	name,
	icon,
	url = '',
	onClick,
	caret = false,
	collapsed,
	className = '',
}: EntryProps) => {
	const router = useRouter()
	let entry = (
		<div
			onClick={onClick}
			className={`
				${className}
				flex
				justify-between
				items-center
				gap-4

				py-2
				px-3
				my-0.5

				rounded-md

				text-slate-800
				dark:text-slate-100

				${router.pathname === url ? 'bg-slate-200 dark:bg-slate-700' : ''}

				cursor-pointer
				hover:text-slate-900
				hover:dark:text-slate-90
				hover:bg-slate-200
				hover:dark:bg-slate-700
				transition-colors
				duration-100
			`}
		>
			<Icon path={icon} size={0.75} className='shrink-0' />
			<div className='grow whitespace-normal'>{name}</div>
			{caret ? (
				<Icon
					path={mdiChevronDown}
					size={0.75}
					className={`shrink-0 transition-transform ${collapsed ? '' : 'rotate-180'}`}
				/>
			) : null}
		</div>
	)

	if (url && url.length > 0) {
		return <Link href={url}>{entry}</Link>
	} else {
		return entry
	}
}

interface CategoryProps {
	name: string
	icon: string
	id: string
	children: any
}
const Category = ({ name, icon, id, children }: CategoryProps) => {
	const router = useRouter()
	const [collapsed, collapse] = useState(router.pathname.split('/')[1] !== id)

	return (
		<>
			<Entry
				name={name}
				icon={icon}
				caret={true}
				collapsed={collapsed}
				onClick={() => collapse(!collapsed)}
			/>
			<div
				className={`pl-8 overflow-y-hidden ${
					Array.isArray(children) && !collapsed ? 'h-max' : 'h-0'
				}`}
			>
				{children}
			</div>
		</>
	)
}

const Drawer = () => {
	return (
		<>
			<label
				htmlFor='drawer-toggle'
				className='
					z-20
					fixed
					top-0 left-0
					right-0 bottom-0

					bg-slate-900
					opacity-0
					peer-checked:opacity-60
					invisible
					peer-checked:visible
					transition-all
					duration-300

					cursor-pointer

					lg:hidden
				'
			/>
			<div
				className='
					h-full
					w-10/12
					max-w-md
					z-30
					fixed
					top-0 left-0
					-translate-x-full
					peer-checked:translate-x-0
					transition-transform
					duration-300

					peer-checked:shadow-2xl

					lg:w-auto
					lg:max-w-none
					lg:shrink-0
					lg:basis-96
					lg:transition-none
					lg:relative
					lg:translate-x-0
					lg:!shadow-none

					2xl:basis-1/3

					overflow-y-auto

					bg-slate-100
					dark:bg-slate-800
				'
			>
				<nav
					className='
						p-6
						sm:p-12

						2xl:max-w-sm
						2xl:ml-auto
					'
				>
					<Entry name='Home' icon={mdiHomeOutline} url='/' className='mb-8' />
					{categories.map((category: CategoryType) => (
						<Category key={category.id} id={category.id} name={category.name} icon={category.icon}>
							{tools
								.filter((tool: ToolType) => tool.category === category.id)
								.map((tool) => (
									<Entry
										key={tool.id}
										name={tool.name}
										icon={tool.icon}
										url={`/${category.id}/${tool.id}`}
									/>
								))}
						</Category>
					))}
					<Entry name='Settings' icon={mdiCogOutline} url='/settings' className='mt-8' />
					<Entry name='About' icon={mdiInformationVariant} url='/about' />
				</nav>
			</div>
		</>
	)
}

export default Drawer
