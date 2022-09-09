import { Comment } from "./comment";

export class Post {

constructor(
    public post_id : string,
    public post_date : Date,
    public post_text : string,
    public post_comments : Comment[]

    
){}
}
