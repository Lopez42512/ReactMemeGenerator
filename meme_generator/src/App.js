import React, {Component} from "react"

class App extends Component {

    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            imgUrl: "https://i.imgflip.com/345v97.jpg",
            memeHolder: [],
            number: 0
        }
        this.eventHandle = this.eventHandle.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            console.log(response.data.memes[0].url)
            const {memes} = response.data
            this.setState({
                memeHolder: memes
            })
        })
    }

    eventHandle(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    submitHandle(event){
        event.preventDefault()
        const eventName = event.target.name
        
        if (eventName === "next"){
            this.setState({number: this.state.number + 1})
        } else if (eventName === "prev") {
            this.setState({number: this.state.number - 1})
        }
    
        const randNum = Math.floor(Math.random() * this.state.memeHolder.length)
        const randMeme = this.state.memeHolder[randNum].url
        
        eventName === "random" ? this.setState({imgUrl: randMeme}) : this.setState({imgUrl: this.state.memeHolder[this.state.number].url }) 
        console.log(this.state.number)
        

    }

    render(){
        return(
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.eventHandle}
                        name="topText"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.eventHandle}
                        name="bottomText"
                    />
                    <button onClick={this.submitHandle} name="random">Random Meme</button>
                    <button onClick={this.submitHandle} name="next">Next Meme</button>
                    <button onClick={this.submitHandle} name="prev">Prevous Meme</button>
                </form>
                <div>
                    <img src={this.state.imgUrl} alt="problem" />
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </div>   
            </div>
        )
    }
        
    
}
export default App