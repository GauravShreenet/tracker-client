import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BudgetTable } from '../component/BudgetTable'
import { BudgetForm } from '../component/BudgetForm'

const DashBoard = () => {
  return (
    <Container>
      <Row>
        <Col className='mt-5 text-center'>
          <h1>Budget Expenses Tracker</h1>
        </Col>
      </Row>
      <BudgetForm />
      <hr />
      <BudgetTable />
    </Container>
  )
}

export default DashBoard