import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export const BudgetForm = () => {
    return (
        <Form className='border p-5 rounded-4 shadow-lg mt-4'>
            <Row className='g-2'>
                <Col className="col-md-5">
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control type="text" placeholder="Description" />
                    </Form.Group>
                </Col>
                <Col className="col-md-2">
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Type" />
                    </Form.Group>
                </Col>
                <Col className="col-md-2">
                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="number" placeholder="Amount" />
                    </Form.Group>
                </Col>
                <Col className="col-md-3">
                    <Col className="d-grid">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Col>
            </Row>

        </Form>
    )
}
