import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PATHS } from 'src/app/shared/paths';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) { }

  getAllNav():Observable<any>{
    return this.http.get(PATHS.navigation);
  }
}
