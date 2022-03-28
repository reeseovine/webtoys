import { useState } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import { Select, Number } from '@/components/inputs'
import { P } from '@/components/typography'

import Icon from '@mdi/react'
import { mdiText, mdiNumeric } from '@mdi/js'

import { LoremIpsum } from 'lorem-ipsum'
const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4,
	},
	wordsPerSentence: {
		max: 16,
		min: 4,
	},
})

const Tool = () => {
	const [unit, setUnit] = useLocalStorage('lipsum-unit', 'paragraphs')
	const [count, setCount] = useLocalStorage('lipsum-count', 1)
	let output = (() => {
		try {
			if (unit === 'words') return lorem.generateWords(count)
			if (unit === 'sentences') return lorem.generateSentences(count)
			if (unit === 'paragraphs') return lorem.generateParagraphs(count)
		} catch (e) {}
		return ''
	})()

	return (
		<Page title='Lorem Ipsum Generator'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiText,
						name: 'Units',
						description: 'Generate words, sentences, or paragraphs',
						control: (
							<Select
								value={unit}
								options={[
									{ key: 'words', value: 'Words' },
									{ key: 'sentences', value: 'Sentences' },
									{ key: 'paragraphs', value: 'Paragraphs' },
								]}
								onChange={(e: Event) => setUnit((e.target as HTMLSelectElement).value)}
							/>
						),
					},
					{
						icon: mdiNumeric,
						name: 'Count',
						description: 'How many of the unit to generate',
						control: (
							<Number
								value={count.toString()}
								min={1}
								onChange={(e: Event) => setCount(parseInt((e.target as HTMLInputElement).value))}
							/>
						),
					},
				]}
			/>

			<Segment
				title='Output'
				controls={[{ type: 'copy', data: output }]}
				body={
					<div className='mt-8'>
						{output.split('\n').map((text, i) => (
							<P key={i} className='indent-8 mb-2'>
								{text}
							</P>
						))}
					</div>
				}
			/>
		</Page>
	)
}

export default Tool
