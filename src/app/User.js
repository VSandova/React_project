import React, {Component} from 'react'
import fetchItems from '../app/redux/action/actionItem.js'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'

class User extends Component{
 
    // constructor(props){
    //     super(props);
    //     //this.TextName = React.createRef();
    //     this.state = {
    //         on:false,
    //         items: [],
    //         currentUser: {
    //             id: '',
    //             name: '',
    //             username: '',
    //             email: '',
    //         }
    //     }
    // }
    componentDidMount() {
         this.props.fetchItems();
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        // .then(json => {
        //     this.setState({
        //         items: json,
        //     })
        // })
    }

    delete(index){
        //const users = this.state.items;
        //users.splice(index, 1);
        //this.setState({items:users});
    };

    edit(index){
        //this.setState({on:true})
        //const user = this.state.items[index];
        //this.setState({currentUser: user});
    };
    
    change(event, fieldName) {
        const currentUserData = this.state.currentUser;
        if(event.target.checked){
            currentUserData[fieldName] = event.target.value;
        }
        this.setState({currentUser: currentUserData})
    }

     submit = (event) => {
        const filteredUsers = this.state.items.filter
        (user => user.id !== this.state.currentUser.id);
        const newUsers = [...filteredUsers, this.state.currentUser]
        this.setState({items: newUsers,
            on: false,
            currentUser: { id: '', name: '', username: '', email: ''}});
       // this.setState({on: false});
        //this.setState({currentUser: { id: '', name: '', username: '', email: ''}});
     }


    render() {
        return(
            <div>
                <table>
                    {this.props.items.map((item, index) => (
                        <tr>
                        <td key={item.id}>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                        </tr>
                    ))}
                </table>
                {/*this.state.on && (
                  <div>
                    <div>
                      <label>ID: </label>
                      <input type="text" name='id'value={this.state.currentUser.id} 
                      checked={this.state.currentUser.id} 
                      onChange={event => this.change.bind(this, event, 'id')()}></input>
                    </div>
                   <div>
                     <label>Name: </label>
                     <input type="text" name='name' 
                     value={this.state.currentUser.name} 
                     checked={this.state.currentUser.name} onChange={event => this.change.bind(this, event, 'name')()}></input>
                     </div>
                  <div>
                    <label>Username: </label>
                    <input type="text"  value={this.state.currentUser.username} checked={this.state.currentUser.username} onChange={event => this.change.bind(this, event, 'username')()}></input>
                    </div>
                 <div>
                   <label>Email: </label>
                   <input type="text"  value={this.state.currentUser.email} checked={this.state.currentUser.email} onChange={event => this.change.bind(this, event, 'email')()}></input>
                </div>
                <button onClick={this.submit.bind(this)}>
                    Submit
                </button>
            </div>
                )*/}
            </div>
            )}
        }
        
         const mapStateToProps = state => {
            return {
              items: state.items
            }
          }
          
        const  mapDispatchToProps = dispatch => {
          return bindActionCreators({
            fetchItems: fetchItems
          }, dispatch)
        }
      
export default connect(mapStateToProps, mapDispatchToProps)(User);
