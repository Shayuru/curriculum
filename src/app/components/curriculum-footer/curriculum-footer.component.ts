import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-footer',
  templateUrl: './curriculum-footer.component.html',
  styleUrls: ['./curriculum-footer.component.css'],
})
export class CurriculumFooterComponent implements OnInit {
  @Input() errorOccurred: any;
  constructor() {}

  ngOnInit(): void {}

  removeNotification(target: any) {
    let parentNode = target.parentNode as HTMLElement;
    parentNode.removeChild(target);
  }
}
