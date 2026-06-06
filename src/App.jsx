import {Component} from 'react' 

import './App.css'

class App extends Component{
  state = {count:0,timerCount:1}

  componentDidMount(){
    this.timerId = setInterval(()=> {
      const {timerCount} = this.state
      if(timerCount == 4){
        this.setState({timerCount:1})
      }else{
      this.setState(prevState => ({
        timerCount:prevState.timerCount+1
      }))}
    },100)}
   
    componentWillUnmount(){
      clearInterval(this.timerId)
    }

  onclickIncreaseCount = () => this.setState(prevState=> ({count:prevState.count+1}))

  onclickDecreaseCount = () => this.setState(prevState=> ({count:prevState.count-1}))

  render(){
    const {count,timerCount} = this.state
    let stylePara = null
    let styleHeading = null
    switch(timerCount){
      case 1:
        stylePara="para-red"
        styleHeading="heading-red"
        break

      case 2:
        stylePara="para-blue"
        styleHeading="heading-blue"
        break

      case 3:
        stylePara="para-orange"
        styleHeading="heading-orange"
        break
      case 4:
        stylePara="para-white"
        styleHeading="heading-white"
        break
      
      default:
        null
      
      
    }
    return (
    <div className="main-container">
      <div className="counter-container">
      <h1>Hello<span className="comma">,</span> Every<span className={styleHeading}>ONE</span></h1>
      <p className={stylePara}>{count}</p>
      <div className="buttons-container">
      <button className="button-ele" onClick={this.onclickDecreaseCount}>Decrease</button>
      <button className="button-ele" onClick={this.onclickIncreaseCount}>Increase</button>
      </div>
      </div>
    </div>
  )}

}

export default App