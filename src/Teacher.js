import React from 'react';
//import ReactDom from 'react-dom';
import index from './index'


//function ek component se doosre component pe kaam nai karta

function Student(props){    //Component jis b naam ka create hoga uska , first letter capital hona
    return(
        <h2>Student Name: {props.name}</h2>
    );
    }

class Teacher extends React.Component{
    render(){
        return(
            //yaha parameter ko ham this se access kar sakte, ham iske andar us function ko b call kar sakte
            
            <div>
            <h2>Teacher Name: {this.props.name}</h2>    
            
            <Student name='Ajayyy' />
            </div>
        );
    }
       
}

export default Teacher;