import * as React from "react";

interface Props {
    width: number;
    height: number;
}

const RedRectangle: React.FunctionComponent<Props> = (props: Props) => {
    return <div>{props.height} and {props.width}</div>;
};

export default RedRectangle;