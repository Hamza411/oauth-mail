import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class MailForm extends Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return <div style={{ fontSize: 12, color: "red" }}>{error}</div>
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="on" />
                {this.renderError(meta)}
                {/* <div style={{ fontSize: 12, color: "red" }}>{meta.error}</div> */}
            </div>
            // <input onChange={formProps.input.onChange}
            //     value={formProps.input.value}
            // />
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="From" component={this.renderInput} label="From" />
                <Field name="To" component={this.renderInput} label="To" />
                <Field name="Subject" component={this.renderInput} label="Subject" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <Link to="/" className="ui button">Back</Link>
                <button className="ui button primary">Send</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.Sender) {
        errors.Sender = "Sender is Required"
    }
    if (!formValues.Reciever) {
        errors.Reciever = "Reciever is Required"
    }
    if (!formValues.Subject) {
        errors.Subject = "Subject is Required"
    }
    if (!formValues.description) {
        errors.description = "Description is required"
    }
    return errors
}

export default reduxForm({
    form: "mailForm",
    validate
})(MailForm);
