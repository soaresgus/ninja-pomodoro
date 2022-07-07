import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 1.5rem;
    padding-top: 0;
    gap: 2rem;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem
`;

export const StyledInput = styled(TextField)`
    && {
        .MuiOutlinedInput-root, .MuiInputLabel-root {
            font-size: 1.6rem;
            color: ${props => props.theme.colors.text};
        }
        
        .MuiOutlinedInput-notchedOutline {
            border-color: ${props => props.theme.colors.text};

        }
    }
`;