import { Tabs, Tab } from '@mui/material';
import styled from 'styled-components';

export const StyledTabs = styled(Tabs)`
    & .MuiTabs-indicator {
        background-color: ${props => props.theme.colors.light};
    }
`;

export const StyledTab = styled(Tab)`
    && {
        font-size: 1.8rem;
        color: white;
    }

    &&.Mui-selected {
        color: ${props => props.theme.colors.light};
    }

    &&.Mui-disabled {
        color: ${props => props.theme.colors.secondary};

        &:disabled {
            cursor: not-allowed;
            pointer-events: all;
        }
    }
`;



