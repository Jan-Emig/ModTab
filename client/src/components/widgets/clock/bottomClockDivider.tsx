import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

/**
 * 
 * Simple component that renders a white horizontal line with 50% of the parent element's width.
 * 
 */
const BottomClockDivider: FC = () => {

    const render = () => {
        return (
            <Box height='5px' width='50%' position='relative' top='-5px' left='50%' transform='translateX(-50%)' background='white' borderRadius='5px' />
        );
    }

    return render();
}

export default BottomClockDivider;