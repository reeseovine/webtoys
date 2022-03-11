import Icon from '@mdi/react'

const Config = ({ children }: Props) => (
	<div className="
		rounded-md
		border
		border-slate-700
		dark:bg-slate-800

		divide-y
		divide-slate-700
	">
		{children.map(child => (
			<div key={child.name} className="
				flex
				items-center
				gap-4

				p-4

				text-sm
			">
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

const Inline = ({ input, controls }: Props) => (
	<div className="flex justify-between gap-4">
		{input}
		{controls}
	</div>
)

const Segment = ({ type, title, controls, body }: Props) => {
	if (type === 'config'){
		title = 'Configuration'
		body = <Config children={body} />
	} else if (type === 'inline'){
		body = <Inline input={body} controls={controls} />
		controls = null
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
