import styled from 'styled-components';

import * as SwitchPrimitive from '@radix-ui/react-switch';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;;
    align-items: center;
    gap: .8rem
`;

export const Switch = styled(SwitchPrimitive.Root)`
    all: unset;

    width: 5rem;
    height: 2.5rem;
    border-radius: 200px;

    -webkit-tap-highlight-color: 'rgba(0, 0, 0, 0)';
    background-color: ${props => props.theme.colors.secondary};

    &:focus { 
        box-shadow: 0 0 0 .1rem black
    }
`;

export const SwitchThumb = styled(SwitchPrimitive.Thumb)`
    display: block;
    
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 200px;

    background-color: white;
    
    transition: transform 100ms;
    transform: translateX(.2rem);
    will-change: transform;

    &[data-state="checked"] {
        transform: translateX(2.6rem)
    }
`;


