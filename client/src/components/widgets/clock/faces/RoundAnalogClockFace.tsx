import { FC } from "react";
import IClockFaceProps from "../../../../types/iclockFaceProps";
import { Box, Text } from "@chakra-ui/react";

interface IRoundAnalogClockFace extends IClockFaceProps {
    sweepHandColor?: string,
    hourHandColor?: string,
    dotColor?: string,
    labelOpacity?: number,
    width?: string | number,
    height?: string | number,
}

/**
 * 
 * Rounded clock face component, simulating a real analog clock.
 * This clock face does not display a bottom divider but allows changing the sweep hand color.
 * 
 */
const RoundAnalogClockFace: FC<IRoundAnalogClockFace> = ({ hour, minute, fontFamily = 'roboto', sweepHandColor = 'white', hourHandColor = 'white', dotColor = 'white', width = '250px', height = '250px', labelOpacity = 0.8 }) => {

    const calculateSweepHandAngle = (value: number): number => 180 + value / 60 * 360;
    const calculateHourHandAngle = (value: number): number => 180 + 30 * ((value + minute / 100) % 12);

    const render = () => {
        return (
            <Box
                position='relative'
                fontFamily={fontFamily}
                textShadow='md'
                fontWeight='bold'
                border='8px solid white'
                width={width}
                height={height}
                borderRadius='full'
                boxShadow='0px 0px 48px 0px rgba(0,0,0,0.2)'
            >
                { /* Centre Dot */ }
                <Box
                    position='absolute'
                    top='50%'
                    left='50%'
                    width='20px'
                    height='20px'
                    transform='translate(-50%, -50%)'
                >
                    { /* Sweep Hand */ }
                    <Box
                        position='absolute'
                        top='7px'
                        left='7px'
                        width='7px'
                        height={`calc(${height} * 0.32)`}
                        bgColor={sweepHandColor}
                        transformOrigin='4px 4px'
                        transform={`rotate(${calculateSweepHandAngle(minute)}deg)`}
                        borderRadius='full'
                        boxShadow='0px 0px 5px 0px rgba(0,0,0,0.54)'
                    />
                    { /* Hour Hand */ }
                    <Box
                        position='absolute'
                        top='7px'
                        left='7px'
                        width='7px'
                        height={`calc(${height} * 0.22)`}
                        bgColor={hourHandColor}
                        transformOrigin='4px 4px'
                        transform={`rotate(${calculateHourHandAngle(hour)}deg)`}
                        borderRadius='full'
                        boxShadow='0px 0px 5px 0px rgba(0,0,0,0.54)'
                    />
                </Box>
                {
                    
                }
                 <Box
                    position='absolute'
                    top='50%'
                    left='50%'
                    width='20px'
                    height='20px'
                    bgColor={dotColor}
                    transform='translate(-50%, -50%)'
                    borderRadius='full'
                    boxShadow='0px 0px 5px 0px rgba(0,0,0,0.54)'
                />
                <Text
                    position='absolute'
                    top='0'
                    left='50%'
                    color='white'
                    transform='translateX(-50%)'
                    fontSize='30px'
                    opacity={labelOpacity}
                >12</Text>
                <Text
                    position='absolute'
                    top='calc(50% - 2px)'
                    right='5px'
                    color='white'
                    transform='translateY(-50%)'
                    fontSize='30px'
                    opacity={labelOpacity}
                >3</Text>
                <Text
                    position='absolute'
                    bottom='0'
                    left='50%'
                    color='white'
                    transform='translateX(-50%)'
                    fontSize='30px'
                    opacity={labelOpacity}
                >6</Text>
                <Text
                    position='absolute'
                    top='50%'
                    left='5px'
                    color='white'
                    transform='translateY(-50%)'
                    fontSize='30px'
                    opacity={labelOpacity}
                >9</Text>
            </Box>
        )
    }

    return render();
}

export default RoundAnalogClockFace;