import React from 'react';
import axios from "axios";

function FormPage(props) {
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(`submitting ${e.target.title.value}`)

        await axios.post("https://dummyjson.com/posts/add", {
            title: e.target.title.value,
            userId: 69
        })
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="title"/>
                <button type="submit">post</button>
            </form>
        </div>
    );
}

export default FormPage;