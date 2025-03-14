import {ReactNode} from "react";

export const Text = ({children}: { children: ReactNode }) => (
    <div className="text-justify pr-4"> {children} </div>
)