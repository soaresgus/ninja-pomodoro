import { Button, Checkbox, TextField } from '@mui/material';
import styled from 'styled-components';
import { HoverButtonContent, HoverButtonArrow } from '../PopoverButton/styles';

export const Container = styled.div`
    display: flex;
    padding: 1.5rem;
    padding-top: 0;
    gap: 2rem;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
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
        }
    }
`;

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
`

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
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem
`;

export const FormFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

export const PopoverText = styled.span`
    max-width: 26rem;
`;