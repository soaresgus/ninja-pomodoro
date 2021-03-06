import React, { useState } from "react";
import { Container, StyledTab, StyledTabs } from "./styles";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const timerModeString = (mode: number) => mode ? 'descanso' : 'trabalho'

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`modo-temporizador-${timerModeString(index)}-conteudo`}
            aria-labelledby={`modo temporizador ${timerModeString(index)}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `modo-temporizador-${timerModeString(index)}`,
        'aria-controls': `modo temporizador ${timerModeString(index)}`,
    };
}

interface props {
    content: Array<React.ReactNode>;
    paleteColor?: 'primary' | 'secondary' | 'hover' | 'light' | 'text';
    disabled?: boolean[]
    onClickActions?: React.MouseEventHandler<HTMLElement>[];
}

export function TimerModeTabs({ content, paleteColor, disabled, onClickActions }: props) {
    const [restMode, setRestMode] = useState(false);

    const handleRestModeChange = (event: React.SyntheticEvent, value: boolean) => {
        setRestMode(value);
    };

    const restModeBooleanToNumber = Number(restMode)

    return (
        <Container>
            <StyledTabs
                value={restModeBooleanToNumber}
                onChange={handleRestModeChange}
                aria-label="Trocar modo do temporizador"
                color={paleteColor}
            >
                <StyledTab color={paleteColor} label="TRABALHO" {...a11yProps(0)} {...(disabled && { disabled: disabled[0] })} {...(onClickActions && { onClick: onClickActions[0] })} />
                <StyledTab color={paleteColor} label="DESCANSO" {...a11yProps(1)} {...(disabled && { disabled: disabled[1] })} {...(onClickActions && { onClick: onClickActions[1] })} />
            </StyledTabs>

            <TabPanel value={restModeBooleanToNumber} index={0}>
                {content[0]}
            </TabPanel>
            <TabPanel value={restModeBooleanToNumber} index={1}>
                {content[1]}
            </TabPanel>
        </Container>
    )
}