import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    function movePage(params) {
        navigate(`/${params}`)
    }

    return (
        <>
            <Container className='mt-5 text-center'>
                <Card bg="dark" text='white' className='py-5'>
                    <Card.Body>
                        <Card.Title>Todo List</Card.Title>
                        <Card.Text>
                            Make todo list with react hook
                        </Card.Text>
                        <Button variant="light" onClick={function () {
                            movePage("todo");
                        }}>Start Here!</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
