import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: .8rem;
    padding: 1.5rem;

    background-color: ${props => props.theme.colors.primary}
`;

export const TimeText = styled.strong`
    font-size: 9rem;
    letter-spacing: 1rem;
    margin-left: 1rem;
`;

export const ConfigurationsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;