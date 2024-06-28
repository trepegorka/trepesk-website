export default function PricingSection() {
	return (
		<section id="pricing">
			<div className="p-10 flex flex-wrap">
				<div className="w-100pc md-w-50pc">
					<div className="p-5">
						<h4 className="white fw-800 fs-l3 mb-5">Цены на услуги</h4>
						<div className="indigo-lightest fw-400 fs-16 opacity-50 lh-2">
							Каждая услуга оценивается индивидуально в зависимости от многих
							факторов, например: постоянство клиента, сложность,
							предоставленная иформация. Цены самые адекватные на рынке.
						</div>
						{/*<h4 className="white fw-600 fs-m2 mt-10">*/}
						{/*	Компании с которыми я работал:*/}
						{/*</h4>*/}
						{/*<div className={'white fw-400 fs-m1 my-5 flex-row'}>*/}
						{/*	<span className={'mr-5'}>Andersen</span>*/}
						{/*	<span className={'mx-5'}>CPA Lenta</span>*/}
						{/*	<span className={'mx-5'}>Kraken</span>*/}
						{/*</div>*/}
					</div>
				</div>
				<div className="w-100pc md-w-25pc">
					<div className="m-3 p-5 br-8 bg-indigo-lightest-10 overflow-hidden">
						<div className="p-3">
							<h3 className="indigo">Free</h3>
							<div className="white flex items-center">
								от $<span className="fs-l5 lh-1">0</span>
							</div>
						</div>
						<div className="p-3 indigo-lightest fw-400 fs-s1 lh-5">
							<div>
								<i
									className="h-3 indigo"
									stroke-width="4"
									data-feather="check"
								></i>
								<span className="opacity-50">Консультация</span>
							</div>
							<div>
								<i
									className="h-3 indigo"
									stroke-width="4"
									data-feather="check"
								></i>
								<span className="opacity-50">Гарантия от 1 месяца</span>
							</div>
						</div>
						<div className="p-3">
							<a
								href="https://t.me/+VFB_kZ7yf084MmVi"
								target={'_blank'}
								className="button no-underline full bg-black white  hover-opacity-100 hover-scale-up-1 ease-300"
							>
								Связаться
							</a>
						</div>
					</div>
				</div>
				<div className="w-100pc md-w-25pc">
					<div className="m-3 p-5 br-8 bg-white overflow-hidden">
						<div className="p-3">
							<h3 className="indigo">Pro</h3>
							<div className="black flex items-center">
								от $<span className="fs-l5 lh-1">99</span>
							</div>
						</div>
						<div className="p-3 black fw-400 fs-s1 lh-5">
							<div>
								<i
									className="h-3 indigo"
									stroke-width="4"
									data-feather="check"
								></i>
								<span className="opacity-50">1 страница</span>
							</div>
							<div>
								<i
									className="h-3 indigo"
									stroke-width="4"
									data-feather="check"
								></i>
								<span className="opacity-50">Установка домена</span>
							</div>
							<div>
								<i
									className="h-3 indigo"
									stroke-width="4"
									data-feather="check"
								></i>
								<span className="opacity-50">Установка сервера</span>
							</div>
							<div>
								<i
									className="h-3 indigo"
									stroke-width="4"
									data-feather="check"
								></i>
								<span className="opacity-50">Установка метрик</span>
							</div>
							<div>
								<i
									className="h-3 indigo"
									stroke-width="4"
									data-feather="check"
								></i>
								<span className="opacity-50">Установка клоаки</span>
							</div>
						</div>
						<div className="p-3">
							<a
								href="https://t.me/+VFB_kZ7yf084MmVi"
								target={'_blank'}
								className="button no-underline full bg-indigo white hover-opacity-100 hover-scale-up-1 ease-300"
							>
								Связаться
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
