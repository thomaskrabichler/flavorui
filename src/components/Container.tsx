import clsx from 'clsx'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-screen-2xl px-6 sm:px-6 lg:px-8', className)}
      // className={clsx('lg:max-w-none mx-auto max-w-2xl px-6 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
