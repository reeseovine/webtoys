import { useState, useRef } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	TextArea
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiThemeLightDark
} from '@mdi/js'

import { diffChars } from 'diff'


const Tool = () => {
	const [inputA, setInputA] = useState('')
	const [inputB, setInputB] = useState('')

	const output = diffChars(inputA, inputB)

	return (
		<Page title='Text Difference'>
			{/*<Segment
				type='config'
				items={[
					{
						icon: mdiThemeLightDark,
						name: 'Theme',
						description: '',
						control: <Select value={theme} options={[
									{key: 'auto', value: "Auto"},
									{key: 'light', value: "Light"},
									{key: 'dark', value: "Dark"}
								]} onChange={(e: Event) => setTheme((e.target as HTMLSelectElement).value)} />
					}
				]} />*/}

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
					title='Input A'
					controls={[
						{type: 'file', callback: (data: string) => setInputA(data)},
						{type: 'clear', onClick: () => setInputA('')}
					]}
					body={<TextArea
							value={inputA}
							onChange={(e: Event) => setInputA((e.target as HTMLTextAreaElement).value)}
							className='grow font-mono text-base' />}
					className='grow flex flex-col basis-1/2 !m-0'
				/>

				<Segment
					title='Input B'
					controls={[
						{type: 'file', callback: (data: string) => setInputB(data)},
						{type: 'clear', onClick: () => setInputB('')}
					]}
					body={<TextArea
							value={inputB}
							onChange={(e: Event) => setInputB((e.target as HTMLTextAreaElement).value)}
							className='grow font-mono text-base' />}
					className='grow flex flex-col basis-1/2 !m-0'
				/>
			</div>
			<Segment
				title='Difference'
				controls={[{type: 'copy', data: output}]}
				body={<pre
						className={`
							grow
							p-2.5

							rounded-md
							border

							bg-slate-50
							border-slate-300

							dark:bg-slate-900
							dark:border-slate-700

							text-base
							leading-normal
						`}>
						{output.map((part, i) => {
							const color = part.added
								? 'green'
								: part.removed
									? 'red'
									: 'normal'
							return (
								<span key={i} className={
									{
										green: 'bg-lime-600/30 dark:bg-lime-600/50',
										red: 'bg-red-500/30 dark:bg-red-500/50',
										normal: ''
									}[color]
								}>
									{part.value}
								</span>
							)
						})}
					</pre>}
				className='grow flex flex-col'
			/>
		</Page>
	)
}

export default Tool
