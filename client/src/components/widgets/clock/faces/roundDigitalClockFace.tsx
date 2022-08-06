import { FC } from "react";
import IClockFaceProps from "../../../../types/iclockFaceProps";
import { Box, Text } from "@chakra-ui/react";
import BottomClockDivider from "../BottomClockDivider";

interface IRoundDigitalClockFace extends IClockFaceProps {
    width?: string,
    height?: string
}

/**
 * 
 * Rounded digital clock with a border displaying the hour's progress.
 * This component renders a bottom divider.
 * 
 */
const RoundDigitalClockFace: FC<IRoundDigitalClockFace> = ({ hour, minute, fontSize = '80px', showBottomDivider = true, fontFamily = 'roboto', width = '250px', height = '250px' }) => {

    const render = () => {
        return (
            <>
                <Box
                    position='relative'
                    fontFamily={fontFamily}
                    textShadow='md'
                    fontWeight='bold'
                    border='8px solid white'
                    width={width}
                    height={height}
                    marginBottom='40px'
                    borderRadius='full'
                    boxShadow='0px 0px 48px 0px rgba(0,0,0,0.2)'
                ></Box>
                {
                    showBottomDivider &&
                        <BottomClockDivider />
                }
            </>
            // <>
            //     <Text 
            //         fontSize={ fontSize }
            //         fontFamily={ fontFamily }
            //         textShadow='md'
            //         fontWeight='bold'
            //         letterSpacing='wide'
            //     >
            //         { String(hour).padStart(2, '0') }:{ String(minute).padStart(2, '0') }
            //     </Text>
            // </>
        )
    }

    return render();
}

export default RoundDigitalClockFace;