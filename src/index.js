import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//const myfirstelement = <h2>Hello man</h2>

//ReactDOM.render(myfirstelement,document.getElementById('root')); //is line ka matlab ye hai ki 0ham root component ki jagah my first element ko print kara rae
//Par ham abhi print karana chah rae App component ko,jaha pe root element ho.

ReactDOM.render(<App />, document.getElementById('root'));