import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBlog = {
            id: Date.now(),
            title: title,
            content: content
        };
        setBlogs([...blogs, newBlog]);
        setTitle('');
        setContent('');
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Recent Blogs</h2>
            {blogs.map((blog) => (
                <div key={blog.id} className="border border-gray-300 rounded-md p-4 mb-7">
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <p>{blog.content}</p>
                </div>
            ))}
            <hr className="my-8" />
            <h1 className="text-2xl font-bold my-4">Write a Blog....</h1>
            <form onSubmit={handleSubmit} className="mb-8">
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={handleTitleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
                />
                <textarea
                    placeholder="Enter content"
                    value={content}
                    onChange={handleContentChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
                    rows="5"
                ></textarea>
                <Button
                    type="submit"
                    backgroundColor="#5EA98B"
                    color="white"
                    borderRadius="20px"
                    padding="0.5rem 2rem"
                    marginTop="1rem"
                    _hover={{
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "black",
                    }}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Blogs;
