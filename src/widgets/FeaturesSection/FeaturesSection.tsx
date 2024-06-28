export default function FeaturesSection() {
	return (
		<section id="features" className="p-10 md-p-l5">
			<div className="flex flex-column md-flex-row mx-auto">
				<div className="w-100pc md-w-40pc">
					<div className="br-8 md-p-5 md-m-5 my-5 py-5">
						<div className="orac orac1 flex justify-center items-center white">
							<i data-feather="cpu" className="w-l5"></i>
						</div>
						<h4 className="white fw-600 fs-m3 mb-5">Разработка</h4>
						<div className="indigo-lightest fw-400 lh-2 opacity-50">
							Создание лендинг страниц, правки в коде, добавление новых функций,
							разработка веб сервисов, написание скриптов для автоматизации и
							веб парсинга.
						</div>
					</div>
				</div>
				<div className="w-100pc md-w-40pc">
					<div className="br-8 md-p-5 md-m-5 my-5 py-5">
						<div className="orac orac2 flex justify-center items-center white">
							<i data-feather="figma" className="w-l5"></i>
						</div>
						<h4 className="white fw-600 fs-m3 mb-5">Редизайн</h4>
						<div className="indigo-lightest fw-400 lh-2 opacity-50">
							Обновление внешнего вида вашего сайта, улучшение пользовательского
							опыта, внедрение современных тенденций в веб-дизайне.
						</div>
					</div>
				</div>
				<div className="w-100pc md-w-40pc">
					<div className="br-8 md-p-5 md-m-5 my-5 py-5">
						<div className="orac orac3 flex justify-center items-center white">
							<i data-feather="database" className="w-l5"></i>
						</div>
						<h4 className="white fw-600 fs-m3 mb-5">Обслуживание</h4>
						<div className="indigo-lightest fw-400 lh-2 opacity-50">
							Установка и менеджмент Keitaro, настройка метрик, оптимизация
							скорости, устранение багов и рефакторинг, поддержка стабильной
							работы.
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
