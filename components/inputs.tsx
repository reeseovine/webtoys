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

import Highlight, { defaultProps } from 'prism-react-renderer'

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
`

const Button = ({ style='normal', icon, label, hint, className='', showSuccess=false, onClick }) => {
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
			</div>
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

const FileLoader = ({ accept='*', readAs='text', multiple=false, className='', cb }) => {
	const inputRef = useRef<HTMLInputElement>(null)

	let fileReader;
	const handleFileChosen = (file) => {
		if (readAs === 'objectURL'){
			return cb(URL.createObjectURL(file), file)
		}
		fileReader = new FileReader()
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
				onChange={e => Array.from(e.target.files).forEach(file => handleFileChosen(file))}
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

const FileDrop = ({ accept='*', readAs='text', multiple=true, message, className='', cb }) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const targetRef = useRef<HTMLLabelElement>(null)
	const [dragging, setDragging] = useState(false)

	let fileReader;
	const handleFileChosen = (file) => {
		if (readAs === 'objectURL'){
			return cb(URL.createObjectURL(file), file)
		}
		fileReader = new FileReader()
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

	useEffect(() => {
		targetRef.current.addEventListener('dragenter', () => setDragging(true))
		targetRef.current.addEventListener('dragleave', () => setDragging(false))
		targetRef.current.addEventListener('drop', () => setDragging(false))
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
				onChange={e => Array.from(e.target.files).forEach(file => handleFileChosen(file))}
				className={`
					absolute
					w-full
					h-full
					opacity-0
					cursor-pointer
				`} />
			<div>
				{message ? message : 'Drag and drop files here or click to select'}
			</div>
		</label>
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
		{options.map(opt => (
			<option key={opt.key} value={opt.key} selected={!!opt.default}>{opt.value}</option>
		))}
	</select>
)

const Toggle = ({ checked, className='', onChange }) => (
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

const Textarea = ({ value, rows, cols, disabled=false, className='', onChange }) => (
	<textarea
		value={value}
		rows={rows} cols={cols}
		disabled={disabled}
		onChange={onChange}
		className={className +' w-full '+ (disabled ? textClassesDisabled : textClassesEnabled)} />
)
const Textfield = ({ value, disabled=false, className='', onChange }) => (
	<input
		type="text"
		value={value}
		disabled={disabled}
		onChange={onChange}
		className={className +' w-full '+ (disabled ? textClassesDisabled : textClassesEnabled)} />
)
const Number = ({ value, min=0, max, step=1, disabled=false, className='', onChange }) => (
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

const Code = ({ value='', language='', className='', onChange }) => {
	const [input, setInput] = useState(value)
	const preRef = useRef<HTMLPreElement>(null)

	// TODO: Sanitize this value!!
	const prismTheme = require('prism-react-renderer/themes/' + storage.get('prism-theme', 'duotoneDark')).default

	var caretColor = '#777'
	if (typeof prismTheme !== undefined){
		caretColor = prismTheme?.plain.color
	}

	return (
		<div className={`
			${className}
			relative
		`}>
			<textarea
				value={input}
				spellCheck={false}
				onChange={(e) => {setInput(e.target.value); onChange(e)}}
				onScroll={(e) => {
					preRef.current?.scrollTop = e.target.scrollTop
					preRef.current?.scrollLeft = e.target.scrollLeft
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
				`}
				style={{caretColor: caretColor}} />
			<Highlight {...defaultProps} theme={prismTheme} code={input} language={language}>
			    {({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre ref={preRef} style={style} className={`
						${className}
						w-full
						h-full

						absolute
						top-0
						left-0
						right-0
						bottom-0
						z-10
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
							<div {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span {...getTokenProps({ token, key })} />
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
	FileLoader,
	FileDrop,
	Select,
	Toggle,
	Textarea,
	Textfield,
	Number,
	Code
}
