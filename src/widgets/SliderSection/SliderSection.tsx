export default function SliderSection() {
	return (
		<section className="relative ">
			<div id="slider-1">
				<div className="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
					<h2 className="white fs-l1 md-fs-l3 fw-900">
						Менеджер выдал некачественный сайт для залива?
					</h2>
					<p className="white fw-400 opacity-60 my-5">
						Сделаю любые правки по вашему желанию, а так же дам рекомендации по
						улучшению
					</p>
					<a
						href="https://t.me/+VFB_kZ7yf084MmVi"
						target={'_blank'}
						className="button-md bg-indigo white fs-s1 br-4 black fw-600 no-underline m-5"
					>
						Подробнее
					</a>
				</div>
				<div className="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
					<h2 className="white fs-l1 md-fs-l3 fw-900">
						Хотите собственный уникальный лендинг?
					</h2>
					<p className="white fw-400 opacity-60 my-5">
						Соберем индивидуальный ленд по вашим требованиям и лучшим практикам
						в кратчайшие сроки
					</p>
					<a
						href="https://t.me/+VFB_kZ7yf084MmVi"
						target={'_blank'}
						className="button-md bg-indigo white fs-s1 br-4 black fw-600 no-underline m-5"
					>
						Подробнее
					</a>
				</div>
				<div className="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
					<h2 className="white fs-l1 md-fs-l3 fw-900">
						Требуется установка Кейтаро или другая помощь?
					</h2>
					<p className="white fw-400 opacity-60 my-5">
						Установим клоаку, домен, метрики, сервер, займемся полным
						обслуживанием
					</p>
					<a
						href="https://t.me/+VFB_kZ7yf084MmVi"
						target={'_blank'}
						className="button-md bg-indigo white fs-s1 br-4 black fw-600 no-underline m-5"
					>
						Подробнее
					</a>
				</div>
			</div>
			<ul className="absolute list-none w-100pc flex justify-between top-50pc">
				<li>
					<button className="prev ml-10 br-round border-indigo-lightest indigo-lightest  bg-transparent flex justify-center items-center p-2 focus-indigo-lighter outline-none mt-20-sm">
						<i data-feather="chevron-left"></i>
					</button>
				</li>
				<li>
					<button className="next mr-10 br-round border-indigo-lightest indigo-lightest  bg-transparent flex justify-center items-center p-2  focus-indigo-lighter outline-none mt-20-sm">
						<i data-feather="chevron-right"></i>
					</button>
				</li>
			</ul>
		</section>
	)
}
