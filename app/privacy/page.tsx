// app/privacy/page.tsx
'use client'

import Footer from '@/components/ui/footer'

export default function PolicyPage() {
	return (
		<main className='mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-20'>
			<Privacy />
			<Footer />
		</main>
	)
}

const Privacy = () => (
	<>
		<h1 className='text-3xl font-bold mb-4'>
			Chrome Extensions Privacy Policy
		</h1>
		<p className='mb-4'>
			<strong>Effective Date:</strong> December 10, 2024
		</p>

		<h2 className='text-2xl font-semibold mt-6 mb-2'>Information Collection</h2>
		<p className='mb-4'>
			My Google Chrome Extensions do not collect any personal information from
			users. I do not gather, store, or transmit any data that can be used to
			personally identify you, such as your name, email address, or location.
			Since no data is collected, none of your data is sold to third parties.
		</p>

		<h2 className='text-2xl font-semibold mt-6 mb-2'>
			Links to Other Websites
		</h2>
		<p className='mb-4'>
			My Google Chrome Extensions may contain links to other websites not
			operated by me. This Privacy Policy does not cover how that website
			processes personal information. I encourage you to review the Privacy
			Policy of every website that you visit.
		</p>

		<h2 className='text-2xl font-semibold mt-6 mb-2'>
			Changes to this Privacy Policy
		</h2>
		<p className='mb-4'>
			I reserve the right to amend this Privacy Policy at any time. Any changes
			will be effective immediately upon posting the revised Privacy Policy, and
			the "Effective Date" above will be updated. You are advised to review this
			Privacy Policy periodically for any changes.
		</p>

		<h2 className='text-2xl font-semibold mt-6 mb-2'>
			By using my Google Chrome Extensions
		</h2>
		<p className='mb-4'>
			By using my Google Chrome Extensions, you signify your consent and
			agreement to the terms of this Privacy Policy. If you do not agree with
			this Privacy Policy, please refrain from using my Google Chrome
			Extensions.
		</p>

		<h2 className='text-2xl font-semibold mt-6 mb-2'>Feedback</h2>
		<p className='mb-4'>
			If you have questions or concerns about this Privacy Policy, you can
			contact me by email.
		</p>
	</>
)
