'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'

export default function DefaultLayout({
	children
}: {
	children: React.ReactNode
}) {
	// 创建页面动画效果
	// 不加第二个参数意味着每次组件重新渲染时都会执行
	useEffect(() => {
		AOS.init({
			once: true,
			disable: 'phone',
			duration: 600,
			easing: 'ease-out-sine'
		})
	})

	return (
		<>
			<main className='relative flex grow flex-col'>{children}</main>

			<Footer />
		</>
	)
}
