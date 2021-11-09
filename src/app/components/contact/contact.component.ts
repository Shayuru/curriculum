import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() cardTitle: any;
  @Input() iconName: any;
  @Input() contactInfo: any;

  constructor() {}

  ngOnInit(): void {}
}
