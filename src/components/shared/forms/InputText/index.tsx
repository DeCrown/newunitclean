import React, {Component} from 'react';
import _INPUT_TEXT from "../primitives/INPUT_TEXT";

interface InputProps {
    css?: any;
    placeholder?: string;
    type?: string
};

export class InputText extends Component<InputProps, {error: boolean}> {
    constructor(props: InputProps) {
        super(props);
        this.state = {error: false};
    }

    onInput = () => {

    }

    render() {
        return (
            <div>
                <_INPUT_TEXT type={this.props.type} css={this.props.css} placeholder={this.props.placeholder} onInput={this.onInput} error={this.state.error}></_INPUT_TEXT>
            </div>
        );
    }
}

export class InputPhoneNumber extends InputText {
    onInput = (event?: any) => {
        if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}

export class InputEMail extends InputText {
    onInput = (event?: any) => {
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}

export class InputCompany extends InputText {
    onInput = (event?: any) => {
        if (/^$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}

export class InputUR_INN extends InputText {
    onInput = (event?: any) => {
        if (/^[0-9]{10}$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}

export class InputAddress extends InputText {
    onInput = (event?: any) => {
        if (/^$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}

export class InputUR_KPP extends InputText {
    onInput = (event?: any) => {
        if (/^[0-9]{9}$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}

export class InputPromoCode extends InputText {
    onInput = (event?: any) => {
        if (/^[0-9A-z]{10}$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}

export class InputLogin extends InputText {
    onInput = (event?: any) => {
        if (/^.+$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}

export class InputPassword extends InputText {
    constructor(props: InputProps) {
        let props_ = props;
        //props_.type = 'password';
        super(props);
        this.state = {error: false};
    }

    onInput = (event?: any) => {
        if (/^.+$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}

export class InputFIO extends InputText {
    onInput = (event?: any) => {
        if (/^.+$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}


export class InputLoginOrEMail extends InputText {
    onInput = (event?: any) => {
        if (/^.+$/.test(event.target.value)) {
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }
}