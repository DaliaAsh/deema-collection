import React from 'react'; 
import "../Styles/Footer/footer.css"; 
export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
<img src={require("../images/logo.jpg")} className="logo"/>
<div className="footer-list">
<ul className="footer-ul">
    <li className="footer-item">صناعة فلسطينية </li>
    <li>تميز</li>
    <li>أناقة</li>
</ul>
</div>
            </div>
        ); 
    }
}