import Head from 'next/head'
import Drawer from '@/components/drawer'

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

		<div className="h-screen flex items-stretch">
			<Drawer className='basis-96 shrink-0' />
			<main className='grow bg-white dark:bg-slate-900'>
				{children}
			</main>
		</div>
	</>
)

export default Page
