const headingClasses = `
	text-slate-800
	dark:text-slate-200
`
const H1 = ({className, children}) => (
	<h1 className={`${className} ${headingClasses} text-3xl font-semibold`}>
		{children}
	</h1>
)
const H2 = ({className, children}) => (
	<h2 className={`${className} ${headingClasses} text-xl`}>
		{children}
	</h2>
)
const H3 = ({className, children}) => (
	<h3 className={`${className} ${headingClasses} text-lg`}>
		{children}
	</h3>
)

const P = ({className, children}) => (
	<p className={`
		${className}
		max-w-prose
		mx-auto

		text-base
		leading-relaxed
	`}>
		{children}
	</p>
)

const A = ({href, className, children}) => (
	<a
		href={href}
		className={`
			${className}
			cursor-pointer

			text-sky-600
			hover:text-sky-500
			dark:text-sky-400
			hover:dark:text-sky-300
		`}
	>
		{children}
	</a>
)

export {
	H1,
	H2,
	H3,
	A,
	P
}
