import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 1.5rem;
    padding-top: 0;
    gap: 2rem;
    width: 29.4rem;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem
`;

export const StyledInput = styled(TextField)`
    && {
        & .MuiOutlinedInput-root, .MuiInputLabel-root {
            font-size: 1.6rem;
            color: ${props => props.theme.colors.text};

            & .MuiOutlinedInput-notchedOutline {
                border-color: ${props => props.theme.colors.text};
            }

            &.Mui-focused {
                &.MuiInputLabel-root {
                    color: ${props => props.theme.colors.primary};
                }

                & .MuiOutlinedInput-notchedOutline {
                     border-color: ${props => props.theme.colors.primary};
                }
            }
            
            &.Mui-disabled {
                & .MuiOutlinedInput-notchedOutline {
                     border-color: ${props => props.theme.colors.light};
                }

                &.MuiInputLabel-root, &.MuiOutlinedInput-root {
                    color: ${props => props.theme.colors.light};
                }
            }
        }
    }
`;

export const StyledButton = styled(Button)`
    && {
        color: ${props => props.theme.colors.text};
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
        border-color: ${props => props.theme.colors.text};
        &:hover {
            background-color: ${props => props.theme.colors.light};
            border-color: ${props => props.theme.colors.light};
        }

        &.Mui-disabled {
            background-color: ${props => props.theme.colors.light};

            cursor: not-allowed;
            pointer-events: all;
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 21.6rem;
    width: 26.3rem;
`;

export const PopoverText = styled.span`
    max-width: 26rem;
    padding: .5rem;
`;