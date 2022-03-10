interface Props {
	children: React.ReactNode
}

const Section = ({ children }: Props) => (
	<section className='p-12 h-full overflow-y-auto'>{children}</section>
)

export default Section
