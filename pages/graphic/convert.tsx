import { useState, useEffect } from 'react'

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

const formats = [
	{mime:'image/png', name:'PNG', extension:'png'},
	{mime:'image/jpeg', name:'JPEG', extension:'jpg'},
	{mime:'image/webp', name:'WEBP', extension:'webp'},
	{mime:'image/ico', name:'ICO', extension:'ico'},
	{mime:'image/bmp', name:'BMP', extension:'bmp'},
	{mime:'image/gif', name:'GIF', extension:'gif'},
	{mime:'image/tif', name:'TIFF', extension:'tif'}
]
const testFormats = () => {
	const canvas = document.createElement("canvas");
	canvas.width = 1;
	canvas.height = 1;
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "red";
	ctx.fillRect(0, 0, 1, 1);

	return formats.filter(format => {
		const data = canvas.toDataURL(format.mime);
		return data.startsWith(`data:${format.mime}`);
	})
}

const imgConvert = (contents, toFormat, cb) => {
	const canvas = document.createElement("canvas")
	const ctx = canvas.getContext("2d")

	const img = new Image()
	img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
		cb(canvas.toDataURL(toFormat))
    }
	img.src = contents
}

const downloadURI = (uri, name) => {
	const link = document.createElement('a')
	link.download = name
	link.href = uri
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

const changeExtension = (name, toFormat) => {
	name = name.slice(0, name.lastIndexOf('.'))
	const newExt = formats.find(fmt => fmt.mime == toFormat).extension
	return name + '.' + newExt
}


const Job = ({ contents, file, outFormat, removeSelf }) => {
	const [done, setDone] = useState(false)
	const [failed, setFailed] = useState(false)
	const [output, setOutput] = useState('')
	console.log(output)

	useEffect(() => {
		try {
			imgConvert(contents, outFormat, (data) => {
				setOutput(data)
				setDone(true)
			})
		} catch (e){
			console.error(e)
			setFailed(true)
		}
	}, [])

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
				<div className=''>{outFormat}</div>
				{/*<div className='text-slate-600 dark:text-slate-300'>{outSize}</div>*/}
			</div>
			{failed ? null :
				done
					? <Button
						style='flat'
						hint='Save'
						icon={mdiDownload}
						onClick={() => downloadURI(output, changeExtension(file.name, outFormat))} />
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
	const [outFormat, setOutFormat] = useState('image/png')
	const [validFormats, setValidFormats] = useState([])
	const [jobs, setJobs] = useState([])

	useEffect(() => {
		setValidFormats(testFormats())
	}, [])

	return (
		<Page title='Image Converter'>
			<Segment
				type='config'
				body={[
					{
						icon: mdiFileMoveOutline,
						name: 'Convert to',
						description: 'Select an output image format',
						control: <Select
									value={outFormat}
									options={validFormats.map(format => ({key: format.mime, value: format.name}))}
									onChange={e => setOutFormat(e.target.value)} />
					}
				]} />

			<Segment body={
				<FileDrop
					accept='image/*'
					readAs='objectURL'
					multiple='true'
					cb={(contents, file) => setJobs([{contents, file, outFormat}].concat(jobs))}
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
