import { FC, useState } from 'react'
import { Fork } from '../../../../../types/fork.types'
import { cn } from '../../../../../utils'
import OrderBook from '../orderbook'
import SpreadTable from '../spread-table'

const ForkRow: FC<Fork> = fork => {
	const [expanded, setExpanded] = useState(false)

	return (
		<>
			<tr
				className='cursor-pointer transition duration-300 hover:bg-gray-50'
				onClick={() => setExpanded(!expanded)}
			>
				<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-300'>
					{fork.coin}
				</td>
				<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-300'>
					{fork.direction}
				</td>
				<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-300'>
					{fork.spreads.length > 0 ? fork.spreads[0].spread : 'null'}%
				</td>
			</tr>
			<tr className={cn(!expanded && 'hidden')}>
				<td
					colSpan={3}
					className='bg-gray-50 px-6 py-4 whitespace-nowrap border-b'
				>
					<div className='flex justify-center space-x-12 items-center'>
						<OrderBook fork={fork} />
						<SpreadTable spreads={fork.spreads} />
					</div>
				</td>
			</tr>
		</>
	)
}

export default ForkRow
