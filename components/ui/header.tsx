'use client'

import Logo from './logo'

export default function Header() {
	return (
		<header className='z-30 mt-2 w-full md:mt-5'>
			<div className='mx-auto max-w-6xl px-4 sm:px-6'>
				<div className='relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm'>
					{/* Site branding */}
					<div className='flex flex-1 items-center'>
						<Logo />
					</div>

					{/* Right side slogan or CTA */}
					<div className='flex items-center space-x-4'>
						<p className='text-sm text-gray-200/80 font-nacelle whitespace-nowrap'>
							Your AI-Powered Coding Companion
						</p>
						{/* 可选：右侧小CTA按钮 */}
						{/* <a
							href='#0'
							className='btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] px-3 py-1 text-sm font-medium transition-all'
						>
							Try for Free
						</a> */}
					</div>
				</div>
			</div>
		</header>
	)
}
