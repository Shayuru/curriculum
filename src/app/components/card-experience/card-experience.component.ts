import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  transition,
  state,
  animate,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(-1.9em)',
        })
      ),

      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class CardExperienceComponent implements OnInit {
  @Input() experience: any;
  isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  togleCardExperience(card: any) {
    let iconElement1 = card.childNodes[0] as HTMLElement;
    let iconElement2 = card.childNodes[1] as HTMLElement;

    iconElement1.classList.toggle('is-hidden');
    iconElement2.classList.toggle('is-hidden');

    if (
      card.parentElement != null &&
      card.parentElement.parentElement != null
    ) {
      let element = card.parentElement.parentElement
        .childNodes[1] as HTMLElement;
      element.classList.toggle('is-hidden');
      this.isOpen = !this.isOpen;
    }
  }
}
