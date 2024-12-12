import Image from 'next/image'
import WorflowImg01 from '@/public/images/workflow-01.png'
import WorflowImg02 from '@/public/images/workflow-02.png'
import WorflowImg03 from '@/public/images/workflow-03.png'
import Spotlight from '@/components/spotlight'

export default function Workflows() {
	return (
		<section>
			<div className='mx-auto max-w-6xl px-4 sm:px-6'>
				<div className='pb-12 md:pb-20'>
					{/* Section header */}
					<div className='mx-auto max-w-3xl pb-12 text-center md:pb-20'>
						<div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
							<span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
								精准 · 隐形
							</span>
						</div>
						<h2 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl'>
							助你迈向 FAANG 名企之路
						</h2>
						<p className='text-lg text-indigo-200/65'>
							我们提供简单优雅的界面与强大的 AI
							算法助理。无需繁琐配置，即可在任意网页中获得高质量的算法题解答与代码示例，帮助你快速提升技能，直通世界顶尖科技公司。
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
												内置AI工具
											</span>
										</span>
									</div>
									<p className='text-indigo-200/65'>
										无需复杂环境搭建，直接在任意网页中调用智能算法助手，自动提取问题关键点、生成题解步骤和示例代码，让你的开发与学习过程高效又轻松。
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
												即刻升级
											</span>
										</span>
									</div>
									<p className='text-indigo-200/65'>
										免费试用期满后，可一键订阅升级，无需中断你的工作流程，立即拥有无限查询次数与更高精度的算法模型支持，助你在面试中先人一步。
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
												定制化体验
											</span>
										</span>
									</div>
									<p className='text-indigo-200/65'>
										根据你的个人偏好自由设置回答语言、代码风格和附加上下文信息，打造完全符合你需求的算法学习与面试准备体验。
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
