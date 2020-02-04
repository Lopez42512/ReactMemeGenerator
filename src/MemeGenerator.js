import React, {Component} from "react"
// import Draggable from 'react-draggable';

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            text1: "",
            text2: "",
            number: 0,
            fontSize: "10px"
        }
    }

    handleChange = event => {
        console.log(event.target)
        const {name, value} = event.target
        console.log(name, value)
        this.setState({[name]: value}) 
    }

    render(){
        console.log(this.state.fontSize)
        return(
            <div>
                <form className="textcontainer">
                    <input 
                        placeholder="Enter Text"
                        type="text"
                        onChange={this.handleChange}
                        name="text1"
                        value={this.state.text1}
                    />
                    <input 
                        placeholder="Enter Text"
                        type="text"
                        onChange={this.handleChange}
                        name="text2"
                        value={this.state.text2}        
                    />
                    <button onClick={this.handleClick} name="random" >Random Meme</button>
                    <button onClick={this.handleClick} name="next" >Next Meme</button> 
                    <button onClick={this.handleClick} name="prev" >Previous Meme</button> 
                    <label>
                        Font size
                        <select placeholder="Font Size" name="fontSize" onChange={this.handleChange}>
                            <option value="40px">40px</option>
                            <option value="80px">80px</option>
                            <option value="120px">120px</option>
                            <option value="160px">160px</option>
                        </select>
                    </label>
                    
                </form>
                <div style={{fontSize: this.state.fontSize}} className="imgcontainer">
                    {this.state.text1}
                    {this.state.text2}
                </div>
            </div>
        )
    }
}



export default MemeGenerator