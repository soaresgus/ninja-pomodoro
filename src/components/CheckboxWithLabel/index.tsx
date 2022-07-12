import { Checkbox } from "@mui/material";
import React from "react";
import { StyledCheckbox, Container } from "./styles";

interface CheckboxProps extends React.ComponentProps<typeof Checkbox> {
    id: string,
    labelText?: string,
    disabled?: boolean,
}

export function CheckboxWithLabel({ id, labelText, disabled, ...props }: CheckboxProps) {
    return (
        <Container aria-disabled={disabled}>
            {
                labelText && (
                    <label htmlFor={id}>{labelText}</label>
                )
            }
            <StyledCheckbox id={id} {...props} disabled={disabled} />
        </Container>
    )
}