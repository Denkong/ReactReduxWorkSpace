import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPosts} from '../actions/postAction';

class Postsform extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }
    }

   onChange=(e)=>{
    const name=e.target.name
    this.setState({ [name]:  e.target.value});
    
   }
   onSubmit=(e)=>{
    e.preventDefault();
    
    const post={
        title:this.state.title,
        body:this.state.body
    }

    this.props.createPosts(post)
    
   }


    render() { 
        return (
            <div>
                <h1>AddPosts</h1>
               <form onSubmit={this.onSubmit}>
                   <div>                   
                    <label>Title</label><br/>
                    <input type="text" name="title" onChange={this.onChange}></input>
                   </div>
                   <div>                   
                    <label>body</label><br/>
                    <textarea type="text" name="body" onChange={this.onChange}></textarea>
                   </div>
                   <button type="submit">submit</button>
               </form>
            </div>
        );
    }
}
 
Postsform.PropTypes={
    createPosts:PropTypes.func.isRequired
}

export default connect(null,{createPosts})(Postsform);