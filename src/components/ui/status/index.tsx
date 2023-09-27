import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react'
import { cn } from '../../../utils'

const variants = cva('rounded-full shadow-xl border-gray-300', {
	variants: {
		variant: {
			default: 'bg-gray-500',
			active: 'bg-emerald-400',
			disabled: 'bg-rose-500',
		},
		size: {
			default: 'w-2 h-2',
			sm: 'w-1 h-1',
			md: 'w-4 h-4',
			lg: 'w-8 h-8',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
})

export type StatusProps = { caption: string } & VariantProps<typeof variants>

const Status: FC<StatusProps> = ({ variant, size, caption }) => {
	return (
		<div className='flex space-x-2 items-center justify-center'>
			<p className='text-lg'>{caption}</p>
			<div className={cn(variants({ variant, size }))} />
		</div>
	)
}

export default Status
