import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts=()=>{
    
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json =>dispatch({
            type:FETCH_POSTS,
            payload:json
        }) )
    }
        
    
}

export const createPosts=(postData)=>dispatch =>{
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify(postData),
        headers:{"Content-type": "application/json; charset=UTF-8"}})
    .then(response => response.json())
    .then(json => dispatch({
        type:NEW_POST,
        payload:json
    }))

}