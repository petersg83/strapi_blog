import Image from "./image";
import Category from "./category";

export default interface Post {
    id: number;
    title: string;
    content: string;
    created_at: Date;
    cover: Image;
    category: Category;
}