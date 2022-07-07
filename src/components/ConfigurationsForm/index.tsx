import { TimerModeTabs } from "../TimerModeTabs";
import { Container, InputContainer, StyledInput } from "./styles";

export function ConfigurationsForm() {
    const jobForm = (
        <>
            <InputContainer>
                <label htmlFor="job-time">Tempo</label>
                <StyledInput
                    type="text"
                    id="job-time"
                    label="Tempo (minutos)"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        inputMode: 'numeric',
                        endAdornment: <label htmlFor="job-time">min</label>,
                    }}
                />
            </InputContainer>
        </>
    )

    const restForm = (
        <></>
    )

    return (
        <Container>
            <TimerModeTabs paleteColor="primary" content={[
                (jobForm),
                (restForm)
            ]} />
        </Container>
    )
}