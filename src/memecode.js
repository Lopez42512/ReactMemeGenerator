// class MemeGenerator extends Component {

//     constructor(){
//         super()
//         this.state = {
//             topText: "",
//             bottomText: "",
//             imgUrl: "https://i.imgflip.com/345v97.jpg",
//             memeHolder: [],
//             number: 0
//         }
//     }

//     componentDidMount(){
//         fetch("https://api.imgflip.com/get_memes")
//         .then(response => response.json())
//         .then(response => {
//             console.log(response.data.memes[0].url)
//             const {memes} = response.data
//             this.setState({
//                 memeHolder: memes
//             })
//         })
//     }

    

//     eventHandle = (event) => {
//         console.log("hello")
//         const {name, value} = event.target
//         console.log([name])
//         this.setState({
//             [name]: value
//         })
//     }

//     submitHandle = (event) => {
//         event.preventDefault()
//         const eventName = event.target.name
        
//         if (eventName === "next"){
//             this.setState({number: this.state.number + 1})
//         } else if (eventName === "prev") {
//             this.setState({number: this.state.number - 1})
//         }
    
//         const randNum = Math.floor(Math.random() * this.state.memeHolder.length)
//         const randMeme = this.state.memeHolder[randNum].url
        
//         eventName === "random" ? this.setState({imgUrl: randMeme, topText: "", bottomText: ""}) : this.setState({imgUrl: this.state.memeHolder[this.state.number].url, topText: "", bottomText: "" }) 
//         console.log(this.state.number)
        

//     }

//     render(){
//         const memeOption = this.state.memeHolder.map(list => {
//             return(
//                     <option key={list.id} value={list.url}>{list.name}</option>
                
//             )
//         })
//         return(
//             <div>
//                 <form className="meme-form">
//                     <input 
//                         type="text"
//                         placeholder="Top Text"
//                         value={this.state.topText}
//                         onChange={this.eventHandle}
//                         name="topText"
//                     />
//                     <input 
//                         type="text"
//                         placeholder="Bottom Text"
//                         value={this.state.bottomText}
//                         onChange={this.eventHandle}
//                         name="bottomText"
//                     />
//                     <button onClick={this.submitHandle} name="random">Random Meme</button>
//                     <button onClick={this.submitHandle} name="next">Next Meme</button>
//                     <button onClick={this.submitHandle} name="prev">Prevous Meme</button>
//                     <label>
//                     Pick your favorite meme:
//                     <select onChange={this.eventHandle} name="imgUrl">
//                         {memeOption}
//                     </select>
//                     </label>
//                 </form>
//                 <div className="meme">
//                     <img src={this.state.imgUrl} alt="problem" />
//                     <Draggable>
//                         <h2 className="top">{this.state.topText}</h2>
//                     </Draggable>
//                     <Draggable>
//                         <h2 className="bottom">{this.state.bottomText}</h2>
//                     </Draggable>
//                 </div>   
//             </div>
//         )
//     }
        
    
// }