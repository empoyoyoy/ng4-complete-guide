import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from "./dropdowm.directive";



@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        DropdownDirective
    ]

})
export class SharedModule {

    
}