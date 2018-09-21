import {Component} from '@angular/core';


import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
//import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})

export class HeaderComponent{
    
    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService){}

    onSaveData(){
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response) => {
                //(response: HttpEvent<Object>) => {
                   // console.log(response.type === HttpEventType.Response );
                   console.log(response);
                }
            );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

    autho() {
        return this.authService.isAuthenticated();
    }


  
}
