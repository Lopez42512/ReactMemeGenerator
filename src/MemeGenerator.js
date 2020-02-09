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
            memeHolder: [],
            isTrue: true,
            allMeme: false
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        console.log(event)
        this.setState({[name]: value}) 
    }
    

    handleClick = event => {
        event.preventDefault()
        console.log(event.target.src)
        const eventName = event.target.name

        if(eventName === "next"){
            this.setState({number: this.state.number+= 1})
        } else if(eventName === "prev" && this.state.number > 0){
            this.setState({number: this.state.number-= 1})
        } 
        // console.log(this.state.number)

        const nextMeme = this.state.memeHolder[this.state.number].url
        const randNum = Math.floor(Math.random() * this.state.memeHolder.length)
        const randMeme = this.state.memeHolder[randNum].url

        switch(eventName){
            case "random":
                this.setState({imgUrl: randMeme, text1: "", text2: ""})
                break;
            case "isTrue":
                this.setState({[eventName]: !this.state.isTrue})
                console.log(this.state.isTrue)
                break;
            case "meme":
                this.setState({allMeme: !this.state.allMeme, text1: "", text2: ""})
                break;
            case "newMeme":
                this.setState({imgUrl: event.target.src, allMeme: !this.state.allMeme })
                break;
            default:
                this.setState({imgUrl: nextMeme, text1: "", text2: ""})
        }

        // eventName === "random" ? this.setState({imgUrl: randMeme, text1: "", text2: ""}) : this.setState({imgUrl: nextMeme, text1: "", text2: ""})
        // if (eventName === "isTrue"){
        //     this.setState({[eventName]: !eventName})
        // } 
    }
    

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            // console.log(response.data.memes)
            this.setState({
                memeHolder: response.data.memes
            })
        })
    }

    render(){
        // console.log(this.state.memeHolder[3])
        let fontOption= []
        for(var i = 0; i <= 100; i+= 4){
            fontOption.push(i)
        }
        const selectNumber = fontOption.map(number => {return(<option key={number} value={number+"px"}>{number}px</option>)})
        let color
        this.state.isTrue ? color = "black" : color = "white"
        let changeText
        this.state.isTrue ? changeText = "Change to White" : changeText = "Change to Black"
        let getAllMemes = this.state.memeHolder.map(meme => <img onClick={this.handleClick} name="newMeme" className="allMeme" key={meme.id} src={meme.url} alt="empty" />) 
        let meme
        this.state.allMeme ? meme = <div className="allMemeContainer">{getAllMemes}</div> : meme = <img src={this.state.imgUrl} alt="problem"></img>
        // console.log(this.state.fontSize)
        return(
            <div>
                <div className="textcontainer">
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
                    <button onClick={this.handleClick} name="prev" >Previous Meme</button> 
                    <button onClick={this.handleClick} name="random" >Random Meme</button>
                    <button onClick={this.handleClick} name="next" >Next Meme</button> 
                    <button onClick={this.handleClick} name="meme" >Choose A Meme</button>
                    <button onClick={this.handleClick} name="isTrue">{changeText}</button>
                    <label>
                        <select className="select" placeholder="Font Size" name="fontSize" onChange={this.handleChange}>
                            <option value="">--Choose a Font-Size--</option>
                            {selectNumber}
                        </select>
                    </label>
                    
                </div>
                <div style={{fontSize: this.state.fontSize}} className="imgcontainer">
                    {meme}
                    <Draggable>
                        <h2 style={{color: color}}>
                            {this.state.text1}
                        </h2>
                    </Draggable>
                    <Draggable>
                        <h2 style={{top:"50%", color: color}}>
                            {this.state.text2}
                        </h2>
                    </Draggable>
                </div>
            </div>
        )
    }
}



export default MemeGenerator