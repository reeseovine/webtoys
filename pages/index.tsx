import Link from 'next/link'
import Icon from '@mdi/react'

import Page from '@/components/page'
import Section from '@/components/section'

import tools from '@/shared/tools.ts'
import classes from '@/shared/classes.ts'

const Tile = ({ name, icon, description, url }: Props) => {
	return (
		<Link key={url} href={url}>
			<div className='
				flex
				flex-col
				items-stretch

				p-4
				rounded-md
				cursor-pointer
				shadow
				hover:shadow-lg
				transition-shadow

				bg-white
				text-slate-800
				dark:bg-slate-800
				dark:text-slate-200
			'>
				<div className='inline-flex justify-center'>
					<Icon
						path={icon}
						size="70%"
						className='my-4 max-w-[128px]' />
				</div>
				<h2 className='mb-1 text-xl font-semibold w-full'>{name}</h2>
				<div className='grow'>{description}</div>
			</div>
		</Link>
	)
}

const Index = () => (
	<Page>
		<h1 className={`mb-6 ${classes.headings.h1}`}>
			All tools
		</h1>

		<div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
			{tools.tools.map(tool => (
				<Tile
					name={tool.name}
					icon={tool.icon}
					description={tool.description}
					url={`/${tool.category}/${tool.id}`} />
			))}
		</div>
	</Page>
)

export default Index
