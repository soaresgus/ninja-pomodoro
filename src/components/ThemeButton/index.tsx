import { useContext } from "react";

import { Container, Switch, SwitchThumb } from "./styles";
import { ThemeContext } from 'styled-components'

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { IconContext } from "react-icons";


interface props {
    toggleTheme: () => void;
}

export function ThemeButton({ toggleTheme }: props) {
    const { title } = useContext(ThemeContext);
    const defaultTheme = 'light'
    return (
        <IconContext.Provider value={{ size: '20' }}>
            <Container>
                <MdOutlineLightMode />
                <Switch onCheckedChange={toggleTheme} checked={title != defaultTheme}>
                    <SwitchThumb />
                </Switch>
                <MdOutlineDarkMode />
            </Container>
        </IconContext.Provider>
    )
}