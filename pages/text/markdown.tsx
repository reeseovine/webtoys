import { useState, useRef } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Code
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiThemeLightDark
} from '@mdi/js'


import Prism from 'prismjs'
import 'prismjs/components/prism-markdown.min.js'
import { marked } from 'marked'
marked.setOptions({
	highlight: (code, lang) => {
		if (Prism.languages[lang]) {
			return Prism.highlight(code, Prism.languages[lang], lang);
		} else {
			return code;
		}
	},
})
import githubMarkdownCSS from '!!raw-loader!github-markdown-css/github-markdown.css'
import githubMarkdownCSSDark from '!!raw-loader!github-markdown-css/github-markdown-dark.css'
import githubMarkdownCSSLight from '!!raw-loader!github-markdown-css/github-markdown-light.css'


const Tool = () => {
	const [theme, setTheme] = useState('auto')
	const [input, setInput] = useState('')
	const iframeRef = useRef<HTMLIFrameElement>(null)

	const output = marked.parse(input)
	iframeRef.current?.contentWindow.document.documentElement.innerHTML = `
		<html>
			<head>
				<style>${{
					auto: githubMarkdownCSS,
					dark: githubMarkdownCSSDark,
					light: githubMarkdownCSSLight
				}[theme]}</style>
			</head>
			<body class="markdown-body" style="padding: 24px">${output}</body>
		</html>`

	return (
		<Page title='Markdown Preview'>
			<Segment
				type='config'
				body={[
					{
						icon: mdiThemeLightDark,
						name: 'Theme',
						description: '',
						control: <Select value={theme} options={[
									{key: 'light', value: "Light"},
									{key: 'dark', value: "Dark"},
									{key: 'auto', value: "Auto"}
								]} onChange={e => setTheme(e.target.value)} />
					}
				]} />

			<div className={`
				grow
				flex
				flex-col
				md:flex-row
				lg:flex-col
				xl:flex-row

				items-stretch
				gap-4
			`}>
				<Segment
					title='Markdown'
					controls={[
						{type: 'file', callback: data => setInput(data)},
						{type: 'clear', onClick: () => setInput('')}
					]}
					body={<Code value={input} language='markdown' editable={true} onChange={e => setInput(e.target.value)} className='grow' />}
					className='grow flex flex-col basis-1/2 !m-0'
				/>

				<Segment
					title='Preview'
					controls={[{type: 'copy', hint: 'Copy HTML', data: output}]}
					body={<iframe ref={iframeRef} className={`
							grow
							w-full

							rounded-md
							border

							border-slate-300
							dark:border-slate-700
						`} />}
					className='grow flex flex-col basis-1/2 !m-0'
				/>
			</div>
		</Page>
	)
}

export default Tool
