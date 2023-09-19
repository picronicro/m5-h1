import React from "react";
import {useState, useEffect} from "react";
import axios, {get} from "axios";

function PostsPage(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            await axios.get("https://dummyjson.com/posts", )
                .then(resp => setPosts(resp.data.posts))
        }

        getPosts()
    }, [])

    return (
        <div>
            {posts.map(post => <h3 key={post.id} >{post.title}</h3>)}
        </div>
    );
}

export default PostsPage;