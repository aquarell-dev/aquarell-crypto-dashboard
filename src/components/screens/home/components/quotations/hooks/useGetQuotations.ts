import { useEffect, useState } from 'react'
import { QuotationsProps } from '..'
import { Fork } from '../../../../../../types/fork.types'

type SideQuotations = {
	buy: QuotationsProps
	sell: QuotationsProps
}

const useGetQuotations = (fork: Fork) => {
	const [sideQuotations, setSideQuotations] = useState<SideQuotations>(
		{} as SideQuotations
	)

	const getQuotations = (side: 'buy' | 'sell') => {
		let firstSideAction: 'LONG' | 'SHORT' = fork.direction.split('_')[0] as
			| 'LONG'
			| 'SHORT'

		if (side === 'buy') {
			const orderBook =
				firstSideAction === 'LONG'
					? fork.orderBooks.first // direction = LONG_SHORT
					: fork.orderBooks.second // directon = SHORT_LONG

			return {
				quotations: orderBook.asks.slice(0, 5),
				exchange: orderBook.exchange,
			}
		}

		const orderBook =
			firstSideAction === 'SHORT'
				? fork.orderBooks.first // direction = SHORT_LONG
				: fork.orderBooks.second // direction = LONG_SHORT

		return {
			quotations: orderBook.bids.reverse().slice(0, 5),
			exchange: orderBook.exchange,
		}
	}

	useEffect(() => {
		const buyQuotations = getQuotations('buy')
		const sellQuotations = getQuotations('sell')

		setSideQuotations({
			buy: {
				quotations: buyQuotations.quotations,
				exchange: buyQuotations.exchange,
				side: 'buy',
			},
			sell: {
				quotations: sellQuotations.quotations,
				exchange: sellQuotations.exchange,
				side: 'sell',
			},
		})
	}, [fork])

	return { sideQuotations }
}

export default useGetQuotations
