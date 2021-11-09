import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css'],
})
export class CardInfoComponent implements OnInit {
  @Input() cardItems: any;
  @Input() cardTitle: any;
  @Input() iconName: any;

  constructor() {}

  ngOnInit(): void {}
}
