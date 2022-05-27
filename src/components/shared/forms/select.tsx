import React, {Component} from 'react';
import SELECT from "components/shared/forms/primitives/SELECT";
import {selectOption} from "src/utils/types";

interface SelectProps {
    css?: any;
    setObj?: (obj: any) => void;
    defaultOption?: selectOption;
    options: selectOption[];
};

interface SelectState {
    value: string | undefined;
    error: boolean;
    active: boolean;
    errorAnimation: boolean;
    obj: any;
};

export class Select extends Component<SelectProps, SelectState> {
    constructor(props: SelectProps) {
        super(props);
        this.state = {value: props.defaultOption?.value, error: false, errorAnimation: false, active: false, obj: this};
        if (this.props.setObj) {
            this.props.setObj(this.state);
        }
    }

    componentDidUpdate(prevProps: Readonly<SelectProps>, prevState: Readonly<SelectState>, snapshot?: any) {
        if (this.props.setObj) {
            this.props.setObj(this.state);
        }
    }

    check = (value: string | undefined) => {
        if (value) {
            return false;
        }
        return true;
    }

    checkError = () => {
        let val = this.check(this.state.value);
        this.setState({error: val});
        if (val) {
            this.setState({errorAnimation: true});
            setTimeout(() => {
                this.setState({errorAnimation: false});
            }, 500);
        }
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
        this.setState({value: undefined})
    }

    render() {
        return (
            <div>
                <SELECT selectState={this.state}
                        selectProps={this.props}
                        onFocus={this.onFocus}
                        onInput={this.onInput} />
            </div>
        );
    }
}