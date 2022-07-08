import styled from "styled-components";
import { Checkbox } from '@mui/material'

export const StyledCheckbox = styled(Checkbox)`
    && {
        padding: .5rem;
        color: ${props => props.theme.colors.text};
        & .MuiSvgIcon-root {
            font-size: 3rem;
        }
        
        &.Mui-checked {
            color: ${props => props.theme.colors.primary};
        }
    }
`;