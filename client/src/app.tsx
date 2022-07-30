import { ChakraProvider } from "@chakra-ui/react";
import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import Background from "./components/main/background";

/**
 * 
 * Extensions entry point for the client.
 */
const App: FC = () => {
    const render = () => {
        return (
            <ChakraProvider>
                <Background 
                    source="https://www.pexels.com/video/3571264/download/"
                    type="video"
                    // source="https://images.unsplash.com/photo-1658184227954-fb1c0d8a9175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                    opacity={0.7}
                    blur={1}
                />
            </ChakraProvider>
        )
    };

    return render();
}

const root_elmnt = document.getElementById("root");
if (root_elmnt){
    const root = ReactDOM.createRoot(root_elmnt);
    root.render(<App />);
}