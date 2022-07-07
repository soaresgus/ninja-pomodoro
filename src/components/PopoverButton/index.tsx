import { HoverButtonArrow, HoverButtonContent, HoverButtonTrigger, PopoverArrow, PopoverClose, PopoverContent, PopoverTrigger } from './styles'

import * as HoverCard from '@radix-ui/react-hover-card';
import * as Popover from '@radix-ui/react-popover';

import { MdClose } from 'react-icons/md'

interface props {
    title: string,
    icon: any,
    children?: React.ReactNode,
}

export function PopoverButton({ title, icon, children }: props) {
    const HoverButton = HoverCard.Root;

    const PopoverRoot = Popover.Root;
    return (
        <PopoverRoot modal>
            <PopoverTrigger aria-label={title}>
                <HoverButton openDelay={0}>
                    <HoverButtonTrigger>
                        {icon}
                    </HoverButtonTrigger>

                    <HoverButtonContent>
                        <span>{title}</span>
                        <HoverButtonArrow />
                    </HoverButtonContent>
                </HoverButton>
            </PopoverTrigger>

            <PopoverContent>
                <PopoverClose>
                    <MdClose size={15} />
                </PopoverClose>
                {children}
                <PopoverArrow />
            </PopoverContent>
        </PopoverRoot>
    )
}