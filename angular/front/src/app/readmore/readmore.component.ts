import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss']
})
export class ReadmoreComponent implements OnInit {

  @Input() content!: string;
  @Input() limit!: number;
  @Input() completeWords!: boolean;

  isContentToggled!: boolean;
  nonEditedContent!: string;

  constructor() {

  }

  ngOnInit() {
    console.log(this.content);
    this.nonEditedContent = this.content;
    this.content = this.formatContent(this.content);
  }

  toggleContent() {
    this.isContentToggled = !this.isContentToggled;
    this.content = this.isContentToggled ? this.nonEditedContent : this.formatContent(this.content);
  }

  formatContent(content: string) {
    if (this.completeWords) {
      this.limit = content.substr(0, this.limit).lastIndexOf(' ');
    }
    return `${content.substr(0, this.limit)}...`;
  }

}
