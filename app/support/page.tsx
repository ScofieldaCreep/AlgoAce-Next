'use client'

import Footer from '@/components/ui/footer'
import Link from 'next/link'
export default function SupportPage() {
	return (
		<div className='min-h-screen bg-gray-950 text-gray-200'>
			<main className='mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-20'>
				<div className='text-center'>
					<h1 className='text-3xl font-semibold mb-4'>Support & Policies</h1>
					<p className='text-indigo-200/65 mb-8'>
						If you have questions, feedback, or need any assistance, we are here
						to help.
					</p>
				</div>

				<div className='space-y-10'>
					<section>
						<h2 className='text-xl font-medium mb-2'>Contact Us</h2>
						<p className='text-indigo-200/65 mb-4'>
							For general inquiries, support requests, or bug reports, please
							reach out to us at:
						</p>
						<a
							className='text-indigo-500 hover:text-indigo-400 underline'
							href='mailto:chizhang2048@gmail.com'
						>
							chizhang2048@gmail.com
						</a>
					</section>

					<section>
						<h2 className='text-xl font-medium mb-2'>User Policy</h2>
						<p className='text-indigo-200/65 mb-4'>
							Please review our user policy to understand how we handle data,
							privacy, and product usage.
						</p>
						<Link href='/privacy'>View User Policy</Link>
					</section>

					<section>
						<h2 className='text-xl font-medium mb-2'>Terms of Service</h2>
						<p className='text-indigo-200/65 mb-4'>
							By using our product, you agree to our terms of service. It covers
							account usage, subscription details, and refund policies.
						</p>
						<Link href='/privacy'>View Terms of Service</Link>
					</section>

					<section>
						<h2 className='text-xl font-medium mb-2'>Additional Resources</h2>
						<p className='text-indigo-200/65 mb-4'>
							Need guidance on setup or want to learn more about upcoming
							features? Check out our documentation and blog posts.
						</p>
						<div className='flex flex-wrap gap-4'>
							<Link href='/docs'> Documentation</Link>
							<Link href='/blog'> Blog</Link>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	)
}
