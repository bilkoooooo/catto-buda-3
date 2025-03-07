import {ReactNode} from "react";

export const Text = ({children}: { children: ReactNode }) => (
    <div className="text-justify"> {children} </div>
)