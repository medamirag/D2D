import { Component, OnInit } from '@angular/core';
import { Page } from 'src/models/page';
import { Post } from 'src/models/post';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  Temp: Post[] = [];
  dateP: string[] = ["2021-06-29", "2021-06-30", "2021-07-01", "2021-07-02", "2021-07-03", "2021-07-04", "2021-07-05"]
  constructor(private postsService: PostService) {

    this.dateP.forEach(dp => {
      this.postsService.getAll(dp).subscribe(data => {
        this.Temp = data[0].posts

        for (let i = 0; i < this.Temp.length; i++) {

          this.Temp[i].post_date = new Date(dp);
        }
        data[0].posts = this.Temp

       // this.Temp = data[0];

        this.posts = [...this.posts, ...this.Temp]


      });

    });



  }

  ngOnInit(): void {
  }

}
