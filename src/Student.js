import React from 'react';


const Fee = (props) => (
    <div className='fee'>
    <h4>{props.fee}</h4>
    </div>
    );

/*
function Course(props){
    return(
        <div className='course'> 
        <h3>Course: {props.course.name}</h3>
        </div>
    )
}
*/


class Student extends React.Component {
    render() {
        return (
            <div className="student-info">
            <h2>  Name: {this.props.student.name} </h2> 
            <h2>  Duration: {this.props.student.course.duration} </h2> 
            <h2>  Course Name: {this.props.student.course.name}</h2>
            <Fee fee={this.props.student.fee} />
            </div>     
              )
               }
}

export default Student;