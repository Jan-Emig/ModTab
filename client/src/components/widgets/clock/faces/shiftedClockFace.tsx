import { FC } from "react";
import IClockFaceProps from "../../../../types/iclockFaceProps";
import { Box, Text } from "@chakra-ui/react";

interface IShiftedClockFace extends IClockFaceProps {
    lineHeight?: string 
}

/**
 * 
 * Vertical digital clock face with shifted positions of hours and minutes.
 * This clock face does not display a bottom divider.
 * 
 */
const ShiftedClockFace: FC<IShiftedClockFace> = ({ hour, minute, fontSize = '80px', lineHeight = '110%', fontFamily = 'roboto' }) => {

    const render = () => {
        return (
            <Box
                fontSize={ fontSize }
                fontFamily={ fontFamily }
                textShadow='md'
                fontWeight='bold'
                letterSpacing='wide'
                lineHeight={ lineHeight }
            >
                <Text >{ String(hour).padStart(2, '0') }</Text>
                <Text position='relative' left='45px'>{ String(minute).padStart(2, '0') }</Text>
            </Box>
        )
    }

    return render();
}

export default ShiftedClockFace;