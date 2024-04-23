import { HTMLAttributes } from 'react'
import { cn } from '@/util/helper'

const Section: React.FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({ ...attr }) => {
    return (
        <section className={cn('my-6 py-2', attr?.className)} {...attr}>
            {attr?.children}
        </section>
    )
}

export default Section