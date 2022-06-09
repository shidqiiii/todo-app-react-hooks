import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'

export default function ListTodo(props) {
    return (
        <Card>
            <ListGroup variant="flush" className='px-2'>
                {
                    props.items.map((item, index) => {
                        return (
                            <ListGroup.Item className='d-flex justify-content-between' key={index}>
                                <p className='my-auto'>{item}</p>
                                <div className="btn-action d-flex gap-2">
                                    <Button variant="warning" value={index} onClick={props.editItem} size={props.matches ? "sm" : "md"} >Edit</Button>
                                    <Button variant="danger" value={index} onClick={props.deleteItem} size={props.matches ? "sm" : "md"}>Delete</Button>
                                </div>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </Card>
    )
}
