import React from 'react';
import './App.css';
import Student from './Student';
import Counter from './counter';

//ye ek component bana rae jo hamko print karwana hai

const pageTitle = 'Hello Amit Var const'

//defining a function and calling in jsx

function evaluate(a,b)  {
    if(a>b){
    return <span className='subtract'>{a-b}</span>
                            }
    else{
        return <span className='addition'>{a+b}</span>
    }
}

//props doosri class nai utha paata 

const student = {
    name: 'sagarzzz',
    course: {name: 'Frontend Developer', duration: '3 month'},
    fee: '234'
}



//Using clickMe event
const clickMe = () => alert('hello');




class App extends React.Component{
    render(){
        //line no. 39 will print from the json block
        return(
            <div className="App">
                <h1>Hello World I m using React!!!</h1>
                <h2>Evaluate two numbers {evaluate(20,15)}</h2>
                <p>{pageTitle}</p>
                <Student student={student} />  
                <button onClick={clickMe}>Click Me</button>
                <Counter />
            </div>
        )
    }
}
export default App;