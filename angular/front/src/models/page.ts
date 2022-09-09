import { Post } from "./post";

export class Page {


    constructor(
        public page_name : string,
        public posts : Post[],
    
    ){}
}
