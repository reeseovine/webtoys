import { useState, useRef, useEffect } from 'react'

import Page from '@/components/page'
import Segment from '@/components/segment'
import {
	Select,
	Number,
	Button,
	FileDrop
} from '@/components/inputs'

import Icon from '@mdi/react'
import {
	mdiEyeOutline,
	mdiDownload,
} from '@mdi/js'


type CBType = 'protanopia' | 'deuteranopia' | 'tritanopia' | 'monochromacy' | null

// Credit for these goes to Loren Petrich (lpetrich)
// source: https://lpetrich.org/Science/ColorBlindnessSim/ColorBlindnessSim.html
const cbMatrices = {
	protanopia: [
		[0.202001295331,    0.991720719265, -0.193722014597 ],
		[0.163800203026,    0.792663865514,  0.0435359314602],
		[0.00913336570448, -0.0132684300993, 1.00413506439  ] ],
	deuteranopia: [
		[ 0.430749076295,  0.717402505462, -0.148151581757 ],
		[ 0.336582831043,  0.574447762213,  0.0889694067435],
		[-0.0236572929497, 0.0275635332006, 0.996093759749 ] ],
	tritanopia: [
		[ 0.971710712275,  0.112392320487, -0.0841030327623],
		[ 0.0219508442818, 0.817739672383,  0.160309483335 ],
		[-0.0628595877201, 0.880724870686,  0.182134717034 ] ],
	monochromacy: [
		[0.299, 0.587, 0.114],
		[0.299, 0.587, 0.114],
		[0.299, 0.587, 0.114] ],
}


const downloadURI = (uri: string, name: string) => {
	const link = document.createElement('a')
	link.download = name
	link.href = uri
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

const addTypeToFilename = (name: string, type: CBType) => {
	const start = name.slice(0, name.lastIndexOf('.'))
	const end   = name.slice(name.lastIndexOf('.'))
	return start+'_'+(type as string)+end
}


interface CBImageProps {
	contents?: string,
	type?: CBType,
	amount?: number,
	title?: string
}
const CBImage = ({ contents='', type=null, amount=0, title='' }: CBImageProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const draw = (ctx: CanvasRenderingContext2D | null | undefined, blob: string = '') => {
		if (ctx !== undefined && ctx !== null && blob.length > 0){
			const img = new Image()
			img.onload = () => {
				ctx.canvas.width = img.width
				ctx.canvas.height = img.height
				ctx.drawImage(img, 0, 0)

				if (type !== null && Object.keys(cbMatrices).includes(type)){
					const imageData = ctx.getImageData(0,0, img.width,img.height)
					const data = imageData.data
					const mat = cbMatrices[type]
					for (var i = 0; i < data.length; i += 4){
						data[i]   = mat[0][0]*data[i] + mat[0][1]*data[i+1] + mat[0][2]*data[i+2]
						data[i+1] = mat[1][0]*data[i] + mat[1][1]*data[i+1] + mat[1][2]*data[i+2]
						data[i+2] = mat[2][0]*data[i] + mat[2][1]*data[i+1] + mat[2][2]*data[i+2]
					}
					ctx.putImageData(imageData, 0, 0)
				}
			}
			img.src = blob
		}
	}

	useEffect(() => {
		draw(canvasRef.current?.getContext('2d'), contents)
	}, [draw, contents])

	return <canvas ref={canvasRef} title={title} className='max-w-full' />
}

const Tool = () => {
	const [type, setType] = useState('protanopia' as CBType)
	const [amount, setAmount] = useState(100)
	const defaultImage = {blob:'', name:''}
	const [image, setImage] = useState(defaultImage)

	return (
		<Page title='Color Blindness Simulator'>
			<Segment
				type='config'
				items={[
					{
						icon: mdiEyeOutline,
						name: 'Color Blindness Type',
						control: <Select
									value={type as string}
									options={[
										{key: 'protanopia', value: 'Protanopia'},
										{key: 'deuteranopia', value: 'Deuteranopia'},
										{key: 'tritanopia', value: 'Tritanopia'},
										{key: 'monochromacy', value: 'Monochromacy (rare)'},
									]}
									onChange={(e: Event) => setType((e.target as HTMLSelectElement).value as CBType)} />
					}
				]} />

			<Segment body={
				<FileDrop
					accept='image/*'
					readAs='objectURL'
					multiple={false}
					cb={(blob: string, file: File) => setImage({blob, name:file.name})}
				/>
			} />

			<div className={`
				grow
				flex
				flex-col
				md:flex-row
				lg:flex-col
				xl:flex-row

				items-stretch
				gap-4
				${image.blob.length === 0 ? 'hidden' : ''}
			`}>
				<Segment
					title='Original'
					controls={[
						{type: 'clear', onClick: () => setImage(defaultImage)}
					]}
					body={<CBImage contents={image.blob} title='Original, unaltered image' />}
					className='grow flex flex-col basis-1/2 !m-0'
				/>

				<Segment
					title='Simulated'
					controls={<Button
								hint='Save'
								icon={mdiDownload}
								onClick={() => downloadURI(image.blob, addTypeToFilename(image.name, type))}
							/>}
					body={<CBImage contents={image.blob} type={type} amount={amount} title={`Image altered to simulate ${amount}% ${type}`} />}
					className='grow flex flex-col basis-1/2 !m-0'
				/>
			</div>
		</Page>
	)
}

export default Tool
