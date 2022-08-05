import { FC, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import SimpleClockFace from "./faces/simpleClockFace";
import VerticalClockFace from "./faces/verticalClockFace";
import ShiftedClockFace from "./faces/shiftedClockFace";

interface IClockProps {
    top?: string,
    left?: string,
    alignCenter?: boolean
    fontSize?: string | number
}

const Clock: FC<IClockProps> = ({ top = '50%', left = '50%', alignCenter = true, fontSize = '50px' }) => {
    const [minute, setMinute] = useState(45);
    const [hour, setHour] = useState(20);
    const [opacity, setOpacity] = useState(0);
    let updateInterval = null;

    useEffect(() => {
        updateTime();
        updateInterval = setInterval(updateTime, 5000);
        // Fade clock in after current time has been set to avoid any flicker
        setOpacity(1);
    }, []);
    

    // Checks for changes in the time and updates the state accordingly
    const updateTime = (): void => {
        const now = new Date();
        if (now.getMinutes() != minute) setMinute(now.getMinutes());
        if (now.getHours() != hour) setHour(now.getHours());
    }

    const render = () => {
        return (
            <Box
                position="absolute"
                top={top}
                left={left}
                transform={alignCenter ? 'translate(-50%, -50%)' : ''}
                color="white"
                opacity={opacity}
            >
                <ShiftedClockFace 
                    hour={hour}
                    minute={minute}
                    fontSize={fontSize}
                />
            </Box>
        )
    }

    return render();
}


export default Clock;