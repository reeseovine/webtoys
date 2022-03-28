import { useState, useEffect } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import { TextField, TextArea } from '@/components/inputs'
import { H2 } from '@/components/typography'

const Tool = () => {
	const [regex, setRegex] = useState('')
	const [corpus, setCorpus] = useState('')

	const matchBody: React.ReactNode[] = []

	// TODO: Add support for different flags and modes
	// TODO: Rewrite this so that there is a single <span> per match, not per character
	if (corpus.length > 0) {
		try {
			const matches: RegExpMatchArray[] = Array.from(corpus.matchAll(new RegExp(regex, 'g')))
			var matchIdx = 0
			for (var i = 0, c; (c = corpus[i]); i++) {
				matchBody.push(
					<span
						key={i}
						className={
							matchIdx < matches.length &&
							i >= matches[matchIdx].index! &&
							i < matches[matchIdx].index! + matches[matchIdx][0].length
								? 'bg-sky-400/30 dark:bg-sky-500/60'
								: ''
						}
					>
						{c}
					</span>
				)
				if (
					matchIdx < matches.length &&
					i >= matches[matchIdx].index! + matches[matchIdx][0].length
				)
					matchIdx++
			}
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<Page title='Regular Expression Tester'>
			<div className='grow md:basis-3/3 flex flex-col max-w-full'>
				<Segment
					title='Regular expression'
					controls={[{ type: 'copy', data: regex }]}
					body={
						<TextField
							value={regex}
							onChange={(e: Event) => setRegex((e.target as HTMLInputElement).value)}
							className='font-mono text-base'
						/>
					}
				/>

				<Segment
					title='Text to match against'
					controls={[
						{ type: 'file', callback: (data: string) => setCorpus(data) },
						{ type: 'clear', onClick: () => setCorpus('') },
					]}
					body={
						<div
							className='
								md:grow

								h-96
								md:h-auto
								max-w-full

								grid
							'
						>
							<pre
								className={`
									relative z-10
									col-start-1
									row-start-1

									p-2.5
									rounded-md
									border

									border-transparent
									bg-white
									dark:bg-slate-800

									text-transparent
									font-mono
									text-base
									leading-relaxed
									whitespace-pre-wrap
								`}
							>
								{matchBody}
							</pre>
							<TextArea
								value={corpus}
								onChange={(e: Event) => setCorpus((e.target as HTMLTextAreaElement).value)}
								className='
									relative z-10
									col-start-1
									row-start-1

									!bg-transparent

									font-mono
									!text-base
									!leading-relaxed
								'
							/>
						</div>
					}
					className='
						grow
						md:basis-2/3

						flex
						flex-col
						!md:m-0
					'
				/>
			</div>
		</Page>
	)
}

export default Tool
