import React, {Component} from 'react'

class User extends Component{
 
    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
            })
        })
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>);
    }
}
export default User;
