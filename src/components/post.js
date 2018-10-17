import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction';



class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    //которая вызывается при обновлении объекта props
    componentWillReceiveProps(nextProps){    
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() { 
        const postItems = this.props.posts.map(post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}
 
Posts.propTypes ={
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object
}

const mapStatetoProps=state=>({
    posts:state.postReducer.items,
    newPost:state.postReducer.item
})

/*
const mapDispatchtoProps=(dispatch)=>({
    fetchPosts: () => {
        dispatch(fetchPosts());
      },
})
*/

export default connect(mapStatetoProps,{fetchPosts})(Posts) ;