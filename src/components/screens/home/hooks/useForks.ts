import { useEffect, useState } from 'react'
import { Fork } from '../../../../types/fork.types'
import { ResponseData } from '../../../../types/server.types'

const WEBSOCKET_URL = 'ws://localhost:8080'

const useForks = () => {
	const [forks, setForks] = useState<Fork[]>([])
	const [webSocket, setWebSocket] = useState<WebSocket | null>(null)
	const [connected, setConnected] = useState(false)
	const [subscribed, setSubcribed] = useState(false)

	const subscribe = () => {
		webSocket?.send('subscribe')
		setSubcribed(true)
	}

	const unsubcribe = () => {
		webSocket?.send('unsubscribe')
		setSubcribed(false)
	}

	useEffect(() => {
		const socket = new WebSocket(WEBSOCKET_URL)
		setWebSocket(socket)

		socket.onopen = () => setConnected(true)
		socket.onmessage = (e: MessageEvent) => {
			const { type, message }: ResponseData = JSON.parse(e.data)

			if (type === 'forks') setForks(message as Fork[])
		}
		socket.onerror = e => console.error(e)
		socket.onclose = e => setConnected(false)

		return () => {
			socket.close()
		}
	}, [])

	return { forks, connected, subscribe, unsubcribe, subscribed }
}

export default useForks
