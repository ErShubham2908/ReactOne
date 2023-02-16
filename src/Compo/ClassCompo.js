import { Component } from "react";
import './Style.css'

export default class ClassCompo extends Component{
    render(){
        return(
           <div className="item_head">
                <h1>This is created using Class Component</h1>
                <p>This is done by using External CSS</p>
                <p>This is done by using internal CSS</p>
           </div>
        )
    }
}