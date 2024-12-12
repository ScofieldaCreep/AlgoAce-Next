'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useRef, useState } from 'react'

const qaData = [
	{
		question: 'How do I use AlgoAce?',
		answer:
			'Visit Chrome Extension Store, find "AlgoAce". Press Alt+Q to get your unbeatable solution. Here you go!'
	},
	{
		question: 'Will members get access to all future features?',
		answer:
			'Members will have access to all future AI Q&A related features, including but not limited to: past question export, professional answers in other fields, and advanced new AI models. Coming early Jan'
	},
	{
		question: 'Language Support?',
		answer:
			'Yes, we support multiple languages including Chinese, and you can customize the settings (not limited to current language options). Of course, you can also use AlgoAce in other domains (such as Machine Learning, Data Science, System Design, etc. Feel free to explore).'
	},
	{
		question: 'How intrusive is this extension?',
		answer:
			"This extension has very low intrusiveness. It won't affect any of your operations on websites, nor will it be detected by any other websites. All logic is processed on remote servers, and all local operations are encrypted and translated."
	},
	{
		question: 'What is the cancellation policy?',
		answer:
			'You can cancel future subscriptions at any time according to our Refund Policy requirements.'
	},
	{
		question: 'Platform Support?',
		answer:
			'We support Chrome, Edge, and Firefox. We will support more platforms in the future. Official support is for Chrome. Please feel free to download from Chrome Extension Store and use it in other browsers.'
	},
	{
		question: 'Free Trial?',
		answer:
			' Yes, we offer a free trial for 30 minutes. To ensure the best experience and supreme quality, I have to control the total cost of api calls. I believe you will fall in love with this little monster in short time. No credit card is required to start.'
	},
	{
		question: 'Domains/Fields Supported?',
		answer:
			'We support literally all domains/fields. But fine-tuned for algorithm questions for SDE/MLE interviews. Other fileds are supported and as good as ChatGPT OpenAI O1.'
	},
	{
		question: 'What payment methods do you support?',
		answer:
			'We support full methods of Stripe. You can use your credit card, line accounts, and other methods included.'
	},
	{
		question: 'Is my payment information protected?',
		answer:
			"Yes, we use Stripe to process payments. Your payment information is protected by Stripe's security measures. The chrome extension itself does not access or store any payment information. It only knows whether you have a subscription or not."
	}
]

export default function QASection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)
	const answerRefs = useRef<(HTMLDivElement | null)[]>([])

	return (
		<section className='relative'>
			<div className='mx-auto max-w-6xl px-4 sm:px-6'>
				<div className='border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20'>
					{/* Section header */}
					<div className='mx-auto max-w-3xl pb-12 text-center'>
						<div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
							<span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
								FAQ
							</span>
						</div>
						<h2 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl'>
							Questions & Answers
						</h2>
						<p className='text-lg text-indigo-200/65'>
							If you have questions, here are the answers
						</p>
					</div>

					{/* QA list */}
					<div className='mx-auto max-w-2xl'>
						{qaData.map((item, index) => (
							<div
								key={index}
								className='qa-item border-b border-slate-800/60 last:border-0'
							>
								<button
									className='qa-question flex w-full items-center justify-between py-5 text-left transition duration-300 ease-out hover:text-gray-200'
									onClick={() =>
										setOpenIndex(openIndex === index ? null : index)
									}
								>
									<span className='text-gray-200'>{item.question}</span>
									<div className='transform transition-transform duration-300 ease-out'>
										{openIndex === index ? (
											<ChevronUp className='h-5 w-5 text-indigo-500' />
										) : (
											<ChevronDown className='h-5 w-5 text-indigo-500' />
										)}
									</div>
								</button>
								<div
									ref={el => {
										answerRefs.current[index] = el
									}}
									style={{
										height:
											openIndex === index
												? answerRefs.current[index]?.scrollHeight + 'px'
												: '0'
									}}
									className='overflow-hidden transition-all duration-300 ease-out'
								>
									<div className='transform transition-all duration-300 ease-out'>
										<p className='pb-5 text-indigo-200/65'>{item.answer}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
