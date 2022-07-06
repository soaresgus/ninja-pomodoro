import styled, { keyframes } from 'styled-components';

import * as HoverCard from '@radix-ui/react-hover-card';
import * as Popover from '@radix-ui/react-popover';

export const HoverButtonTrigger = styled(HoverCard.Trigger)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3.5rem;
    height: 3.5rem;
    padding: .5rem;
    border-radius: 200px;

    background-color: ${props => props.theme.colors.secondary};

    cursor: pointer;

    transition: background-color .2s;

    &:hover {
        background-color: ${props => props.theme.colors.hover}
    }
`;

export const HoverButtonArrow = styled(HoverCard.Arrow)`
    fill: ${props => props.theme.colors.hover};
    margin-bottom: .5rem;
`;

const FadeAnimation = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`

export const HoverButtonContent = styled(HoverCard.Content)`
    display: flex;

    background-color: ${props => props.theme.colors.hover};

    border-radius: .4rem;
    padding: .5rem;

    font-size: 1.6rem;

    animation-name: ${FadeAnimation};
    animation-duration: .2s;
`;

export const PopoverTrigger = styled(Popover.Trigger)`
    all: unset;
    display: flex;
    align-items: center;

    border-radius: 200px;
    
    &:focus {
        box-shadow: 0 0 0 .1rem white;
    }
`;

export const PopoverArrow = styled(Popover.Arrow)`
    fill: ${props => props.theme.colors.hover};
    margin-bottom: .5rem;
`;

export const PopoverContent = styled(Popover.Content)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    background-color: ${props => props.theme.colors.hover};
    border-radius: .4rem;
    padding: .5rem;

    font-size: 1.6rem;

    animation-name: ${FadeAnimation};
    animation-duration: .2s;
`;

export const PopoverClose = styled(Popover.Close)`
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 2.0rem;
    height: 2.0rem;
    padding: .25rem;
    border-radius: 200px;

    background-color: ${props => props.theme.colors.hover};

    cursor: pointer;

    transition: background-color .2s;

    &:hover {
        background-color: ${props => props.theme.colors.secondary}
    }
`;