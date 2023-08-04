import { FC } from "react";

interface SeverityMessageProps {
    severity: "error" | "warning";
    children?: React.ReactNode;
}


const SeverityMessage: FC<SeverityMessageProps> = ({severity, children}) => (
    <div className={severity}>{children}</div>
);

export default SeverityMessage;