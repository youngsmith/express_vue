import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
    // Get Posts
    static getPosts(){
        return new Promise(async (resolve, reject) =>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(data);
            } catch(err){
                reject(err);
            }
        });
    }

    // Create Post
    static insertPost(data){
        return axios.post(url, data);
    }

    // Delete Post
    static deletePost(id){
        console.log(url + id);
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;