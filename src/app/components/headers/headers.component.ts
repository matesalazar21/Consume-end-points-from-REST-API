import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent implements OnInit {
  @Input() title: string = '';

  constructor() {}

  ngOnInit() {}
}
