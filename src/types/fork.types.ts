export type Exchange = 'GATE' | 'BYBIT' | 'KUCOIN' | 'BINANCE'

export type Quotation = { price: string; size: number }

export type Spread = { volume: string; spread: number }

export type Fork = {
	coin: string
	direction: 'LONG_SHORT' | 'SHORT_LONG'
	active: boolean
	spreads: Spread[]
	orderBooks: {
		first: OrderBook
		second: OrderBook
	}
}

export type OrderBook = {
	coin: string
	exchange: Exchange
	bids: Quotation[]
	asks: Quotation[]
}
