import { FC, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface IClockProps {
    top?: string,
    left?: string,
    alignCenter?: boolean
    fontSize?: number
}

const Clock: FC<IClockProps> = ({ top = '50%', left = '50%', alignCenter = true, fontSize = '50px' }) => {
    const [minute, setMinute] = useState(45);
    const [hour, setHour] = useState(20);
    let updateInterval = null;

    useEffect(() => {
        updateTime();
        updateInterval = setInterval(updateTime, 5000);
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
            >
                <Text
                    fontSize={fontSize}
                >
                    { String(hour).padStart(2, '0') }:{ String(minute).padStart(2, '0') }
                </Text>
            </Box>
        )
    }

    return render();
}


export default Clock;