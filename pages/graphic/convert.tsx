import { useState, useEffect } from 'react'
import { useLocalStorage } from '@/shared/storage'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Button,
	FileDrop
} from '@/components/inputs'
import {
	ToolTip,
	StatusGood,
	StatusBad,
	StatusLoading
} from '@/components/utility'

import Icon from '@mdi/react'
import {
	mdiFileMoveOutline,
	mdiClose,
	mdiDownload,
	mdiTrashCanOutline
} from '@mdi/js'

import { bytes } from '@/shared/math'

type Format = { mime: string; name: string; extension: string; }
const formats: Format[] = [
	{mime:'image/png', name:'PNG', extension:'png'},
	{mime:'image/jpeg', name:'JPEG', extension:'jpg'},
	{mime:'image/webp', name:'WEBP', extension:'webp'},
	{mime:'image/ico', name:'ICO', extension:'ico'},
	{mime:'image/bmp', name:'BMP', extension:'bmp'},
	{mime:'image/gif', name:'GIF', extension:'gif'},
	{mime:'image/tif', name:'TIFF', extension:'tif'}
]
const testFormats = (): Format[] => {
	const canvas = document.createElement("canvas")
	canvas.width = 1
	canvas.height = 1
	const ctx = canvas.getContext("2d")
	if (ctx){
		ctx.fillStyle = "red"
		ctx.fillRect(0, 0, 1, 1)
	}

	return formats.filter(format => {
		const data = canvas.toDataURL(format.mime);
		return data.startsWith(`data:${format.mime}`);
	})
}

const imgConvert = (contents: string, format: Format, cb: any) => {
	const canvas = document.createElement("canvas")
	const ctx = canvas.getContext("2d")

	const img = new Image()
	img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        if (ctx) ctx.drawImage(img, 0, 0)
		cb(canvas.toDataURL(format.mime))
    }
	img.src = contents
}

const downloadURI = (uri: string, name: string) => {
	const link = document.createElement('a')
	link.download = name
	link.href = uri
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

const changeExtension = (name: string, format: Format) => {
	name = name.slice(0, name.lastIndexOf('.'))
	return name + '.' + format.extension
}


interface JobProps {
	contents: string,
	file: File,
	format: Format,
	removeSelf?: any
}
const Job = ({ contents, file, format, removeSelf }: JobProps) => {
	const [done, setDone] = useState(false)
	const [failed, setFailed] = useState(false)
	const [output, setOutput] = useState('')

	useEffect(() => {
		try {
			imgConvert(contents, format, (data: string) => {
				setOutput(data)
				setDone(true)
			})
		} catch (e){
			console.error(e)
			setFailed(true)
		}
	}, [contents, format])

	return (
		<div className='
			flex
			items-center
			gap-4
			mb-2
			p-4

			rounded-md
			border

			bg-slate-50
			border-slate-300

			dark:bg-slate-800
			dark:border-slate-700
		'>
			{failed
				? <StatusBad size={1.5} />
				: done
					? <StatusGood size={1.5} />
					: <StatusLoading size={1.5} />
			}
			<div className='
				flex
				flex-col
				grow
			'>
				<div className=''>{file.name}</div>
				<div className='text-slate-600 dark:text-slate-300'>{bytes(file.size)}</div>
			</div>
			<div className='
				flex
				flex-col
				grow
				text-right
			'>
				<div className=''>{format.name}</div>
				{/*<div className='text-slate-600 dark:text-slate-300'>{outSize}</div>*/}
			</div>
			{failed ? null :
				done
					? <Button
						style='flat'
						hint='Save'
						icon={mdiDownload}
						onClick={() => downloadURI(output, changeExtension(file.name, format))} />
					: <Button
						style='flat'
						hint='Cancel'
						icon={mdiClose}
						onClick={removeSelf} />
			}
			{done || failed
				? <Button
					style='flat'
					hint='Delete'
					icon={mdiTrashCanOutline}
					onClick={removeSelf} />
				: null }
		</div>
	)
}

const Tool = () => {
	const [outFormat, setOutFormat] = useLocalStorage('imgconvert-outFormat', 0)
	const [validFormats, setValidFormats] = useState([] as Format[])
	const [jobs, setJobs] = useState([] as JobProps[])

	useEffect(() => {
		setValidFormats(testFormats())
	}, [])

	return (
		<Page title='Image Converter'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiFileMoveOutline,
						name: 'Convert to',
						description: 'Select a format to convert the image to',
						control: <Select
									value={outFormat.toString()}
									options={validFormats.map((format, i) => ({key: i.toString(), value: format.name}))}
									onChange={(e: Event) => setOutFormat(parseInt((e.target as HTMLSelectElement).value))} />
					}
				]} />

			<Segment body={
				<FileDrop
					accept='image/*'
					readAs='objectURL'
					multiple={true}
					// TODO: Fix outFormat using old value for new jobs
					cb={(contents: string, file: File) => setJobs(
							[
								{
									contents,
									file,
									format: formats[outFormat],
								},
								...jobs
							]
						)}
				/>
			} />

			<Segment
				controls={<>
					<Button icon={mdiDownload} label='Save all' onClick={() => null} />
					<Button icon={mdiTrashCanOutline} label='Delete all' onClick={() => setJobs([])} />
				</>}
				body={jobs.map((job, i) =>
					<Job
						key={i}
						removeSelf={() => setJobs(jobs.splice(i,1))}
						{...job} />
				)} />
		</Page>
	)
}

export default Tool
