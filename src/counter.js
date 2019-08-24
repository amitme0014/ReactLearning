import React from 'react';

class counter extends React.Component{

//Ab ham state ko initialize karenge constructor k through
//Ham state ka utilization tab karte hain, jab hamein ya toh state initialize karna rahta hai ya koi function bind karna rahta hai



//props ko ham modify nai kar sakte, balki state ko ham modify kar sakte
//state ko modify karne k liye, ham arrow function ka 


constructor(props){
    super(props);  //super keyword ka use karna zaruri agar ye ai karenge toh, this ka use karte samay undefined kar k ayega
    this.state = {count : 1};
    this.updateMeCall = this.updateMeCall.bind(this);
}

//hamne constructor mein state initialize kiya, ab ham chahte hain ki count ki value set karein
//chaliye use karte arrow function


updateMe = () => {
    this.setState((state) => (
        
           {count: state.count + 1}
        
    ))

}

updateMeCall() {
    this.updateMe();
}

    render(){
        return(
            <div className="counter">
                <h3>Counterr: {this.state.count}</h3>
                <button onClick={this.updateMeCall}>counterButton</button>
            </div>
        );
    }
}

export default counter;
