import { React, useState, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap';
import FormInput from '../Components/FormInput';
import ListTodo from '../Components/ListTodo';

export default function CreateToDo() {
    const [items, setItems] = useState([
        { name: "Mandi pagi", isComplete: false },
        { name: "Gosok Gigi", isComplete: false },
        { name: "Cuci Muka", isComplete: false }
    ]);
    const [inputItems, setInputItems] = useState("");
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [isEdit, setIsEdit] = useState(false);

    const [matches, setMatches] = useState("")

    useEffect(() => {
        window
            .matchMedia("(max-width: 767px)")
            .addEventListener('change', e => {
                setMatches(e.matches)
                console.log(e.matches)
            });
    }, []);


    const changeValue = (e) => {
        setInputItems(e.target.value);
    }

    const submitItem = () => {
        let newItems = items;
        let checkInput = inputItems.trim();
        let todo = { name: checkInput, isCompleted: false }

        if (currentIndex === -1 && checkInput !== "") {
            newItems = [...items, todo];
        } else {
            newItems[currentIndex] = todo;
        }

        setItems(newItems);
        setInputItems("");
        setCurrentIndex(-1);
        setIsEdit(false);
    }

    const editItem = (e) => {
        let index = parseInt(e.currentTarget.value);
        let editItem = items[index].name;
        setInputItems(editItem);
        setCurrentIndex(e.target.value);
        setIsEdit(true);
    }

    const doneItem = (e) => {
        let index = parseInt(e.currentTarget.value);
        let doneItem = items[index];
        let todo = { ...doneItem, isComplete: !doneItem.isComplete }

        const newArr = items.map(element => {
            if (element.name === doneItem.name) {
                return { ...element, isComplete: !doneItem.isComplete };
            }

            return element;
        });

        setItems(newArr);
        // console.log(items);
    }

    const deleteItem = (e) => {
        let index = parseInt(e.currentTarget.value);
        let deleteItem = items[index];
        let newItems = []

        items.filter((element) => {
            if (element !== deleteItem) {
                return newItems.push(element);
            } else {
                return newItems;
            }
        })
        setItems(newItems);
        setInputItems("");
        setCurrentIndex(-1);
        setIsEdit(false);
    }

    return (
        <>
            <Container className='my-5'>
                <Card bg="dark" text='white' className='py-5'>
                    <Card.Body>
                        <Card.Title className='text-center'>Create todo</Card.Title>
                        <Container className='px-5 pt-3'>
                            <FormInput
                                inputItems={inputItems}
                                changeValue={changeValue}
                                matches={matches}
                                submitItem={submitItem}
                                isEdit={isEdit} />

                            <ListTodo
                                items={items}
                                editItem={editItem}
                                matches={matches}
                                deleteItem={deleteItem}
                                doneItem={doneItem} />
                        </Container>
                    </Card.Body>
                </Card>
            </Container >
        </>
    )
}
