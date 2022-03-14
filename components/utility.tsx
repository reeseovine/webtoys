import Icon from '@mdi/react'
import {
	mdiCheck,
	mdiClose,
	mdiLoading,
} from '@mdi/js'

// The child element needs to have a `peer` class for this to work
const ToolTip = ({ text, children }) => (
	<div className='relative'>
		{children}
		<div aria-hidden="true" className="
			z-50
			absolute
			-top-9
			left-1/2
			-translate-x-1/2

			p-2

			shadow-lg
			rounded-md
			bg-slate-600

			opacity-0
			peer-hover:opacity-100
			transition-opacity
			delay-150

			text-xs
			leading-none
			text-white
			whitespace-nowrap
		">{text}</div>
		<div aria-hidden="true" className="
			w-2
			h-2
			z-40
			absolute
			-top-3
			left-1/2
			-translate-x-1/2
			rotate-45

			bg-slate-600

			opacity-0
			peer-hover:opacity-100
			transition-opacity
			delay-150
		"></div>
	</div>
)


const StatusGood = ({ size=1, className='' }) => (
	<Icon
		path={mdiCheck}
		size={size}
		className={`${className} text-lime-600 dark:text-lime-500`} />
)
const StatusBad = ({ size=1, className='' }) => (
	<Icon
		path={mdiClose}
		size={size}
		className={`${className} text-red-500 dark:text-red-500`} />
)
const StatusLoading = ({ size=1, className='' }) => (
	<Icon
		path={mdiLoading}
		size={size}
		spin={1.5}
		className={`${className} text-sky-400 dark:text-sky-500`} />
)


export {
	ToolTip,
	StatusGood,
	StatusBad,
	StatusLoading
}
