import Icon from '@mdi/react'
import {
	mdiContentCopy,
	mdiClose
} from '@mdi/js'

import {
	Button,
	FileButton
} from '@/components/inputs'
import {
	H2
} from '@/components/typography'

import Clipboard from 'react-clipboard.js';


type ConfigItem = {
	icon: string,
	name: string,
	description?: string,
	control: React.ReactNode
}
interface ConfigProps {
	items: ConfigItem[]
}
const Config = ({ items }: ConfigProps) => (
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
		{items.filter(i => i !== null && typeof i === 'object').map(item => (
			<div key={item.name} className="
				flex
				items-center
				gap-4

				p-4

				text-sm
			">
				<Icon
					path={item.icon}
					size={1}
					className='hidden sm:block shrink-0' />
				<div className="grow">
					<div className="font-semibold">{item.name}</div>
					<div>{item.description}</div>
				</div>
				{item.control}
			</div>
		))}
	</div>
)

type Control = {
	type:
		| 'copy'
		| 'clear'
		| 'file'
	callback?: any,
	onClick?: any,
	data?: string,
	hint?: string,
}
interface InlineProps {
	body: React.ReactNode,
	controls: Control[] | React.ReactNode
}
const Inline = ({ body, controls }: InlineProps) => (
	<div className="flex justify-between gap-4">
		{body}
		{controls}
	</div>
)

interface SegmentProps {
	type?: string,
	title?: string,
	controls?: Control[] | React.ReactNode,
	body?: React.ReactNode,
	items?: ConfigItem[],
	className?: string
}
const Segment = ({ type, title, controls=[], body, items=[], className='' }: SegmentProps) => {
	if (Array.isArray(controls)){
		controls = controls.map((control, i) => {
			if (control === null) return
			switch (control.type){
				case 'clear':
					return <Button key={i} icon={mdiClose} hint={control.hint ? control.hint : 'Clear'} onClick={control.onClick} />
				case 'copy':
					return (
						<Clipboard key={i} data-clipboard-text={control.data}>
							<Button icon={mdiContentCopy} hint={control.hint ? control.hint : 'Copy'} showSuccess={true} />
						</Clipboard>
					)
				case 'file':
					return (
						<FileButton key={i} cb={control.callback} />
					)
				default:
					return control
			}
		})
	}

	if (type === 'config'){
		if (typeof title === 'undefined') title = 'Configuration'
		body = <Config items={items} />
	} else if (type === 'inline'){
		body = <Inline body={body} controls={controls} />
		controls = null
	}
	return (
		<div className={'mb-6 ' + className}>
			{title || controls ?
				<div className="mb-2 flex items-end justify-between gap-2">
					<H2 className='grow'>{title}</H2>
					{controls}
				</div>
				: null}
			{body}
		</div>
	)
}

export default Segment
