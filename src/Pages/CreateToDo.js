import { React, useState } from 'react'
import { Button, Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';

export default function CreateToDo() {
    const [items, setItems] = useState([
        "Mandi pagi", "Gosok Gigi", "Cuci Muka"
    ]);
    const [inputItems, setInputItems] = useState("");
    const [currentIndex, setCurrentIndex] = useState(-1);

    const changeValue = (e) => {
        setInputItems(e.target.value);
    }

    const submitItem = () => {
        let newItems = items;

        if (currentIndex === -1) {
            newItems = [...items, inputItems];
        } else {
            newItems[currentIndex] = inputItems;
        }

        setItems(newItems);
        setInputItems("");
        setCurrentIndex(-1);
    }

    const editItem = (e) => {
        let index = parseInt(e.target.value);
        let editItem = items[index];
        setInputItems(editItem);
        setCurrentIndex(e.target.value);
    }

    const deleteItem = (e) => {
        let index = parseInt(e.target.value);
        let deleteItem = items[index];
        let newItems = []

        items.filter((element) => {
            if (element !== deleteItem) {
                return newItems.push(element);
            } else {
                return newItems;
            }
        })
        setItems(newItems)
    }

    return (
        <>
            <Container className='mt-5'>
                <Card bg="dark" text='white' className='py-5'>
                    <Card.Body>
                        <Card.Title className='text-center'>Create todo</Card.Title>
                        <Container className='px-5 pt-3'>
                            <div className="input mb-5">
                                <Row>
                                    <Col>
                                        <Form.Control type="text" className='px-3 py-2' placeholder='testing' value={inputItems} onChange={changeValue} />
                                    </Col>
                                    <Col lg={2}>
                                        <Button variant="light" className='px-3 py-2' onClick={submitItem}>Add</Button>
                                    </Col>
                                </Row>
                            </div>

                            <div className="todo">
                                <Card>
                                    <ListGroup variant="flush" className='px-2'>
                                        {
                                            items.map((item, index) => {
                                                return (
                                                    <ListGroup.Item className='d-flex justify-content-between' key={index}>
                                                        <p className='my-auto'>{item}</p>
                                                        <div className="btn-action d-flex gap-2">
                                                            <Button variant="warning" value={index} onClick={editItem}>Edit</Button>
                                                            <Button variant="danger" value={index} onClick={deleteItem}>Delete</Button>
                                                        </div>
                                                    </ListGroup.Item>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </Card>
                            </div>
                        </Container>


                    </Card.Body>
                </Card>
            </Container >
        </>
    )
}
