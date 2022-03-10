import Link from 'next/link'
import Icon from '@mdi/react'

import Page from '@/components/page'
import Section from '@/components/section'
import tools from '@/shared/tools'

const Tile = ({ name, icon, description, url }: Props) => {
	return (
		<Link key={url} href={url}>
			<div className='p-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-md cursor-pointer shadow transition-shadow duration-150 hover:shadow-lg flex flex-col items-stretch'>
				<div className='inline-flex justify-center'>
					<Icon
						path={icon}
						size="70%"
						className='my-4' />
				</div>
				<h2 className='mb-1 text-xl font-semibold w-full'>{name}</h2>
				<div className='grow'>{description}</div>
			</div>
		</Link>
	)
}

const Index = () => (
	<Page>
		<Section>
			<h1 className='mb-4 text-3xl font-semibold text-slate-800 dark:text-slate-200'>
				All tools
			</h1>

			<div className='grid grid-cols-2 xl:grid-cols-4 gap-6'>
				{tools.tools.map(tool => (
					<Tile
						name={tool.name}
						icon={tool.icon}
						description={tool.description}
						url={`/${tool.category}/${tool.id}`} />
				))}
			</div>
		</Section>
	</Page>
)

export default Index
