import Icon from '@mdi/react'
import {
	mdiSwapHorizontal,
	mdiContentPaste,
	mdiContentCopy,
	mdiClose
} from '@mdi/js';

const sharedClasses = `
	flex
	items-center
	gap-3

	rounded-md
	border

	text-sm
	leading-none

	transition-all
	duration-150

	bg-white
`
const clickyClasses = `
	${sharedClasses}
	border-slate-300
	hover:border-slate-600
	active:bg-slate-100

	dark:bg-slate-700
	dark:border-slate-600
	dark:hover:bg-slate-600
	dark:active:bg-slate-800
`
const textClasses = `
	${sharedClasses}
	w-full

	border-slate-600

	dark:bg-slate-800
	dark:border-slate-700
	dark:focus:border-transparent
`

const Button = ({ icon, label, hint, onClick }: Props) => (
	<div className="relative">
		<button
			onClick={onClick}
			aria-label={hint}
			className={`
				${clickyClasses}
				p-2.5
				peer
				z-10
			`}>
			<Icon path={icon} size={.75} />
			{label}
		</button>
		<div aria-hidden="true" className="opacity-0 peer-hover:opacity-100 transition-opacity duration-150 delay-150 absolute -top-9 left-1/2 -translate-x-1/2 z-20 p-2 text-xs leading-none text-white whitespace-no-wrap bg-slate-600 shadow-lg rounded-md">{hint}</div>
		<div aria-hidden="true" className="opacity-0 peer-hover:opacity-100 transition-opacity duration-150 delay-150 absolute -top-3 left-1/2 -translate-x-1/2 z-30 w-2 h-2 rotate-45 bg-slate-600"></div>
	</div>
)

const Select = ({ options, hint, onChange }: Props) => (
	<select
		onChange={onChange}
		className={`
			${clickyClasses}
			pl-2.5
			pr-8
			py-3
		`}>
		{Object.keys(options).map(key => (
			<option key={key} value={key}>{options[key]}</option>
		))}
	</select>
)

const Textarea = ({ value, rows, cols, disabled, onChange }: Props) => (
	<textarea
		value={value}
		rows={rows} cols={cols}
		disabled={disabled}
		onChange={onChange}
		className={`
			${textClasses}
			${disabled ? `
				bg-slate-50
				border-slate-400
				dark:bg-slate-900
				dark:border-slate-700
			` : ''}
		`} />
)

export {
	Button,
	Select,
	Textarea
}
