import React, { useState } from "react";
import { Input, Button, ButtonGroup, Checkbox, HStack, 
        UnorderedList, ListItem, Box } from '@chakra-ui/react'
import  { FaPlus, FaRegTrashCan } from 'react-icons/fa6'


export default function Todolist() {
    // let tasks = [];
    const [ todos, addTodo ] = useState([]);
    const [ input, setInput ] = useState('');

    const addTask = () => {
        // * Neuen Task der Liste hinzufügen
        const inp = document.getElementById("inp_task");
        if (inp.value.trim() !== "") {
            addTodo( [...todos, {id: Date.now(), task: inp.value, done: false} ] );
            setInput("");
        }
    };

    const toggleDone = (id) => {
        console.log("toggleDone: ", id)
        addTodo(todos.map((elem) => elem.id === id ? { ...elem, done: !elem.done} : elem));
    };
    
    function Todos() {
        /*
         * Liste der Todos generieren
        */
        return (
            
            todos.map((elem) => {
                return (
                    <Box>
                    <ListItem className='todo-entry' key={elem.id}>
                    <div>
                        <Checkbox
                            className={elem.done ? "done" : ""}
                            name={"erledigt-"+elem.id}
                            id={elem.id}
                            isChecked={elem.done}
                            onChange={() => toggleDone(elem.id)}
                            colorScheme="green" //dafuq? works only w/ green? =>https://github.com/chakra-ui/chakra-ui/issues/283#issuecomment-1204690135
                            size='md'
                        >
                        {elem.task}
                        </Checkbox>
                    </div>
                    </ListItem>
                    </Box>
                )
            })
        );
    }
    

    /*
      * Eigentliche App
     */
    return (
        <Box>
        <HStack spacing={3}>
            <Input
                type='text'
                colorScheme="mr.green"
                // size='md'
                htmlSize={50} width='auto'
                variant="outline"
                name="inp_task"
                id="inp_task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Aufgabe eingeben …"
                _placeholder={{color: 'mr.green'}}
                focusBorderColor="mr.green"
            />
            <ButtonGroup>
            <Button 
                colorScheme='green' // funktioniert auch nicht richtig mit eigenen Farben
                variant="outline"
                size="md"
                name="btn_enterTask"
                id="btn_enterTask"
                onClick={addTask}
                leftIcon={<FaPlus />}
            >Hinzufügen</Button>
            <Button 
                onClick={() => addTodo([])}
                size='md'
                colorScheme='red'
                id='btn_delAll'
                leftIcon={<FaRegTrashCan />}
            >
            Alle löschen
            </Button>
            </ButtonGroup>

        </HStack>
        <br />
        <UnorderedList>
            <Todos />
        </UnorderedList>
        </Box>
    );
}
