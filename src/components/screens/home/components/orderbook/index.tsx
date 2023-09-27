import { FC, memo } from 'react'
import { Fork } from '../../../../../types/fork.types'
import Quotations from '../quotations'
import useGetQuotations from '../quotations/hooks/useGetQuotations'

const OrderBook: FC<{ fork: Fork }> = ({ fork }) => {
	const { sideQuotations } = useGetQuotations(fork)

	return (
		<div className='flex space-x-4 items-center'>
			<Quotations {...sideQuotations.sell} />
			<Quotations {...sideQuotations.buy} />
		</div>
	)
}

export default memo(OrderBook)
