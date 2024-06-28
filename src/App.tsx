import React from 'react'
import TopNav from '@/widgets/TopNav/TopNav.tsx'
import HeroSection from '@/widgets/HeroSection/HeroSection.tsx'
import FeaturesSection from '@/widgets/FeaturesSection/FeaturesSection.tsx'
import PricingSection from '@/widgets/PricingSection/PricingSection.tsx'
import BigTextSection from '@/widgets/BigTextSection/BigTextSection.tsx'
import ProducOptionsSection from '@/widgets/ProducOptionsSection/ProducOptionsSection.tsx'
import TestimonialsSection from '@/widgets/TestimonialsSection/TestimonialsSection.tsx'
import FeaturedBlogSection from '@/widgets/FeaturedBlogSection/FeaturedBlogSection.tsx'
import BlogSection from '@/widgets/BlogSection/BlogSection.tsx'
import SubscribeSection from '@/widgets/SubscribeSection/SubscribeSection.tsx'
import FooterSection from '@/widgets/FooterSection/FooterSection.tsx'
import VideoBG from '@/shared/components/VIdeoBG/VideoBG.tsx'

const App: React.FC = () => {
	return (
		<>
			<TopNav />
			<HeroSection />
			<FeaturesSection />
			<VideoBG />
			<BigTextSection />
			<ProducOptionsSection />
			<PricingSection />
			<TestimonialsSection />
			<FeaturedBlogSection />
			<BlogSection />
			<SubscribeSection />
			<FooterSection />
		</>
	)
}

export default App
