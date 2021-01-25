import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostsComponent = React.memo( () => {
    const [posts, setPosts] = useState([]);    

    console.log( 'Posts : ', posts );
    
    useEffect(() => {
        if( !posts.length ) {
            axios.get( `https://jsonplaceholder.typicode.com/posts` )
                .then( (response) => {
                    console.log(response);
                    setPosts( response.data );
                })
                .catch( (error) => {
                    console.log(error);
                })
        }
    },[])

    return (
        <>
            <div className="container">
                <div className="row">  
                    <div className="col-md-12">       
                        <h1>Posts</h1>
                    </div>           
                </div>
                <div className="row">
                    {
                        posts.map( (post) => {
                            return (
                                <div className="col-md-3" key={post.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="card-text">{post.body}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
} , ( prevProps, nextProps ) => { 
    console.log( 'Both props : ', prevProps, nextProps )
    return true 
})

export default PostsComponent;