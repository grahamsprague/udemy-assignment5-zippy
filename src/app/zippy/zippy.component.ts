import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title: string;
  isExpanded = true;

  toggleZippy() {
    this.isExpanded = !this.isExpanded;
  }


}
