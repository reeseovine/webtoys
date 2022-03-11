import { useRef } from 'react'

import Icon from '@mdi/react'
import {
	mdiFileOutline
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

	bg-white
`
const clickyClasses = `
	${sharedClasses}
	cursor-pointer

	border-slate-300
	hover:border-slate-600
	active:bg-slate-100

	dark:bg-slate-700
	dark:border-slate-600
	dark:hover:bg-slate-600
	dark:active:bg-slate-800
`

const Button = ({ icon, label, hint, className, onClick }) => (
	<div className="relative">
		<button
			onClick={onClick}
			aria-label={hint}
			className={`
				${className}
				${clickyClasses}
				z-10
				p-2.5
				peer
			`}>
			<Icon path={icon} size={.75} />
			{label}
		</button>
		<div aria-hidden="true" className="opacity-0 peer-hover:opacity-100 transition-opacity delay-150 absolute -top-9 left-1/2 -translate-x-1/2 z-20 p-2 text-xs leading-none text-white whitespace-nowrap bg-slate-600 shadow-lg rounded-md">{hint}</div>
		<div aria-hidden="true" className="opacity-0 peer-hover:opacity-100 transition-opacity delay-150 absolute -top-3 left-1/2 -translate-x-1/2 z-30 w-2 h-2 rotate-45 bg-slate-600"></div>
	</div>
)

const FileLoader = ({ className, cb }) => {
	const inputRef = useRef<HTMLInputElement>(null)

	let fileReader;
	const handleFileChosen = (file) => {
		fileReader = new FileReader()
		fileReader.onloadend = () => cb(fileReader.result)
		fileReader.readAsText(file)
	}

	return (
		<div className={className}>
			<input
				type='file'
				ref={inputRef}
				onChange={e => handleFileChosen(e.target.files[0])}
				className={`
					invisible
					w-0
					h-0
					absolute
					-top-full
				`} />
			<Button
				icon={mdiFileOutline}
				hint='Load from file'
				onClick={() => inputRef.current?.click()} />
		</div>
	)
}

const Select = ({ value, options, hint, onChange }) => (
	<select
		value={value}
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


const textClasses = `
	${sharedClasses}
	w-full
	p-2.5

	leading-normal

	border-slate-600

	dark:bg-slate-800
	dark:border-slate-700
	dark:focus:border-transparent
`

const Textarea = ({ value, rows, cols, disabled, onChange }) => (
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

const Textfield = ({ value, disabled, onChange }) => (
	<input
		type="text"
		value={value}
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
	FileLoader,
	Select,
	Textarea,
	Textfield
}
