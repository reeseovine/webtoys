import { useState } from 'react';

import Page from '@/components/page'
import Section from '@/components/section'

import Icon from '@mdi/react'
import {
	mdiSwapHorizontal,
	mdiContentPaste,
	mdiContentCopy,
	mdiClose
} from '@mdi/js';

import he from 'he'


const Html = () => {
	const [mode, setMode] = useState('encode');
	const [output, setOutput] = useState('');

	return (
		<Page>
			<Section>
				<h1 className='mb-6 text-3xl font-semibold text-slate-800 dark:text-slate-200'>
					HTML Encoder / Decoder
				</h1>

				<div className='mb-6'>
					<h2 className='text-xl mb-2'>Configuration</h2>
					<div className="border light:border-slate-600 dark:bg-slate-800 dark:border-slate-700 rounded-md">
						<div className="py-4 px-6 flex items-center gap-8">
							<Icon
								path={mdiSwapHorizontal}
								size={1} />
							<div className="grow">
								<div className="font-semibold">Conversion</div>
								<div>Select which conversion mode you want to use</div>
							</div>
							<div>
								<select value={mode} onChange={e => setMode(e.target.value)} className="pl-4 pr-10 rounded-md dark:bg-slate-700 border dark:border-slate-600">
									<option value="encode">Encode</option>
									<option value="decode">Decode</option>
								</select>
							</div>
						</div>
					</div>
				</div>

				<div className='mb-6'>
					<div className="mb-2 flex items-end justify-between gap-2">
						<h2 className='text-xl grow'>Input</h2>
						<button className="p-2.5 rounded-md dark:bg-slate-700 border dark:border-slate-600">
							<Icon path={mdiContentPaste} size={.75} />
						</button>
						<button className="p-2.5 rounded-md dark:bg-slate-700 border dark:border-slate-600">
							<Icon path={mdiClose} size={.75} />
						</button>
					</div>
					<textarea onChange={e => setOutput(he[mode](e.target.value))} rows={5} className='w-full h-max rounded-md dark:bg-slate-800 border light:border-slate-600 dark:bg-slate-800 dark:border-slate-700'></textarea>
				</div>

				<div className=''>
					<div className="mb-2 flex items-end justify-between gap-2">
						<h2 className='text-xl grow'>Output</h2>
						<button className="p-2.5 rounded-md dark:bg-slate-700 border dark:border-slate-600">
							<Icon path={mdiContentCopy} size={.75} />
						</button>
					</div>
					<textarea value={output} disabled rows={5} className='w-full h-max rounded-md dark:bg-slate-900 border light:border-slate-600 dark:bg-slate-800 dark:border-slate-700'></textarea>
				</div>
			</Section>
		</Page>
	)
}

export default Html
