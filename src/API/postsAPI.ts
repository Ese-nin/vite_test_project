import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/"

export const postsAPI = {
    async getPosts() {
        const {data} = await axios.get<PostType[]>(baseURL)
        return data
    },
    async getPostById(id: string) {
        const {data} = await axios.get<PostType>(baseURL + id)
        return data
    }
}

export type PostType = {
    userId: number
    id: number
    title: string
    body: string
}