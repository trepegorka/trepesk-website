import SliderSection from '@/widgets/SliderSection/SliderSection.tsx'

const VideoBG = () => {
	return (
		<div style={{ position: 'relative', width: '100%', height: '100%' }}>
			<video
				autoPlay
				muted
				loop
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					opacity: '0.2',
					objectFit: 'cover',
					top: 0,
					left: 0,
					zIndex: -1,
				}}
			>
				<source src="/videos/videoWeb.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div style={{ position: 'relative', zIndex: 1 }}>
				<SliderSection />
			</div>
		</div>
	)
}

export default VideoBG
