import { FC } from "react";
import IClockFaceProps from "../../../../types/iclockFaceProps";
import { Box, Text } from "@chakra-ui/react";
import BottomClockDivider from "../BottomClockDivider";

interface IVerticalClockFace extends IClockFaceProps {
    lineHeight?: string 
}

/**
 * 
 * Simple vertical clock face.
 * 
 */
const VerticalClockFace: FC<IVerticalClockFace> = ({ hour, minute, fontSize = '80px', showBottomDivider = true, lineHeight = '110%', fontFamily = 'roboto' }) => {

    const render = () => {
        return (
            <>
                <Text 
                    fontSize={ fontSize }
                    fontFamily={ fontFamily }
                    textShadow='md'
                    fontWeight='bold'
                    letterSpacing='wide'
                    lineHeight={ lineHeight }
                >
                    { String(hour).padStart(2, '0') }<br />{ String(minute).padStart(2, '0') }
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

export default VerticalClockFace;