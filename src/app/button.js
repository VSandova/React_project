import React, {Component} from 'react'

class Button extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    //         // this.btnClick = this.btnClick.bind(this)
    // }
    
    // btnClick () {
    //     this.setState(prevState => ({
    //         count: prevState.count + 1
    //     }))}
    render() {
        return(
            <div>
                <button onClick = {this.props.click}>{this.props.text}</button>
                <p>Clicked {this.props.count}</p>
            </div>)
    }
}
export default Button;