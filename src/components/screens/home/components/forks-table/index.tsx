import { FC } from 'react'
import { Fork } from '../../../../../types/fork.types'
import ForkRow from '../fork-row'

const ForksTable: FC<{ forks: Fork[] }> = ({ forks }) => {
	return (
		<table className='min-w-full border border-gray-300'>
			<thead>
				<tr>
					<th className='px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
						Coin
					</th>
					<th className='px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
						Direction
					</th>
					<th className='px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
						Spread
					</th>
				</tr>
			</thead>
			<tbody>
				{forks.map((fork, index) => (
					<ForkRow {...fork} key={index} />
				))}
			</tbody>
		</table>
	)
}

export default ForksTable
