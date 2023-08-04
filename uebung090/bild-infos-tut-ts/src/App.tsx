import { useState } from "react";
import "./App.css";
import LoadingText from "./components/LoadingText";
import SeverityMessage from "./components/SeverityMessage";


export default function App() {

    const [imageData, setImageData] = useState<ImageDataT>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    type ImageDataT = {
        id?: string;
        author?: string;
        width?: number;
        height?: number;
        url?: string;
        download_url?: string;
    };


    const fetchImageData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            const response = await fetch("https://picsum.photos/id/237/info");
            const data = await response.json();
            setImageData(data);
        } catch (error) {
            setIsError(true)
        } finally {
            setIsLoading(false);
        };
    };

    return (
        <div className="App">
            <h1>React Tutorial</h1>
            <h2>Time now: {new Date().toISOString()}</h2>
            <LoadingText isLoading={isLoading} />
            {
                isError && (
                    <SeverityMessage severity={"error"}>
                        Es gab einen Fehler während des API Calls
                    </SeverityMessage>
                )
            }
            <img alt="dog" src={imageData.download_url} width={350} />
            <div>Künstler:in: {imageData.author}</div>
            <button onClick={fetchImageData}>Bilddaten laden</button>
        </div>
    );
}
