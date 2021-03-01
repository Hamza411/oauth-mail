import React, { Component } from 'react';
import { sendmessage } from '../../actions';
import { connect } from 'react-redux';
import MailForm from './MailForm';

class MailCreate extends Component {

    onSubmit = (formValues) => {
        this.props.sendmessage(formValues)
    }

    render() {
        return (
            <div>
                <h3>Send Mail</h3>
                <MailForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}
export default connect(null, { sendmessage })(MailCreate);