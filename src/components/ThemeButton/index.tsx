import { Container, Switch, SwitchThumb } from "./styles";

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { IconContext } from "react-icons";

interface props {
    toggleTheme: () => void;
}

export function ThemeButton({ toggleTheme }: props) {
    return (
        <IconContext.Provider value={{ size: '20' }}>
            <Container>
                <MdOutlineLightMode />
                <Switch onCheckedChange={toggleTheme}>
                    <SwitchThumb />
                </Switch>
                <MdOutlineDarkMode />
            </Container>
        </IconContext.Provider>
    )
}