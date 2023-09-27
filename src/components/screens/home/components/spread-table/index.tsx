import React, { FC } from 'react'
import { Spread } from '../../../../../types/fork.types'

const SpreadTable: FC<{ spreads: Spread[] }> = ({ spreads }) => {
	return (
		<div className='grid grid-cols-2 rounded-md'>
			<div className='bg-zinc-800 px-2 py-1 w-28'>
				<p className='text-white font-medium text-center'>Volume</p>
			</div>
			<div className='bg-zinc-200 px-2 py-1 w-28'>
				<p className='font-medium text-black text-center'>Spread</p>
			</div>
			{spreads.map((spread, index) => (
				<React.Fragment key={index}>
					<div className='bg-zinc-800 px-2 py-1 w-28'>
						<p className='text-white font-medium text-center'>
							${spread.volume}
						</p>
					</div>
					<div className='bg-zinc-200 px-2 py-1 w-28'>
						<p className='font-medium text-black text-center'>
							{spread.spread}%
						</p>
					</div>
				</React.Fragment>
			))}
		</div>
	)
}

export default SpreadTable
