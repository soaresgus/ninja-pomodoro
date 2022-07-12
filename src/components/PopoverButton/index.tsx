import { HoverButtonArrow, HoverButtonContent, HoverButtonTrigger, PopoverArrow, PopoverClose, PopoverContent, PopoverTrigger } from './styles'

import * as HoverCard from '@radix-ui/react-hover-card';
import * as Popover from '@radix-ui/react-popover';

import { MdClose } from 'react-icons/md'

interface props extends React.ComponentProps<typeof Popover.Root> {
    title?: string,
    icon: any,
    children?: React.ReactNode,
    paleteColor?: 'primary' | 'secondary' | 'hover' | 'light' | 'text',
    avoidCollisions?: boolean
}

export function PopoverButton({ title, icon, children, paleteColor, avoidCollisions = true, ...props }: props) {
    const HoverButton = HoverCard.Root;

    const PopoverRoot = Popover.Root;
    return (
        <PopoverRoot modal {...props}>
            <PopoverTrigger aria-label={title}>
                <HoverButton openDelay={0}>
                    <HoverButtonTrigger>
                        {icon}
                    </HoverButtonTrigger>

                    {
                        title && (
                            <HoverButtonContent color={paleteColor}>
                                <span>{title}</span>
                                <HoverButtonArrow />
                            </HoverButtonContent>
                        )
                    }
                </HoverButton>
            </PopoverTrigger>

            <PopoverContent avoidCollisions={avoidCollisions} color={paleteColor} side='top'>
                <PopoverClose>
                    <MdClose size={15} />
                </PopoverClose>
                {children}
                <PopoverArrow color={paleteColor} />
            </PopoverContent>
        </PopoverRoot>
    )
}