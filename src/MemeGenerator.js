import React, {Component} from "react"
import Draggable from 'react-draggable';

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            text1: "",
            text2: "",
            number: 0,
            imgUrl: "https://i.imgflip.com/30b1gx.jpg",
            fontSize: "36px",
            memeHolder: []
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        console.log(name, value)
        this.setState({[name]: value}) 
    }

    handleClick = event => {
        event.preventDefault()
        const eventName = event.target.name

        if(eventName === "next"){
            this.setState({number: this.state.number+= 1})
        } else if(eventName === "prev" && this.state.number > 0){
            this.setState({number: this.state.number-= 1})
        }
        console.log(this.state.number)

        const nextMeme = this.state.memeHolder[this.state.number].url
        const randNum = Math.floor(Math.random() * this.state.memeHolder.length)
        const randMeme = this.state.memeHolder[randNum].url

        eventName === "random" ? this.setState({imgUrl: randMeme, text1: "", text2: ""}) : this.setState({imgUrl: nextMeme, text1: "", text2: ""})

    }
    

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            console.log(response.data.memes)
            this.setState({
                memeHolder: response.data.memes
            })
        })
    }

    render(){
        console.log(this.state.memeHolder[3])
        let fontOption= []
        for(var i = 0; i <= 100; i+= 4){
            fontOption.push(i)
        }
        const selectNumber = fontOption.map(number => {return(<option key={number} value={number+"px"}>{number}px</option>)})
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
                        <select className="select" placeholder="Font Size" name="fontSize" onChange={this.handleChange}>
                            <option value="">--Choose a Font-Size--</option>
                            {selectNumber}
                        </select>
                    </label>
                    
                </form>
                <div style={{fontSize: this.state.fontSize}} className="imgcontainer">
                    <img src={this.state.imgUrl} alt="problem"></img>
                    <Draggable>
                        <h2>
                            {this.state.text1}
                        </h2>
                    </Draggable>
                    <Draggable>
                        <h2 style={{top:"50%"}}>
                            {this.state.text2}
                        </h2>
                    </Draggable>
                </div>
            </div>
        )
    }
}



export default MemeGenerator