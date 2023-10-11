import {useQuery} from "@tanstack/react-query";
import {postsAPI, PostType} from "./postsAPI";


export const usePosts = () => {

    return useQuery<PostType[]>(["posts"], () => postsAPI.getPosts(), {})
}

export const usePost = (postId: string) => {

    return useQuery(['post', postId], () => postsAPI.getPostById(postId), {
        enabled: !!postId,
    })
}