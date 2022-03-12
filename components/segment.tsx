import Icon from '@mdi/react'
import {
	H2
} from '@/components/typography'

const Config = ({ children }) => (
	<div className="
		rounded-md
		border
		bg-slate-50
		border-slate-300

		dark:bg-slate-800
		dark:border-slate-700

		divide-y
		divide-slate-300
		dark:divide-slate-700
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
				{child.control}
			</div>
		))}
	</div>
)

const Inline = ({ input, controls }) => (
	<div className="flex justify-between gap-4">
		{input}
		{controls}
	</div>
)

const Segment = ({ type, title, controls, body }) => {
	if (type === 'config'){
		if (typeof title === 'undefined') title = 'Configuration'
		body = <Config children={body} />
	} else if (type === 'inline'){
		body = <Inline input={body} controls={controls} />
		controls = null
	}
	return (
		<div className='mb-6'>
			<div className="mb-2 flex items-end justify-between gap-2">
				<H2 className='grow'>{title}</H2>
				{controls}
			</div>
			{body}
		</div>
	)
}

export default Segment
