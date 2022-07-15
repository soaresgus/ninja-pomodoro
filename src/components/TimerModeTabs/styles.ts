import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components';

import { IPaleteColors } from '../../styles/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const StyledTabs = styled(Tabs)`
    & .MuiTabs-indicator {
        background-color:${props => props.theme.colors[props.color as keyof IPaleteColors || 'light']};
    }
`;

export const StyledTab = styled(Tab)`
    && {
        font-size: 1.8rem;
        color: white;
    }

    &&.Mui-selected {
        color: ${props => props.theme.colors[props.color as keyof IPaleteColors || 'light']};
    }

    &&.Mui-disabled {
        color: ${props => props.theme.colors.secondary};

        &:disabled {
            cursor: not-allowed;
            pointer-events: all;
        }
    }
`;



