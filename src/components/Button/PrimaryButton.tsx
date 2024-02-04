import {PropsWithChildren} from "react";

interface ButtonProps {
    label?: string,
    onClick: () => void,

    [x: string]: any,
}

export default function PrimaryButton(props: PropsWithChildren<ButtonProps>) {
    return (
        <button className="primary-button" {...props} onClick={props.onClick}>{props.children}</button>
    )
}