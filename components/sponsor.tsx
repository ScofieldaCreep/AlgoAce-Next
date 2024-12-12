'use client'
import { useState } from 'react'

type PaymentMethod = 'wechat' | 'alipay' | 'paypal' | 'coffee'

export default function Sponsor() {
	const [method, setMethod] = useState<PaymentMethod>('wechat')

	const paymentLinks = {
		paypal: 'https://paypal.me/ChiZhang558',
		coffee: 'https://www.buymeacoffee.com/chizhang'
	}

	return (
		<div className='mx-auto max-w-2xl px-4 sm:px-6 py-12 text-center'>
			<h3 className='text-2xl font-semibold text-gray-200 mb-6'>
				Support My Work
			</h3>

			<div className='flex flex-col items-center gap-6'>
				{/* 支付方式选择 */}
				<div className='flex flex-wrap justify-center gap-4'>
					<button
						className={`px-4 py-2 rounded-lg transition-colors ${
							method === 'wechat' ? 'bg-indigo-500' : 'bg-slate-700'
						}`}
						onClick={() => setMethod('wechat')}
					>
						WeChat Pay
					</button>
					<button
						className={`px-4 py-2 rounded-lg transition-colors ${
							method === 'alipay' ? 'bg-indigo-500' : 'bg-slate-700'
						}`}
						onClick={() => setMethod('alipay')}
					>
						Alipay
					</button>
					<a
						href={paymentLinks.paypal}
						target='_blank'
						rel='noopener noreferrer'
						className='px-4 py-2 bg-[#0070ba] rounded-lg hover:bg-[#003087] transition-colors'
					>
						PayPal
					</a>
					<a
						href={paymentLinks.coffee}
						target='_blank'
						rel='noopener noreferrer'
						className='px-4 py-2 bg-[#fd0] text-black rounded-lg hover:bg-[#fc0] transition-colors'
					>
						Buy me a coffee
					</a>
				</div>

				{/* 二维码展示区域 - 仅为中国支付方式显示 */}
				{(method === 'wechat' || method === 'alipay') && (
					<div className='w-48 h-48 bg-white p-2 rounded-lg'>
						<img
							src={`/qrcode/${method}-pay.png`}
							alt={`${method} QR Code`}
							className='w-full h-full object-contain'
						/>
					</div>
				)}

				<p className='text-indigo-200/65'>
					Thank you for supporting my work! ❤️
				</p>
			</div>
		</div>
	)
}
