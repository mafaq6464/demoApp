import React, { Component } from "react";
import FormInput from "./common/input";
import Joi from 'joi-browser';

class user_data extends Component{

    state = {
        form : { username: "", email: "", password: "", message: "" },
        errors: {}
    };

    schema = {
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(16).required(),
        message: Joi.string().required()
    };

    validate = () => {

        const { error } = Joi.validate(this.state.form, this.schema, { abortEarly: false } );

        if (!error) return null;
        
        const errors = {};

        for ( let item of error.details ) errors[item.path[0]] = item.message;
        
        return errors;

    };

    validateProperty = (name, value) => {
        const obj = { [name] : value };
        const schema = { [name] : this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors });
        if (errors) return;
    }

    handleChange = ({ currentTarget: input }) => {
        const form = {...this.state.form};
        form[input.name] = input.value;

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input.name, input.value);

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        this.setState({ form, errors });
    }

    render(){

        const { username, email, password, message } = this.state.form;
        const { errors } = this.state;

        return(
            <div className="form-wrapper">

                <form onSubmit={this.handleSubmit} style={{ maxWidth: '300px', width: '100%', margin: '0 auto', textAlign: 'left' }}>

                    <FormInput name="username" id="username" label="Username" value={username} onChange={this.handleChange} type="text" error={errors.username} />

                    <br />

                    <FormInput name="email" id="email" label="Email" value={email} onChange={this.handleChange} type="email" error={errors.email} />

                    <br />

                    <FormInput name="password" id="password" label="password" value={password} onChange={this.handleChange} type="password" error={errors.password} />

                    <br />

                    <FormInput name="message" id="message" label="Message" value={message} onChange={this.handleChange} type="text" error={errors.message} />
                    
                    <br />

                    <button disabled={this.validate()} value="Submit">Submit</button>

                </form>
            </div>
        );
    }
}

export default user_data;