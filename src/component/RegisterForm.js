import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {

    const inputs = [{
        label: "Name",
        type: "text",
        name: "fname",
        required: true,
        placeholder: "John",
    },
    {
        label: "Email",
        type: "email",
        name: "email",
        required: true,
        placeholder: "John",
    },
    {
        label: "Password",
        type: "password",
        name: "confirmPassword",
        required: true,
        placeholder: "*******",
    },
    {
        label: "Confirm Password",
        type: "password",
        name: "password",
        required: true,
        placeholder: "*******",
    }]

    return (
        <Form>
            {inputs.map((item, i) => (
                <CustomInput key={i} {...item} />
            ))}

            <div className="d-grid">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
            <div className="text-end mt-4">
                Already a Member? <Link to='/'>Login</Link> Now
            </div>
        </Form>
    )
}
