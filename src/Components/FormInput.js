import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export default function FormInput(props) {
    return (
        <div className="mb-5">
            <Row>
                <Col className="my-2">
                    <Form.Control type="text" className='px-3 py-2' placeholder='input here...' value={props.inputItems} onChange={props.changeValue} />
                </Col>
                <Col md={3} className="my-2" align="center">
                    <Button size={props.matches ? "sm" : "md"} variant="light" className='px-3 py-2' onClick={props.submitItem} style={props.matches ? { width: '100%' } : { width: '90%' }}>
                        {props.isEdit ? 'Update' : 'Add'}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
