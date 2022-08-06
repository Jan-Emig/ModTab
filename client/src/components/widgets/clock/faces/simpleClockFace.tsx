import { FC } from "react";
import IClockFaceProps from "../../../../types/iclockFaceProps";
import { Box, Text } from "@chakra-ui/react";
import BottomClockDivider from "../BottomClockDivider";

interface ISimpleClockFaceProps extends IClockFaceProps {
}

/**
 * 
 * Simple digital clock face with a static divider between hours and minutes.
 * 
 */
const SimpleClockFace: FC<ISimpleClockFaceProps> = ({ hour, minute, fontSize = '80px', showBottomDivider = true, fontFamily = 'roboto' }) => {

    const render = () => {
        return (
            <>
                <Text 
                    fontSize={ fontSize }
                    fontFamily={ fontFamily }
                    textShadow='md'
                    fontWeight='bold'
                    letterSpacing='wide'
                >
                    { String(hour).padStart(2, '0') }:{ String(minute).padStart(2, '0') }
                </Text>
                {
                    showBottomDivider &&
                        <BottomClockDivider />
                }
            </>
        )
    }

    return render();
}

export default SimpleClockFace;