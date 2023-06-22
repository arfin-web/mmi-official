import React, { useState, useEffect } from "react";
// import imageUrlBuilder from "@sanity/image-url";
// import { sanityClient } from "../sanityClient";
import Teacher from '../Components/Teacher';
const Teachers = ({ posts }) => {
    const [mappedPosts, setMappedPosts] = useState([]);
    useEffect(() => {
        if (posts.length) {
            // const imageBuilder = imageUrlBuilder(sanityClient);
            setMappedPosts(
                posts.map((post) => {
                    return {
                        ...post,
                        // mainImage: imageBuilder
                        //   .image(post.mainImage)
                        //   .width(450)
                        //   .height(500),
                    };
                }));
        } else {
            setMappedPosts([]);
        }
    }, [posts]);

    const teachers = [
        {
            name: 'ডঃ মফিজুর রহমান',
            designation: 'চেয়ারম্যান',
            image: 'chairman.png',
        },
        {
            name: 'হোসনে আক্তার',
            designation: 'প্রধান শিক্ষিকা',
            image: 'principal.png',
        },
        {
            name: 'মোস্তাফিজুর রহমান',
            designation: 'উপদেষ্টা',
            image: 'adviser.png',
        },
    ];
    return (
        <>
            <div className="container">
                <h1 className="my-5 text-center fw-bold text-success">Administrators</h1>
                <div className="row g-4">
                    {teachers.map((teacher, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="card border-0 rounded-3 shadow-lg">
                                <img
                                    src={teacher.image}
                                    className="card-img-top"
                                    alt={`Teacher ${teacher.name}`}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{teacher.name}</h5>
                                    <p className="card-text">{teacher.designation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">
                <h1 className="my-5 fw-bold text-success text-center">Our Respectable Teachers</h1>
                <div className="row g-5">
                    {mappedPosts &&
                        mappedPosts.length &&
                        mappedPosts.map((post, index) => (
                            <Teacher data={post} key={index} />
                        ))}
                </div>
            </div>
        </>
    );
};
export const getServerSideProps = async (context) => {
    const query = encodeURIComponent(`*[ _type == "post" ]`);
    const url = `${process.env.SANITY_URL}query=${query}`;
    const data = await fetch(url).then((res) => res.json());
    const posts = data.result;
    if (!posts || !posts.length === 0) {
        return {
            props: {
                posts: [],
            },
        };
    } else {
        return {
            props: {
                posts,
            },
        };
    }
};
export default Teachers;