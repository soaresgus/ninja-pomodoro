import { TimerModeTabs } from "../TimerModeTabs";
import { Container } from "./styles";

export function ConfigurationsForm() {
    return (
        <Container>
            <TimerModeTabs content={[
                (<span>Teste 4</span>),
                (<span>Teste 5</span>)
            ]} />
        </Container>
    )
}