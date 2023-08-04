import { FC } from "react";

interface LoadingTextProps {
    isLoading: boolean;
}

const LoadingText: FC<LoadingTextProps> = ({ isLoading }) => (
    <div>{isLoading ? <span>Loading...</span> : <h2>Fertig geladen</h2>}</div>
);

export default LoadingText;