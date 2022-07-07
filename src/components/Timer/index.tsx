import { useState } from "react";

import { ConfigurationsContainer, Container, ControlersContainer, PlayPauseButton, ResetButton, TimeText, StyledTabs, StyledTab } from "./styles";

import { MdTune, MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md'
import { IconContext } from "react-icons";

import { Tabs, Tab } from "@mui/material";

import { PopoverButton } from "../PopoverButton";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function Timer() {
    const [restMode, setRestMode] = useState(false);

    const handleRestModeChange = (event: React.SyntheticEvent, value: boolean) => {
        setRestMode(value);
    };

    const restModeBooleanToNumber = Number(restMode)

    return (
        <IconContext.Provider value={{ size: '28' }}>
            <Container>
                <StyledTabs
                    value={restModeBooleanToNumber}
                    onChange={handleRestModeChange}
                    aria-label="Trocar modo do temporizador"
                >
                    <StyledTab label="TRABALHO" {...a11yProps(0)} />
                    <StyledTab label="DESCANSO" {...a11yProps(1)} />
                </StyledTabs>

                <TabPanel value={restModeBooleanToNumber} index={0}>
                    Olá universo!
                </TabPanel>
                <TabPanel value={restModeBooleanToNumber} index={1}>
                    Olá flor!
                </TabPanel>

                <TimeText>25:00</TimeText>

                <ControlersContainer>
                    <PlayPauseButton
                        onClick={() => { }}
                    >
                        <MdPlayArrow />
                    </PlayPauseButton>

                    <ResetButton>
                        <MdRefresh />
                    </ResetButton>
                </ControlersContainer>

                <ConfigurationsContainer>
                    <PopoverButton
                        icon={<MdTune />}
                        title='Configurações'
                    >
                        Olá lindo mundo!
                    </PopoverButton>
                </ConfigurationsContainer>
            </Container>
        </IconContext.Provider>
    )
}