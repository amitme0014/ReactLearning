import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Teacher from './Teacher';
import Student from './Student';

//const myfirstelement = <h2>Hello man</h2>

//ReactDOM.render(myfirstelement,document.getElementById('root')); //is line ka matlab ye hai ki 0ham root component ki jagah my first element ko print kara rae
//Par ham abhi print karana chah rae App component ko,jaha pe root element ho.

//lets create a function component and try to use it, ham jaante hain kim function componenent state manage nai karte
//function create kar k usmein props ko pass karte hain as an argument, aur fir react element ko return karate hain.

//Hma neeche banaye gaye function ko call kar lenge by paasing argument jisme ki name variable hoga, aur fir ye index page meinb render ho jaaana


/*
function Student(props){    //Component jis b naam ka create hoga uska , first letter capital hona
return(
    <h2>Student Name: {props.name}</h2>
);
}
*/

//Ab ham log upar diye gye function ko element mein store kara lenge fir, use react Dom mein call kara lenege

//const element = <Student name='sagar' />;
const element = <Teacher name='amit' />


//ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));