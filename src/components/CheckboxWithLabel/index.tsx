import { StyledCheckbox } from "./styles";

interface props {
    id: string,
    labelText?: string,
    checked?: boolean
}

export function CheckboxWithLabel({ id, labelText, checked }: props) {
    return (
        <div>
            {
                labelText && (
                    <label htmlFor={id}>{labelText}</label>
                )
            }
            <StyledCheckbox id={id} checked={checked} />
        </div>
    )
}