import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent} from './components/contact/contact.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ContactRoutingModule
    ]
})


export class ContactModule { }