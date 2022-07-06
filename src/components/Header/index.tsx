import { ThemeButton } from "../ThemeButton";
import { Content, Container, Logo } from "./styles";

interface props {
    toggleTheme: () => void;
}

export function Header({ toggleTheme }: props) {
    return (
        <Container>
            <Content>
                <Logo>Ninja Pomodoro</Logo>
                <ThemeButton toggleTheme={toggleTheme} />
            </Content>
        </Container>
    )
}