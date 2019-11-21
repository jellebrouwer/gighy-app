import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent implements OnInit {

  @Input() gif;

  constructor() { }

  ngOnInit() {
  }

}
