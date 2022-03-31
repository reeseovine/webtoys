import { useState, useEffect } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment, { ConfigItem } from '@/components/segment'
import { Select, Number, Toggle, Code } from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiTranslate,
	mdiArrowExpandHorizontal,
	mdiFormatIndentIncrease,
	mdiFormatQuoteClose,
} from '@mdi/js'

import { Language } from 'prism-react-renderer'

import prettier from 'prettier'

type Parser = { prettier: string; prism: Language; name: string }
const languages: Parser[] = [
	{ prettier: 'postcss', prism: 'css' as Language, name: 'CSS' },
	{ prettier: 'graphql', prism: 'graphql' as Language, name: 'GraphQL' },
	{ prettier: 'html', prism: 'html' as Language, name: 'HTML' },
	{ prettier: 'babel', prism: 'js' as Language, name: 'Javascript' },
	{ prettier: 'babel', prism: 'json' as Language, name: 'JSON' },
	{ prettier: 'markdown', prism: 'md' as Language, name: 'Markdown' },
	{ prettier: 'typescript', prism: 'ts' as Language, name: 'TypeScript' },
	{ prettier: 'yaml', prism: 'yml' as Language, name: 'YAML' },
]

const Tool = () => {
	const [language, setLanguage] = useLocalStorage('pretty-language', 3)
	const [width, setWidth] = useLocalStorage('pretty-width', 80)
	const [indent, setIndent] = useLocalStorage('pretty-indent', 'tab')
	const [semis, setSemis] = useLocalStorage('pretty-semi', false)
	const [quotes, setQuotes] = useLocalStorage('pretty-quotes', 'single')
	const [jsxQuotes, setJsxQuotes] = useLocalStorage('pretty-jsxquotes', 'single')

	const [input, setInput] = useState('')
	const [output, setOutput] = useState('')

	const options = {
		printWidth: width,
		useTabs: indent === 'tab',
		tabWidth: indent !== 'tab' ? parseInt(indent) : undefined,
		semi: semis,
		singleQuote: quotes === 'single',
	}
	console.log(options)

	useEffect(() => {
		try {
			import(`prettier/parser-${languages[language].prettier}.js`).then((parser) => {
				setOutput(
					prettier.format(input, {
						parser: languages[language].prettier,
						plugins: [parser],
						...options,
					})
				)
			})
		} catch (e) {
			console.error(e)
		}
	}, [language, options, input])

	return (
		<Page title='Pretty print'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiTranslate,
						name: 'Language',
						description: '',
						control: (
							<Select
								value={language.toString()}
								options={languages.map((lang, i) => ({
									key: i.toString(),
									value: lang.name,
								}))}
								onChange={(e: Event) =>
									setLanguage(parseInt((e.target as HTMLSelectElement).value))
								}
							/>
						),
					},
					{
						icon: mdiArrowExpandHorizontal,
						name: 'Print width',
						description: 'Roughly how long you’d like lines to be (may be more or less)',
						control: (
							<Number
								value={width.toString()}
								min={1}
								onChange={(e: Event) => setWidth(parseInt((e.target as HTMLInputElement).value))}
							/>
						),
					},
					{
						icon: mdiFormatIndentIncrease,
						name: 'Indentation',
						description: '',
						control: (
							<Select
								value={indent}
								options={[
									{ key: '2', value: '2 spaces' },
									{ key: '4', value: '4 spaces' },
									{ key: 'tab', value: 'Tab' },
								]}
								onChange={(e: Event) => setIndent((e.target as HTMLSelectElement).value)}
							/>
						),
					},
					{
						icon: 'm11.189 14.65v1.8581c0 0.58824-0.06919 1.1557-0.20761 1.7024-0.13841 0.54671-0.3737 1.0623-0.70588 1.5467l1.1938 0.65398c0.29066-0.24913 0.54671-0.53287 0.76817-0.85121 0.22145-0.31834 0.4083-0.65398 0.56055-1.0069 0.15917-0.34602 0.27682-0.69896 0.35294-1.0588 0.08306-0.35294 0.12457-0.69204 0.12457-1.0173v-1.827zm2.5347-8.117a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z',
						name: 'Semicolons',
						description: 'Use semicolons everywhere or only where needed',
						control: (
							<Toggle
								checked={semis}
								onChange={(e: Event) => setSemis((e.target as HTMLInputElement).checked)}
							/>
						),
					},
					{
						icon: mdiFormatQuoteClose,
						name: 'Quotes',
						description: 'Style of quote used when no other quotes are contained inside',
						control: (
							<Select
								value={quotes}
								options={[
									{ key: 'single', value: 'Single' },
									{ key: 'double', value: 'Double' },
								]}
								onChange={(e: Event) => setQuotes((e.target as HTMLSelectElement).value)}
							/>
						),
					},
					['js', 'ts'].includes(languages[language].prism)
						? {
								icon: mdiFormatQuoteClose,
								name: 'JSX Quotes',
								description: 'Style of quote used for JSX/TSX attributes',
								control: (
									<Select
										value={jsxQuotes}
										options={[
											{ key: 'single', value: 'Single' },
											{ key: 'double', value: 'Double' },
										]}
										onChange={(e: Event) => setJsxQuotes((e.target as HTMLSelectElement).value)}
									/>
								),
						  }
						: null,
				]}
			/>

			{/*<div
				className={`
					grow
					flex
					flex-col
					md:flex-row
					lg:flex-col
					xl:flex-row

					items-stretch
					gap-6
				`}
			>*/}
			<Segment
				title='Input'
				controls={[
					{ type: 'file', callback: (data: string) => setInput(data) },
					{ type: 'clear', onClick: () => setInput('') },
				]}
				body={
					<Code
						value={input}
						language={languages[language].prism}
						editable={true}
						onChange={(e: Event) => setInput((e.target as HTMLTextAreaElement).value)}
						className='grow'
					/>
				}
				className='grow flex flex-col basis-1/2 !m-0'
			/>

			<Segment
				title='Output'
				controls={[{ type: 'copy', data: output }]}
				body={
					<Code
						value={output}
						language={languages[language].prism}
						editable={false}
						className='grow'
					/>
				}
				className='grow flex flex-col basis-1/2 !m-0'
			/>
			{/*</div> */}
		</Page>
	)
}

export default Tool
