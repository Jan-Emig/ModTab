import { Box, Image } from "@chakra-ui/react";
import React, { FC } from "react";
import { render } from "react-dom";
import BackgroundType from "../../types/backgroundType";

interface IBackgroundProps {
    type?: BackgroundType,
    source: string,
    opacity?: number,
    blur?: number
    grayscale?: number
}

/**
 * 
 * Component for displaying a background image (or video).
 * 
 */
const Background: FC<IBackgroundProps> = ({ type = 'image', source, opacity = 1, blur, grayscale }) => {

    const render = () => {
        let filter = '';
        if (blur && blur >= 0) filter += 'blur(' + blur + 'px)';
        if (grayscale && grayscale >= 0 && grayscale <= 1) filter += ' grayscale(' + grayscale + ')';
        return (
            <Box
                position='absolute'
                width='100%'
                height='100%'
                opacity={opacity}
                filter={filter}
            >
                {
                    // Render Image
                    type === 'image'
                    && (
                        <Image
                            width='100%'
                            height='100%'   
                            src={source}
                            objectFit='cover'
                            draggable='false'
                        />
                    )
                }
                {
                    // Render Video
                    type === 'video'
                    && (
                        <video
                            width='100%'
                            height='100%'
                            autoPlay={true}
                            muted={true}
                            loop={true}
                        >
                            <source src={source} type="video/mp4" />
                        </video>
                    )
                }
            </Box>
        )
    }

    return render();
};

export default Background;