import { Component, OnInit } from '@angular/core';
import { SOCIAL } from '../../shared/social-media';
import { Navigation } from 'src/app/shared/models/navigation';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private _navService: NavigationService) { }

  public navigation: Navigation[];

  public socials: any[] = SOCIAL;
  

  ngOnInit(): void {
    this.getNavItems();
  }

  getNavItems(): void{
    this._navService.getAllNav().subscribe(data => {
      this.navigation = data;
    })
  }

}
