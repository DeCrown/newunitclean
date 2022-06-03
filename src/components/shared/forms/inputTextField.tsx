import React, {Component} from 'react';
import INPUT_TEXT_FIELD from "./primitives/INPUT_TEXT_FIELD";
import styled from "styled-components";
import {ErrorMessage} from "components/shared/forms/inputText";

export const DefaultInputTextFieldStyle = styled.div``;

interface InputFieldProps {
    placeholder?: string;
    setObj?: (obj: any) => void;
};

interface InputFieldState {
    value: string;
    error: boolean;
    active: boolean;
    obj: any;
    errorText: string;
};

export class InputTextField extends Component<InputFieldProps, InputFieldState> {
    constructor(props: InputFieldProps) {
        super(props);
        this.state = {value: '', error: false, active: false, obj: this, errorText: ''};
        if (this.props.setObj) {
            this.props.setObj(this.state);
        }
    }

    componentDidUpdate(prevProps: Readonly<InputFieldProps>, prevState: Readonly<InputFieldState>, snapshot?: any) {
        if (this.props.setObj) {
            this.props.setObj(this.state);
        }
    }

    check = (value: string) => {
        return false;
    }

    checkError = () => {
        let val = this.check(this.state.value);
        this.setState({error: val});
        return val
    }

    onInput = (event?: any) => {
        this.setState({value: event.target.value});
    }

    onFocus = (active: boolean) => {
        this.setState({active: active});
        if (active) {
            this.setState({error: false});
        }
        else {
            this.checkError();
        }
    }

    clear = () => {
        this.setState({value: ''})
    }

    setError = (errorText?: string) => {
        this.setState({error: true, errorText: errorText ? errorText : this.state.errorText});
    }

    render() {
        return (
            <DefaultInputTextFieldStyle>
                <INPUT_TEXT_FIELD inputFieldState={this.state}
                            inputFieldProps={this.props}
                            onFocus={this.onFocus}
                            onInput={this.onInput} />
                {
                    this.state.error ?
                        <ErrorMessage>{this.state.errorText}</ErrorMessage>
                        : null
                }
            </DefaultInputTextFieldStyle>
        );
    }
}

export default InputTextField;