import styled, { css } from 'styled-components';

const ButtonStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: .8rem;
    width: 100%;
    padding-block: .5rem;

    background-color: ${props => props.theme.colors.secondary};
    border: none;
    color: ${props => props.theme.colors.text};

    transition: background-color .2s;

    &:hover {
        background-color: ${props => props.theme.colors.hover};
        cursor: pointer;
    }

    &:focus {
        box-shadow: 0 0 0 .1rem white;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: .8rem;
    padding: 1.5rem;
    gap: 1rem;

    background-color: ${props => props.theme.colors.primary}
`;

export const TimeText = styled.strong`
    font-size: 9rem;
    letter-spacing: 1rem;
    margin-left: 1rem;
    line-height: 1;
`;

export const ConfigurationsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ControlersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: .8rem
`;

export const ResetButton = styled.button`
    ${ButtonStyle};
`;

export const PlayPauseButton = styled.button`
    ${ButtonStyle};
`;