import { Checkbox } from "@mui/material";
import React from "react";
import { StyledCheckbox } from "./styles";

interface CheckboxProps extends React.ComponentProps<typeof Checkbox> {
    id: string,
    labelText?: string,
}

export function CheckboxWithLabel({ id, labelText, ...props }: CheckboxProps) {
    return (
        <div>
            {
                labelText && (
                    <label htmlFor={id}>{labelText}</label>
                )
            }
            <StyledCheckbox id={id} {...props} />
        </div>
    )
}