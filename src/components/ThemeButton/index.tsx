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
                <label htmlFor="themeSwitcher">
                    <MdOutlineLightMode />
                </label>
                <Switch onCheckedChange={toggleTheme} checked={title != defaultTheme} id="themeSwitcher">
                    <SwitchThumb />
                </Switch>
                <label htmlFor="themeSwitcher">
                    <MdOutlineDarkMode />
                </label>
            </Container>
        </IconContext.Provider>
    )
}