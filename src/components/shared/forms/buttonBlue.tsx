import React, {Component} from 'react';
import {StyledComponent} from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

interface ButtonBlueProps {
    children: any;
    styled?: StyledComponent<any, any>;
    func?: () => void;
    setObj?: (obj: any) => void;
};

interface ButtonBlueState {
    currentStyle: StyledComponent<any, any>;
    currentChildren: any;
    timeOut: number
};

export class ButtonBlue extends Component<ButtonBlueProps, ButtonBlueState> {
    defaultStyle:any = DIV_BUTTON_BLUE_STYLE;
    defaultChildren:any = '';

    constructor(props: ButtonBlueProps) {
        super(props);
        this.defaultChildren = this.props.children;
        if (this.props.styled) {
            this.defaultStyle = this.props.styled
        }

        this.state = {
            currentStyle: this.defaultStyle,
            currentChildren: this.defaultChildren,
            timeOut: 0
        }

        if (this.props.setObj) {
            this.props.setObj(this);
        }
    }

    switchTimeOut = (func: () => void, timeOut: number | undefined) => {
        clearTimeout(this.state.timeOut);
        if (timeOut) {
            this.setState({timeOut: setTimeout(func, timeOut)});
        }
    }

    Animate = (props: {Styled?: StyledComponent<any, any>, Children?: any, timeOut?: number}) => {
        this.setState({
            currentStyle: props.Styled ? props.Styled : this.state.currentStyle,
            currentChildren: props.Children ? props.Children : this.state.currentChildren
        });
        this.switchTimeOut(() => {
            this.setState({
                currentStyle: this.defaultStyle,
                currentChildren: this.defaultChildren
            });
        }, props.timeOut);
    }

    render() {
        return (
            <this.state.currentStyle onClick={ this.props.func }>
                { this.state.currentChildren }
            </this.state.currentStyle>
        );
    }
}

export default ButtonBlue;