import { cn } from '@/util/helper';

const ViewContainer: React.FunctionComponent<
    React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
    return (
        <div className={cn('view-container', className)} {...attr}>
            {attr?.children}
        </div>
    );
};

export default ViewContainer;
