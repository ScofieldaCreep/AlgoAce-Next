import Spotlight from '@/components/spotlight'
import WorflowImg01 from '@/public/images/workflow-01.png'
import WorflowImg02 from '@/public/images/workflow-02.png'
import WorflowImg03 from '@/public/images/workflow-03.png'
import Image from 'next/image'

export default function Workflows() {
	return (
		<section>
			<div className='mx-auto max-w-6xl px-4 sm:px-6'>
				<div className='pb-12 md:pb-20'>
					{/* Section header */}
					<div className='mx-auto max-w-3xl pb-12 text-center md:pb-20'>
						<div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
							<span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
								Precision · Stealth
							</span>
						</div>
						<h2 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl'>
							Your Fast Track to FAANG Success
						</h2>
						<p className='text-lg text-indigo-200/65'>
							Experience a sleek interface and a powerful AI-driven assistant.
							No complex setup—instantly get top-tier solutions and code
							snippets on any webpage, accelerating your skills straight into
							top tech giants.
						</p>
					</div>

					{/* Spotlight items */}
					<Spotlight className='group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3'>
						{/* Card 1 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50'>
								{/* Arrow */}
								<div
									className='absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100'
									aria-hidden='true'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width={9}
										height={8}
										fill='none'
									>
										<path
											fill='#F4F4F5'
											d='m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z'
										/>
									</svg>
								</div>
								{/* Image */}
								<Image
									className='inline-flex'
									src={WorflowImg01}
									width={350}
									height={288}
									alt='Workflow 01'
								/>
								{/* Content */}
								<div className='p-6'>
									<div className='mb-3'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Built-in AI
											</span>
										</span>
									</div>
									<p className='text-indigo-200/65'>
										Instantly tap into powerful algorithmic insights on any
										webpage. Auto-extract key details, generate step-by-step
										solutions, and get sample code—effortless efficiency at your
										fingertips.
									</p>
								</div>
							</div>
						</a>

						{/* Card 2 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50'>
								{/* Arrow */}
								<div
									className='absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100'
									aria-hidden='true'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width={9}
										height={8}
										fill='none'
									>
										<path
											fill='#F4F4F5'
											d='m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z'
										/>
									</svg>
								</div>
								{/* Image */}
								<Image
									className='inline-flex'
									src={WorflowImg02}
									width={350}
									height={288}
									alt='Workflow 02'
								/>
								{/* Content */}
								<div className='p-6'>
									<div className='mb-3'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Instant Upgrade
											</span>
										</span>
									</div>
									<p className='text-indigo-200/65'>
										Enjoy a 30-minute trial and solve problems in seconds. After
										the trial, upgrade with one click to unlock unlimited
										queries, advanced models, and the full LeetCode library.
										Dominate your interviews with precision and speed.
									</p>
								</div>
							</div>
						</a>

						{/* Card 3 */}
						<a
							className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100'
							href='#0'
						>
							<div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50'>
								{/* Arrow */}
								<div
									className='absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100'
									aria-hidden='true'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width={9}
										height={8}
										fill='none'
									>
										<path
											fill='#F4F4F5'
											d='m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z'
										/>
									</svg>
								</div>
								{/* Image */}
								<Image
									className='inline-flex'
									src={WorflowImg03}
									width={350}
									height={288}
									alt='Workflow 03'
								/>
								{/* Content */}
								<div className='p-6'>
									<div className='mb-3'>
										<span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60'>
											<span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
												Tailored Experience
											</span>
										</span>
									</div>
									<p className='text-indigo-200/65'>
										Customize responses to match your language, coding style,
										and context preferences. It's a personalized roadmap to
										mastering algorithms and acing interviews on your own terms.
									</p>
								</div>
							</div>
						</a>
					</Spotlight>
				</div>
			</div>
		</section>
	)
}
