import { FC } from "react";
import IClockFaceProps from "../../../../types/iclockFaceProps";
import { Box, Text } from "@chakra-ui/react";
import BottomClockDivider from "../BottomClockDivider";

interface IRoundDigitalClockFace extends IClockFaceProps {
    width?: string,
    height?: string,
    color?: string,
}

/**
 * 
 * Rounded digital clock with a border displaying the hour's progress.
 * This component renders a bottom divider.
 * 
 */
const RoundDigitalClockFace: FC<IRoundDigitalClockFace> = ({ hour, minute, fontSize = '80px', showBottomDivider = true, fontFamily = 'roboto', width = '250px', height = '250px', color = '#35E899' }) => {

    const calculateDashOffset = (min: number) => 251 - 251 / 60 * min;

    const render = () => {
        return (
            <>
                <Box
                    position='relative'
                    fontFamily={fontFamily}
                    textShadow='md'
                    fontWeight='bold'
                    width={width}
                    height={height}
                    borderRadius='full'
                    marginBottom='40px'
                >
                    <svg viewBox='0 0 100 100' strokeDasharray='251' strokeDashoffset={calculateDashOffset(minute)} style={{'transform': 'rotate(-90deg) scale(1.3)'}}>
                        <circle cx='50' cy='50' r='40' stroke='black' strokeWidth='3.1' fill='transparent' opacity='0.2' />
                        <circle cx='50' cy='50' r='40' stroke={color} strokeWidth='3' fill='transparent' />
                    </svg>
                    <Text
                        position='absolute'
                        top='50%'
                        left='50%'
                        fontSize={fontSize}
                        fontFamily={fontFamily}
                        fontWeight='bold'
                        letterSpacing='wide'
                        transform='translate(-50%, -50%)'
                    >
                        { String(hour).padStart(2, '0') }:{ String(minute).padStart(2, '0') }
                    </Text>
                </Box>
                {
                    showBottomDivider &&
                        <BottomClockDivider />
                }
            </>
        )
    }

    return render();
}

export default RoundDigitalClockFace;