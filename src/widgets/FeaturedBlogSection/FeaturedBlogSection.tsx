export default function FeaturedBlogSection() {
	return (
		<section className="p-10 md-p-l10">
			<div className="md-w-75pc">
				<h2 className="white fs-l1 md-fs-l3 fw-900 lh-1">
					4 года в сфере клиентской разработки
				</h2>
				<p className="indigo-lightest fw-400 fs-m1 lh-2 opacity-50 my-5">
					Лендинги, которые продают, метрики, которые конвертируют, клоакинг,
					который не палится, парсинг, который не банится
				</p>
			</div>
			<div className="bg-comper relative w-100pc h-75vh bg-cover bg-b">
				<a
					href="https://t.me/+VFB_kZ7yf084MmVi"
					target={'_blank'}
					className="bg-white black px-5 py-3 absolute right-0 bottom-0 hover-bg-black hover-white ease-500 flex justify-center items-center after-arrow-right no-underline fs-m1"
				></a>
			</div>
		</section>
	)
}
