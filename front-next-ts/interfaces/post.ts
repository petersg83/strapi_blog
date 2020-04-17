import Image from "./image";

export default interface Post {
    id: number;
    title: string;
    content: string;
    created_at: Date;
    cover: Image;
}