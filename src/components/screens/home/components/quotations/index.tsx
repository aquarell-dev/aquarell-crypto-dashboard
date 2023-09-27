import clsx from 'clsx'
import { FC } from 'react'
import { Quotation } from '../../../../../types/fork.types'

export type QuotationsProps = {
	quotations: Quotation[]
	exchange: string
	side: 'buy' | 'sell'
}

const Quotations: FC<QuotationsProps> = ({ quotations, exchange, side }) => {
	if (!quotations) return null

	return (
		<div className='grid bg-zinc-800 py-1 px-2 rounded-md'>
			<div className='text-center my-1 font-medium text-xl text-white'>
				{exchange} {side}
			</div>
			<div className='flex text-white space-x-2 border-b border-gray-300 mb-2'>
				<div className='w-36 text-center'>
					<p>Price</p>
				</div>
				<div className='w-36 text-center'>
					<p>Size</p>
				</div>
				<div className='w-36 text-center'>
					<p>Volume in US$</p>
				</div>
			</div>
			{quotations.map((quotation, index) => (
				<div key={index} className='flex space-x-2 text-white'>
					<div
						className={clsx(
							'w-36 text-center',
							side === 'buy' ? 'text-[#EF454A]' : 'text-[#20B26C]'
						)}
					>
						<p>{quotation.price}</p>
					</div>
					<div className='w-36 text-center'>
						<p>{quotation.size}</p>
					</div>
					<div className='w-36 text-center'>
						<p>
							{new Intl.NumberFormat('en-US', {
								style: 'currency',
								currency: 'USD',
								currencyDisplay: 'narrowSymbol',
							}).format(quotation.size * Number(quotation.price))}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Quotations
