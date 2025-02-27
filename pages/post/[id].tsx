
import React from "react";
import Link from "next/link";

const Post = ({ post }: any) => {
    return (
        <div className="post-id">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href="/">Go back to homepage</Link>
        </div>
    );
};

export async function getStaticProps({ params }: any) {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const post = await res.json();


    return {
        props: {
            post,
        },
    };
}

export default Post;