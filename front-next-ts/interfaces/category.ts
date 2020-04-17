import Post from "./post";

export default interface Category {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    posts: Post[];
}