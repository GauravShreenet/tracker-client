import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'

export const BudgetTable = () => {
  return (
    <>
        <Row className='my-5'>
            <Col>
                <h3>Income</h3>
                <Table className='table-striped-column table-hover'>
                    <tbody>
                        <tr>
                            <td>
                                Work
                            </td>
                            <td>
                                cash
                            </td>
                            <td>
                                $450
                            </td>
                            <td className='text-end'>
                                <Button variant='success'>
                                    <i class="fa-sharp fa-solid fa-angle-right fa-beat-fade"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Work
                            </td>
                            <td>
                                cash
                            </td>
                            <td>
                                $450
                            </td>
                            <td className='text-end'>
                                <Button variant='success'>
                                    <i class="fa-sharp fa-solid fa-angle-right fa-beat-fade"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Work
                            </td>
                            <td>
                                cash
                            </td>
                            <td>
                                $450
                            </td>
                            <td className='text-end'>
                                <Button variant='success'>
                                    <i class="fa-sharp fa-solid fa-angle-right fa-beat-fade"></i>
                                </Button>
                            </td>
                        </tr>
                        
                    </tbody>
                </Table>
            </Col>
            <Col>
            <h3>Expense</h3>
                <Table className='table-striped-column table-hover'>
                    <tbody>
                        <tr>
                            <td>
                                Work
                            </td>
                            <td>
                                cash
                            </td>
                            <td>
                                $450
                            </td>
                            <td className='text-end'>
                                <Button variant='warning'>
                                    <i class="fa-sharp fa-solid fa-angle-left fa-beat-fade"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Work
                            </td>
                            <td>
                                cash
                            </td>
                            <td>
                                $450
                            </td>
                            <td className='text-end'>
                                <Button variant='warning'>
                                    <i class="fa-sharp fa-solid fa-angle-left fa-beat-fade"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Work
                            </td>
                            <td>
                                cash
                            </td>
                            <td>
                                $450
                            </td>
                            <td className='text-end'>
                                <Button variant='warning'>
                                    <i class="fa-sharp fa-solid fa-angle-left fa-beat-fade"></i>
                                </Button>
                            </td>
                        </tr>
                        
                    </tbody>
                </Table>
            </Col>
        </Row>
    </>
  )
}
