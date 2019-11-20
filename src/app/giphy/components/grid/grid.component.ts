import { Component, OnInit, Input } from '@angular/core';
import { IGif } from '../../interfaces/giphy.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() gifs: IGif[];

  constructor() { }

  ngOnInit() { }

}
