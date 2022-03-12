import { useState } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Button,
	Select,
	Textarea
} from '@/components/inputs'
import {
	H1, P
} from '@/components/typography'

import Icon from '@mdi/react'
import {
	mdiText,
	mdiNumeric,
	mdiContentCopy
} from '@mdi/js'

import Clipboard from 'react-clipboard.js';

import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4
	},
	wordsPerSentence: {
		max: 16,
		min: 4
	}
})


const Html = () => {
	const [unit, setUnit] = useState('paragraphs')
	const [count, setCount] = useState(1)
	let output = (() => {
		try {
			if (unit === 'words') return lorem.generateWords(count)
			if (unit === 'sentences') return lorem.generateSentences(count)
			if (unit === 'paragraphs') return lorem.generateParagraphs(count)
		} catch(e) {}
	})()

	return (
		<Page>
			<H1 className='mb-6'>Lorem Ipsum Generator</H1>

			<Segment
				type='config'
				body={[
					{
						icon: mdiText,
						name: 'Units',
						description: 'Generate words, sentences, or paragraphs',
						control: <Select options={{
									words: "Words",
									sentences: "Sentences",
									paragraphs: "Paragraphs"
								}} onChange={e => setUnit(e.target.value)} />
					}, {
						icon: mdiNumeric,
						name: 'Count',
						description: 'How many of the unit to generate?',
						control: <input
							type='number'
							min={1}
							onChange={e => setCount(parseInt(e.target.value))} />
					}
				]} />

			<Segment
				title='Output'
				controls={<>
					<Clipboard data-clipboard-text={output}>
						<Button icon={mdiContentCopy} hint="Copy" />
					</Clipboard>
				</>}
				body={
					<div
						className={`
							mt-8
						`}
					>
						{unit === 'words' ? output :
							output.split('\n').map((text, i) => (
								<P key={i} className='indent-8 mb-2'>
									{text}
								</P>
							))
						}
					</div>
				}
			/>
		</Page>
	)
}

export default Html
