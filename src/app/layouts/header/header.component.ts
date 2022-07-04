import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/app/shared/models/navigation';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _navService: NavigationService) { }

  public navigation: Navigation[];

  ngOnInit(): void {
    this.getNavItems();
  }

  getNavItems(): void{
    this._navService.getAllNav().subscribe(data => {
      this.navigation = data;
    })
  }

}
