import * as React from "react";

type Status = "pending" | "done";

interface SidePanelState {
    status: Status;
    greeting: string;
    uiState: {
        file: File;
    }
}

export interface SidePanelProps {
    width: number;
    height: number;
    className?: string;
    // setColor: (color: string) => void;
}

export default class SidePanel extends React.Component<SidePanelProps, SidePanelState> {
    constructor(props: SidePanelProps) {
        super(props);

        this.state = {
            status: "pending",
            greeting: "Hello!",
            uiState: {
                file: null
            }
        };

        this.changeGreeting = this.changeGreeting.bind(this);
    }

    changeGreeting() {
        this.setState({ greeting: "Sup bitch." });
    }

    render() {
        return (
            <div
                onClick={this.changeGreeting}
                className={this.props.className || ""}
            >
                {this.state.greeting}&nbsp;
                Your parameters are {this.props.height} and {this.props.width}.
            </div>
        );
    }
}