import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() page: number;
  @Output() newPage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  prvBtn() {
    if (this.page > 1) {
      this.newPage.emit(this.page - 1);
    }
  }

  nxtBtn() {
    this.newPage.emit(this.page + 1);
  }

  ngOnInit(): void {
  }

}
