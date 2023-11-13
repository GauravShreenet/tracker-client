import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput';
import { Link } from 'react-router-dom';

export const LoginForm = () => {

    const inputs = [{
        label: "Email",
        type: "email",
        name: "email",
        required: true,
        placeholder: "John@email.com",
    },
    {
        label: "Password",
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
                Are you a new Member? <Link to='/signup'>Register</Link> Now
            </div>
        </Form>
    )
}
