import './App.css';
import Todolist from './Todolist.js'
import { Heading, Container } from '@chakra-ui/react'


function App() {
  return (
    <Container>
    <div className="App">
      <header className="App-header">
        {/* <p>ToDo-List</p> */}
        <Heading as='h1' size='4xl' noOfLines={1}>
          ToDo-Liste
        </Heading>
      </header>
      <main>
        <Todolist />
      </main>
    </div>
    </Container>
  );
}

export default App;
