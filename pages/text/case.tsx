import { useState, useRef } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Button,
	TextArea
} from '@/components/inputs'
import { H2 } from '@/components/typography'


const titleCaseExclusions = ['a','about','above','across','after','against','ago','along','alongside','amid','among','amongst','an','and','anti','around','as','aside','at','atop','away','before','behind','below','beneath','beside','besides','between','beyond','but','by','circa','despite','down','during','except','for','from','hence','in','including','into','like','nor','notwithstanding','of','onto','or','over','per','regarding','respecting','since','than','the','through','to','toward','towards','under','underneath','unless','unlike','until','unto','upon','versus','via','what','when','where','who','whom','with','within','without']
const firstLetterUpper = (text: string): string => text.substr(0,1).toUpperCase() + text.substr(1).toLowerCase()

const lowerCase = (text: string): string => text.toLowerCase()
const upperCase = (text: string): string => text.toUpperCase()
const sentenceCase = (text: string): string => text.split('. ').map(sentence => sentence.split(' ').map(
	(word, i) =>
		i === 0 || word.toLowerCase() === 'i'
			? firstLetterUpper(word)
			: word.toLowerCase()
).join(' ')).join('. ')
const titleCase = (text: string): string => text.match(/(?<=[.?!]|[.?!]\s|^)[^.?!]+?([.?!]\s?|$)/g)?.map(sentence => sentence.trim().split(' ').map(
	(word, i) =>
		i === 0 || !titleCaseExclusions.includes(word.toLowerCase())
			? firstLetterUpper(word)
			: word.toLowerCase()
).join(' ')).join('. ') || ''
const camelCase = (text: string): string => text.split(' ').map((word, i) => i === 0 ? word.toLowerCase() : firstLetterUpper(word)).join('')
const pascalCase = (text: string): string => text.split(' ').map(firstLetterUpper).join('')
const snakeCase = (text: string): string => text.toLowerCase().replaceAll(' ', '_')
const constantCase = (text: string): string => text.toUpperCase().replaceAll(' ', '_')
const kebabCase = (text: string): string => text.toLowerCase().replaceAll(' ', '-')
const cobolCase = (text: string): string => text.toUpperCase().replaceAll(' ', '-')
const trainCase = (text: string): string => text.split(' ').map(firstLetterUpper).join('-')
const alternatingCase = (text: string): string => text.split('').map((c,i) => i%2 == 0 ? c.toLowerCase() : c.toUpperCase()).join('')
const inverseCase = (text: string): string => text.split('').map((c) => c.charCodeAt(0) < 97 ? c.toLowerCase() : c.toUpperCase()).join('')

const prettyDec = (number: number | undefined): string | null => {
	if (number){
		if (number.toString().length > 3){
			let out: string[] = []
			for (var i = number.toString().length; i > 0; i -= 3){
				out.unshift(number.toString().slice(i-3 >= 0 ? i-3 : 0, i))
			}
			return out.join(',')
		} else return number.toString()
	} else return null
}


interface distribution {
	[index: string]: number
}

const Tool = () => {
	const [input, setInput] = useState('')

	const wordDistrib: distribution = {}
	input.match(/\b\w+\b/g)?.forEach((word: string) => {
		if (wordDistrib.hasOwnProperty(word.toLowerCase())){
			wordDistrib[word.toLowerCase()] += 1
		} else {
			wordDistrib[word.toLowerCase()] = 1
		}
	})
	const wordDistribStr =
		Object.keys(wordDistrib).map(
			(word: string) => ({word, count: wordDistrib[word]})
		).sort((a,b) => {
			if (a.count < b.count){
				return 1
			} else if (a.count === b.count){
				return a.word.localeCompare(b.word)
			} else {
				return -1
			}
		})
		.map(line => line.word +': '+ line.count.toString())
		.join('\n')

	const charDistrib: distribution = {}
	input.split('').forEach((char: string) => {
		if (charDistrib.hasOwnProperty(char.toLowerCase())){
			charDistrib[char.toLowerCase()] += 1
		} else {
			charDistrib[char.toLowerCase()] = 1
		}
	})
	const charDistribStr =
		Object.keys(charDistrib).map(
			(char: string) => ({char, count: charDistrib[char]})
		).sort((a,b) => {
			if (a.count < b.count){
				return 1
			} else if (a.count === b.count){
				return a.char.localeCompare(b.char)
			} else {
				return -1
			}
		})
		.map(line => line.char +': '+ line.count.toString())
		.join('\n')

	return (
		<Page title='Text Inspector and Case Converter'>
			<Segment
				title='Convert case'
				body={<div className='flex flex-wrap gap-2'>
					<Button label='lowercase' onClick={() => setInput(lowerCase(input))} />
					<Button label='UPPERCASE' onClick={() => setInput(upperCase(input))} />
					<Button label='Sentence case' onClick={() => setInput(sentenceCase(input))} />
					<Button label='Title Case' onClick={() => setInput(titleCase(input))} />
					<Button label='camelCase' onClick={() => setInput(camelCase(input))} />
					<Button label='PascalCase' onClick={() => setInput(pascalCase(input))} />
					<Button label='snake_case' onClick={() => setInput(snakeCase(input))} />
					<Button label='CONSTANT_CASE' onClick={() => setInput(constantCase(input))} />
					<Button label='kebab-case' onClick={() => setInput(kebabCase(input))} />
					<Button label='COBOL-CASE' onClick={() => setInput(cobolCase(input))} />
					<Button label='Train-Case' onClick={() => setInput(trainCase(input))} />
					<Button label='aLtErNaTiNg cAsE' onClick={() => setInput(alternatingCase(input))} />
					<Button label='iNVERSE cASE' onClick={() => setInput(inverseCase(input))} />
				</div>}
			/>

			<div className={`
				grow
				flex
				flex-col
				md:flex-row

				items-stretch
				gap-4
			`}>
				<Segment
					title='Input'
					controls={[
						{type: 'copy', data: input},
						{type: 'file', callback: (data: string) => setInput(data)},
						{type: 'clear', onClick: () => setInput('')}
					]}
					body={<TextArea
							value={input}
							onChange={(e: Event) => setInput((e.target as HTMLTextAreaElement).value)}
							className='md:grow h-96 md:h-auto' />}
					className='
						grow
						md:basis-2/3

						flex
						flex-col
						!md:m-0
					'
				/>

				<div className='grow md:basis-1/3'>
					<H2>Statistics</H2>
					<div className="grid grid-cols-2">
						<div>Characters:</div> <div>{prettyDec(input.length)}</div>
						<div>Words:</div>      <div>{prettyDec(input.trim().split(/\s+/).filter(word => word.length > 0).length)}</div>
						<div>Sentences:</div>  <div>{prettyDec(input.match(/\w[.?!](\s|$)/g)?.length)}</div>
						<div>Lines:</div>      <div>{prettyDec(input.split(/\n/).length)}</div>
						<div>Paragraphs:</div> <div>{prettyDec(input.split(/\n/).filter(l => l.trim().length > 0).length)}</div>
					</div>

					<H2 className='mt-3'>Word distribution</H2>
					<TextArea
						value={wordDistribStr}
						disabled={true}
						rows={10} />

					<H2 className='mt-3'>Character distribution</H2>
					<TextArea
						value={charDistribStr}
						disabled={true}
						rows={10} />
				</div>
			</div>
		</Page>
	)
}

export default Tool
