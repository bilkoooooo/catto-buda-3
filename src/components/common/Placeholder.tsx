export const Placeholder = ({text = 'Placeholder'}: { text?: string }) => <div
    className={"placeholder h-screen w-full flex items-center justify-center border-y border-red-400 "}> {text} </div>;
