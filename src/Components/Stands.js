import React from 'react'; 
import "../Styles/AboutUs/stands.css"; 
import Block from '../Components/Block'; 
export default class Stands extends React.Component{
    render(){
        return(
            <div className="stands">
<Block name="الكل"/>
<Block name="الحقائب"/>
<Block name="التطريز الفلسطيني"/>
<Block name="الأسوار"/>
            </div>
        ); 
    }
}