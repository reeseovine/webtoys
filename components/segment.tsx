import Icon from '@mdi/react'

const Controls = ({ children }: Props) => (
	<div className="rounded-md border light:border-slate-700 dark:bg-slate-800 dark:border-slate-700">
		{children.map(child => (
			<div className="py-4 px-6 flex items-center gap-8">
				<Icon
					path={child.icon}
					size={1}
					className='hidden sm:block shrink-0' />
				<div className="grow">
					<div className="font-semibold">{child.name}</div>
					<div>{child.description}</div>
				</div>
				<div>
					{child.control}
				</div>
			</div>
		))}
	</div>
)

const Segment = ({ type, title, controls, body }: Props) => {
	if (type === 'config'){
		title = 'Configuration'
		body = <Controls children={body} />
	}
	return (
		<div className='mb-6'>
			<div className="mb-2 flex items-end justify-between gap-2">
				<h2 className='text-xl grow'>{title}</h2>
				{controls}
			</div>
			{body}
		</div>
	)
}

export default Segment
