import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";


export default function ListTodo(props) {
    return (
        <Card>
            <ListGroup variant="flush" className='px-2'>
                {
                    props.items.map((item, index) => {
                        return (
                            <ListGroup.Item className="d-flex justify-content-between" key={index}>
                                <p className={`my-auto ${item.isComplete ? "done" : ""}`}>{item.name}</p>
                                <div className="btn-action d-flex gap-2">
                                    {item.isComplete ?
                                        (<Button variant="danger" value={index} onClick={(e) => props.deleteItem(e)} size={props.matches ? "sm" : "md"}><FaTrash /></Button>)
                                        :
                                        (<>
                                            <Button variant="success" value={index} onClick={props.doneItem} size={props.matches ? "sm" : "md"} ><FaCheck /></Button>
                                            <Button variant="warning" value={index} onClick={props.editItem} size={props.matches ? "sm" : "md"} ><FaEdit /></Button>
                                            <Button variant="danger" value={index} onClick={(e) => props.deleteItem(e)} size={props.matches ? "sm" : "md"}><FaTrash /></Button>
                                        </>)}

                                </div>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </Card>
    )
}
