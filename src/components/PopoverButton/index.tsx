import { HoverButtonArrow, HoverButtonContent, HoverButtonTrigger, PopoverArrow, PopoverClose, PopoverContent, PopoverTrigger } from './styles'

import * as HoverCard from '@radix-ui/react-hover-card';
import * as Popover from '@radix-ui/react-popover';

import { MdClose } from 'react-icons/md'

interface props {
    title: string,
    icon: any,
    content?: any,
}

export function PopoverButton({ title, icon, content }: props) {
    const HoverButton = HoverCard.Root;

    const PopoverRoot = Popover.Root;
    return (
        <PopoverRoot modal>
            <PopoverTrigger>
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
                {content}
                <PopoverArrow />
            </PopoverContent>
        </PopoverRoot>
    )
}