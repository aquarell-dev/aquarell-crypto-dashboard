import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../../utils'

const buttonVariants = cva(
	'justify-center outline-none items-center rounded-md font-medium inline-flex transition duration-300 ease-in-out',
	{
		variants: {
			variant: {
				default: 'bg-zinc-800 text-white hover:bg-zinc-900',
				success: 'bg-emerald-500 text-white hover:bg-emerald-600',
				danger: 'bg-rose-500 text-white hover:bg-rose-600',
			},
			size: {
				default: 'h-10 px-4',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, children, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(buttonVariants({ variant, size, className }))}
				{...props}
			>
				{children}
			</button>
		)
	}
)

export default Button

export { buttonVariants }
