import React, {Component} from 'react';
import INPUT_TEXT from "./primitives/INPUT_TEXT";
import styled, {StyledComponent} from "styled-components";

interface InputProps {
    styled?: StyledComponent<any, any>;
    placeholder?: string;
    name?: string;
    setObj?: (obj: any) => void;
    styledContainer?: StyledComponent<any, any>;
};

interface InputState {
    value: string;
    error: boolean;
    errorAnimation: boolean;
    active: boolean;
    obj: any;
};

export class InputText extends Component<InputProps, InputState> {

    defaultStyled = styled.div``;

    constructor(props: InputProps) {
        super(props);
        this.state = {value: '', error: false, errorAnimation: false, active: false, obj: this};
        if (this.props.setObj) {
            this.props.setObj(this.state);
        }
    }

    componentDidUpdate(prevProps: Readonly<InputProps>, prevState: Readonly<InputState>, snapshot?: any) {
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

    getType = () => {
        return 'text'
    }

    clear = () => {
        this.setState({value: ''})
    }

    render() {

        const Styled = this.props.styledContainer ? this.props.styledContainer : this.defaultStyled;

        return (
            <Styled>
                <INPUT_TEXT inputState={this.state}
                            inputProps={this.props}
                            onFocus={this.onFocus}
                            onInput={this.onInput}
                            type={this.getType()} />
            </Styled>
        );
    }
}

export class InputPhoneNumber extends InputText {
    check = (value: string) => {
        if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value) && value.length <= 11) {
            return false
        }
        else {
            return true
        }
    }
}

export class InputEMail extends InputText {
    check = (value: string) => {
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }
}

export class InputCompany extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }
}

export class InputUR_INN extends InputText {
    check = (value: string) => {
        if (/^[0-9]{10}$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }
}

export class InputAddress extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }
}

export class InputUR_KPP extends InputText {
    check = (value: string) => {
        if (/^[0-9]{9}$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }
}

export class InputPromoCode extends InputText {
    check = (value: string) => {
        if (/^[0-9A-z]*$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }
}

export class InputLogin extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }
}

export class InputPassword extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }

    getType = () => {
        return 'password'
    }
}

export class InputDate extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }

    getType = () => {
        if (this.state.value || this.state.active) {
            return 'date'
        }
        else {
            return 'text'
        }
    }
}

export class InputFIO extends InputText {
    check = (value: string) => {
        if (/^[А-я`'\s\.Ёё-]+$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }
}


export class InputLoginOrEMail extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) {
            return false
        }
        else {
            return true
        }
    }
}