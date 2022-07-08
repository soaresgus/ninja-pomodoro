import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: min(76.8rem, 100%);
    margin-inline: auto;
    padding-inline: 1.5rem;
`;

export const Container = styled.header`
    display: flex;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};

    position: absolute;

    width: 100%;
    padding-block: 1rem;
`;

export const Logo = styled.span`
    font-size: 2.5rem;
    font-weight: 700;
`;

