import { FC } from 'react'
import Button from '../../ui/button'
import Status from '../../ui/status'
import ForksTable from './components/forks-table'
import useForks from './hooks/useForks'

const Home: FC = () => {
	const { forks, subscribe, unsubcribe, subscribed, connected } = useForks()

	console.log(forks)

	return (
		<div className='p-4'>
			<div className='flex flex-col space-y-2'>
				<div className='flex items-center justify-between space-x-4 w-full'>
					<Status
						caption='Connection'
						variant={connected ? 'active' : 'disabled'}
						size='md'
					/>
					<Button
						variant={subscribed ? 'danger' : 'success'}
						onClick={() => (!subscribed ? subscribe() : unsubcribe())}
					>
						<p>{subscribed ? 'Unsubcribe' : 'Subscribe'}</p>
					</Button>
				</div>
				<ForksTable forks={forks} />
			</div>
		</div>
	)
}

export default Home
