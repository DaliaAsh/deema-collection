import React from 'react'; 
import "../Styles/AboutUs/Block.css"; 
export default class Block extends React.Component{
    render(){
        return(
            <div className="block">
            {this.props.name}
            </div>
        ); 
    }
}