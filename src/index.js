import React from 'react';
import ReactDom from 'react-dom';
import Container from './components/Container'
import { Button } from 'react-bulma-components/full'

const App = ()=>{
    return(
        <Container variant="pink">
            <Button>Bulma Component</Button>
            <Button color='primary'>Bulma Component</Button>
            <button className='button is-danger'>Bulma Component</button>
        </Container>
    )
};
ReactDom.render(<App/>,document.getElementById('root'));