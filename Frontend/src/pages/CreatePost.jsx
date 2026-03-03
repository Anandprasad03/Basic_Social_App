import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)

        axios.post("http://localhost:3000/create-post", formData)
            .then((response) => {
                console.log("Post created:", response.data);
                event.target.reset();
                navigate("/feed");
            })
            .catch((error) => {
                console.error("Error creating post:", error);
            });
    }

    return (
        <section className="create-post">
            <div className="create-post-wrapper">
                <h1>Create a New Post</h1>

                <form onSubmit={handleSubmit}>
                    <input type="file" name="image" accept="image/*" />
                    <input type="text" name="caption" placeholder="Enter the caption" required />
                    <button type="submit">Post</button>
                </form>
            </div>
        </section>
    )
}

export default CreatePost
