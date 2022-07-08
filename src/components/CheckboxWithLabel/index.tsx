import { StyledCheckbox } from "./styles";

interface props {
    id: string,
    labelText?: string,
}

export function CheckboxWithLabel({ id, labelText }: props) {
    return (
        <div>
            {
                labelText && (
                    <label htmlFor={id}>{labelText}</label>
                )
            }
            <StyledCheckbox id={id} />
        </div>
    )
}