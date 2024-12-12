'use client'

import CoderpadLogo from '@/public/images/coderpad.png'
import HackerRankLogo from '@/public/images/hackerrank.png'
import LeetcodeLogo from '@/public/images/leetcode.png'
import Image from 'next/image'

export default function SupportedCodingPlatforms() {
	return (
		<section className='relative'>
			<div className='mx-auto max-w-6xl px-4 sm:px-6'>
				<div className='py-12 md:py-20'>
					{/* Section header */}
					<div className='mx-auto max-w-3xl pb-12 text-center'>
						<div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
							<span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
								AlgoAce works everywhere
							</span>
						</div>
						<h2 className='animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl'>
							Leetcode Hard? AlgoAce Kills .
						</h2>
						<p className='text-lg text-indigo-200/65'>
							Enhance your coding experience with direct but undetectable
							integration into websites like Leetcode, HackerRank, etc.
						</p>
					</div>

					{/* Logos */}
					<div className='mx-auto flex flex-wrap md:flex-nowrap items-center justify-center gap-8'>
						<div className='h-32 w-64 flex items-center justify-center transition-all duration-300'>
							<Image
								src={CoderpadLogo}
								alt='CoderPad logo'
								width={256}
								height={128}
							/>
						</div>
						<div className='h-32 w-64 flex items-center justify-center transition-all duration-300'>
							<Image
								src={HackerRankLogo}
								alt='HackerRank logo'
								width={256}
								height={128}
							/>
						</div>
						<div className='h-32 w-64 flex items-center justify-center transition-all duration-300'>
							<Image
								src={LeetcodeLogo}
								alt='LeetCode logo'
								width={256}
								height={128}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
