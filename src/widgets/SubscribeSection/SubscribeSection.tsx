export default function SubscribeSection() {
	return (
		<section className="p-10 md-p-l5">
			<div className="br-8 bg-indigo-lightest-10 p-5 md-p-l5 flex flex-wrap md-justify-between md-items-center">
				<div className="w-100pc md-w-33pc">
					<h2 className="white fs-m4 fw-800 mb-2">Гарантия качества</h2>
					<p className="fw-400 indigo-lightest opacity-50">
						Сделай свой продукт востребованным на рынке
					</p>
				</div>
				<div className="w-100pc md-w-50pc">
					<div className="flex my-5">
						<input
							type="text"
							className="input-lg inline-block flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 br-r-0 md-hidden"
							placeholder="Связаться в телеграм"
							disabled={true}
						/>
						<button className="animated-border button-lg bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">
							Перейти
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
