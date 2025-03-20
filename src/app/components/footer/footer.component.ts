import {Component} from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // Номер телефона
  public showPhoneNumber: { phone: string }[] = [
    {
      phone: '+375 (29) 368-98-68'
    },
  ];

  // Instagram
  public weInInstagram: {href: string, image: string, description: string, alt: string}[] = [
    {
      href: 'https://www.instagram.com/',
      image: 'instagram-icon.png',
      description: 'Мы в Instagram',
      alt: 'Instagram'
    },
  ];
}
