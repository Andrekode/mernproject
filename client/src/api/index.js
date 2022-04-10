import axios from 'axios';

const url = 'http://192.168.10.63:5000/posts'

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => axios.post(url, newPost);


export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);