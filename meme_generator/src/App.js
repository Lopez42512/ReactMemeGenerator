import React, {Component} from "react"

class App extends Component {

    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            imgUrl: "https://i.imgflip.com/345v97.jpg",
            memeHolder: []
        }
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

    render(){
        return(
            <div>
                <img src={this.state.imgUrl} />
            </div>
        )
    }
        
    
}
export default App