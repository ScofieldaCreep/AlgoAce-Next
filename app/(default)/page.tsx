export const metadata = {
	title: 'Home - Open PRO',
	description: 'Page description'
}

import Cta from '@/components/cta'
import Features from '@/components/features'
import Hero from '@/components/hero-home'
import PageIllustration from '@/components/page-illustration'
import QASection from '@/components/qa-section'
import SupportedCodingPlatforms from '@/components/support-platform'
import Testimonials from '@/components/testimonials'
import Workflows from '@/components/workflows'

export default function Home() {
	return (
		<>
			<PageIllustration />
			<Hero />
			<SupportedCodingPlatforms />
			<Workflows />
			<Features />
			<Testimonials />
			<QASection />
			<Cta />
		</>
	)
}
