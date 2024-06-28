export default function HeroSection() {
	return (
		<section id="home" className="min-h-100vh flex justify-start items-center">
			<div className="mx-5 md-mx-l5">
				<div className="inline-block br-round bg-indigo-30 indigo-lightest p-2 fs-s2 mb-5 pr-3">
					<div className="inline-block bg-indigo indigo-lightest br-round px-3 py-1 mr-3 fs-s3">
						Мне фиолетово
					</div>
					работаю со всеми нишами
				</div>
				<div>
					<h1 className="white main-text fs-xl1 lh-2 md-fs-md1 md-lh-1 fw-900 ">
						Гибкое <br />
						Обслуживание <br />
						Веб-сайтов
					</h1>

					<div className="br-8 mt-10 inline-flex">
						<input
							type="text"
							className="input-lg half inline-block bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 min-w-25vw br-r-0 md-hidden"
							placeholder="Не можешь найти веб-мастера?"
							disabled={true}
						/>
						<a
							href="#features"
							className="animated-border button-lg no-underline bg-indigo-lightest-20 indigo-lightest focus-white fw-300 fs-s3 mr-0 br-l-0"
						>
							Мои услуги
						</a>
					</div>
					<div className="white opacity-20 fs-s3 mt-3">
						Ну давай, листай дальше
					</div>
				</div>
			</div>
		</section>
	)
}
