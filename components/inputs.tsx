import { useRef, useState, useEffect } from 'react'
import storage from '@/shared/storage'

import Icon from '@mdi/react'
import {
	mdiFileOutline
} from '@mdi/js';

import {
	H2
} from '@/components/typography'
import {
	ToolTip,
	StatusGood,
	StatusBad
} from '@/components/utility'

import Highlight, { defaultProps, Language } from 'prism-react-renderer'

const sharedClasses = `
	rounded-md
	border

	bg-white

	text-sm
	leading-none

	transition-all
`
const clickyClasses = `
	${sharedClasses}
	gap-3
	p-2.5
	cursor-pointer

	border-slate-300
	hover:border-slate-500
	active:bg-slate-100

	dark:bg-slate-700
	dark:border-slate-600
	dark:hover:bg-slate-600
	dark:active:bg-slate-800

	whitespace-nowrap
`
const flatClasses = `
	${sharedClasses}
	p-1.5
	-m-1.5
	cursor-pointer
	bg-transparent
	border-transparent
	active:bg-slate-300
	dark:active:bg-slate-700

	whitespace-nowrap
`

interface ButtonProps {
	style?: string,
	icon?: string,
	label?: string,
	hint?: string,
	className?: string,
	showSuccess?: boolean,
	onClick?: any
}
const Button = ({ style='normal', icon, label, hint, className='', showSuccess=false, onClick }: ButtonProps) => {
	const [success, setSuccess] = useState(false)

	let button = (
		<button
			onClick={(e) => {
				if (showSuccess){
					setSuccess(true)
					setTimeout(() => setSuccess(false), 3000)
				}
				if (onClick) onClick(e)
			}}
			aria-label={hint}
			className={`
				${className}
				${style === 'flat' ? flatClasses : clickyClasses}
				flex
				items-center

				z-10
				peer
			`}>
			{ icon ?
				<div className={`
					grid
				`}>
					<Icon
						path={icon}
						size={style === 'flat' ? 1 : .75}
						className={`
							col-start-1
							row-start-1

							transition-opacity
							${success ? 'opacity-0' : 'opacity-1'}`} />
					<StatusGood
						size={style === 'flat' ? 1 : .75}
						className={`
							col-start-1
							row-start-1

							transition-opacity
							${success ? 'opacity-1' : 'opacity-0'}`} />
				</div> : null}
			{label}
		</button>
	)

	if (hint){
		return (
			<ToolTip text={hint}>
				{button}
			</ToolTip>
		)
	} else {
		return button
	}
}


const handleFileChosen = (file: File, readAs: string, cb: any) => {
	if (readAs === 'objectURL'){
		return cb(URL.createObjectURL(file), file)
	}
	const fileReader = new FileReader()
	fileReader.onloadend = () => cb(fileReader.result, file)
	switch (readAs){
		case 'text':
			fileReader.readAsText(file)
			break
		case 'dataURL':
			fileReader.readAsDataURL(file)
			break
		case 'binary':
			fileReader.readAsBinaryString(file)
			break
		case 'buffer':
			fileReader.readAsArrayBuffer(file)
			break
	}
}

interface FileProps {
	accept?: string,
	readAs?: string,
	multiple?: boolean,
	className?: string,
	cb: any,
}
const FileButton = ({ accept='*', readAs='text', multiple=false, className='', cb }: FileProps) => {
	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<div className={`
			${className}
			relative
		`}>
			<input
				type='file'
				accept={accept}
				multiple={multiple}
				ref={inputRef}
				onChange={e => Array.prototype.every.call(e.target.files, file => handleFileChosen(file, readAs, cb))}
				className={`
					absolute
					w-full
					h-full
					z-10
					opacity-0
				`} />
			<Button
				className='relative z-20'
				icon={mdiFileOutline}
				hint='Load from file'
				onClick={() => inputRef.current?.click()} />
		</div>
	)
}

interface FileDropProps extends FileProps {
	message?: string
}
const FileDrop = ({ accept='*', readAs='text', multiple=true, message='Drag and drop files here or click to select', className='', cb }: FileDropProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const targetRef = useRef<HTMLLabelElement>(null)
	const [dragging, setDragging] = useState(false)

	useEffect(() => {
		targetRef.current?.addEventListener('dragenter', () => setDragging(true))
		targetRef.current?.addEventListener('dragleave', () => setDragging(false))
		targetRef.current?.addEventListener('drop', () => setDragging(false))
	}, []);

	return (
		<label ref={targetRef} className={`
			${className}
			w-full
			h-48
			flex
			justify-center
			items-center
			relative

			rounded-lg
			outline
			outline-4
			outline-dashed

			transition-all

			${dragging ? `
				bg-sky-300
				outline-white
				text-slate-50

				dark:bg-sky-500
				dark:outline-slate-50
				dark:text-slate-50

				outline-offset-[-8px]
			` : `
				bg-slate-50
				outline-slate-300
				text-slate-500

				dark:bg-slate-800
				dark:outline-slate-700
				dark:text-slate-400

				outline-offset-[-4px]
			`}
		`}>
			<input
				type='file'
				accept={accept}
				multiple={multiple}
				ref={inputRef}
				onChange={e => Array.prototype.every.call(e.target.files, file => handleFileChosen(file, readAs, cb))}
				className={`
					absolute
					w-full
					h-full
					opacity-0
					cursor-pointer
				`} />
			<div>
				{message}
			</div>
		</label>
	)
}

interface SelectProps {
	value?: string,
	options: { key: string, value: string }[],
	onChange?: any
}
const Select = ({ value, options, onChange }: SelectProps) => (
	<select
		value={value}
		onChange={onChange}
		className={`
			${clickyClasses}
			pl-2.5
			pr-8
			py-3
		`}>
		{options.map(opt => (
			<option key={opt.key} value={opt.key}>{opt.value}</option>
		))}
	</select>
)

interface ToggleProps {
	checked?: boolean,
	className?: string,
	onChange?: any
}
const Toggle = ({ checked, className='', onChange }: ToggleProps) => (
	<label className="
		relative
		w-12
		h-6
	">
		<input type="checkbox"
			checked={checked}
			onChange={onChange}
			className='
				peer

				absolute
				w-full
				h-full
				z-10
				opacity-0
			' />
		{/* track */}
		<div aria-hidden="true" className="
			w-full
			h-full
			z-20
			absolute

			rounded-full
			cursor-pointer

			bg-slate-300
			dark:bg-slate-500
			peer-checked:bg-sky-500

			transition-colors
		" />
		{/* slider */}
		<div aria-hidden="true" className="
			w-4
			h-4
			z-30
			absolute
			top-1
			left-1

			rounded-full
			cursor-pointer

			peer-checked:translate-x-6
			transition-transform

			bg-white
		" />
	</label>
)


const textClasses = `
	${sharedClasses}
	p-2.5

	leading-normal
`
const textClassesEnabled = `
	${textClasses}
	border-slate-600

	dark:bg-slate-800
	dark:border-slate-700
	dark:focus:border-transparent
`
const textClassesDisabled = `
	${textClasses}
	bg-slate-50
	border-slate-300

	dark:bg-slate-900
	dark:border-slate-700
`

interface TextFieldProps {
	value?: string,
	disabled?: boolean,
	className?: string,
	onChange?: any
}
const TextField = ({ value, disabled=false, className='', onChange }: TextFieldProps) => (
	<input
		type="text"
		value={value}
		disabled={disabled}
		onChange={onChange}
		className={className +' w-full '+ (disabled ? textClassesDisabled : textClassesEnabled)} />
)
interface TextAreaProps extends TextFieldProps {
	rows?: number,
	cols?: number
}
const TextArea = ({ value, rows, cols, disabled=false, className='', onChange }: TextAreaProps) => (
	<textarea
		value={value}
		rows={rows} cols={cols}
		disabled={disabled}
		onChange={onChange}
		className={className +' w-full '+ (disabled ? textClassesDisabled : textClassesEnabled)} />
)
interface NumberProps extends TextFieldProps {
	min?: number,
	max?: number,
	step?: number
}
const Number = ({ value, min=0, max, step=1, disabled=false, className='', onChange }: NumberProps) => (
	<input
		type="number"
		value={value}
		min={min}
		max={max}
		step={step}
		disabled={disabled}
		onChange={onChange}
		className={`
			${className}
			${disabled ? textClassesDisabled : textClassesEnabled}
			w-24

			pl-3
			py-2
		`} />
)

interface CodeProps {
	value?: string,
	language: Language,
	editable?: boolean,
	className?: string,
	onChange?: any
}
const Code = ({ value='', language, editable=false, className='', onChange }: CodeProps) => {
	const preRef = useRef<HTMLPreElement>(null)

	// TODO: Sanitize this value!!
	const prismTheme = require('prism-react-renderer/themes/' + storage.get('prism-theme', 'duotoneDark')).default

	let caretColor
	if (typeof prismTheme !== undefined){
		caretColor = prismTheme?.plain.color
	}

	const textbox = (
		<textarea
			value={value}
			spellCheck={false}
			onChange={onChange}
			onScroll={(e: React.UIEvent<HTMLTextAreaElement>) => {
				if (preRef?.current){
					preRef.current.scrollTop  = e.currentTarget.scrollTop
					preRef.current.scrollLeft = e.currentTarget.scrollLeft
				}
			}}
			className={`
				w-full
				h-full

				absolute
				top-0
				left-0
				right-0
				bottom-0
				z-20
				overflow-y-auto
				resize-none

				!m-0
				!p-4

				bg-transparent
				border-0
				!ring-0
				whitespace-pre-wrap

				!font-mono
				!text-base
				!text-transparent
				caret-neutral-400
			`}
			style={{caretColor: caretColor+' !important'}} />
	)

	return (
		<div className={`
			${className}
			${editable ? `
				relative
			` : ''}
		`}>
			{editable ? textbox : null}
			<Highlight {...defaultProps}
				theme={prismTheme}
				code={value}
				language={language}
			>
			    {({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre ref={preRef} style={style} className={`
						${className}
						${editable ? `
							absolute
							top-0
							left-0
							right-0
							bottom-0
							z-10
						` : 'select-text'}

						w-full
						h-full

						overflow-y-auto

						!m-0
						!p-4

						border
						rounded-md
						border-slate-600

						!whitespace-pre-wrap
						no-whitespace-normalization

						!font-mono
						!text-base
					`}>
				        {tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
			    )}
			</Highlight>
		</div>
	)
}

export {
	Button,
	FileButton,
	FileDrop,
	Select,
	Toggle,
	TextArea,
	TextField,
	Number,
	Code
}
