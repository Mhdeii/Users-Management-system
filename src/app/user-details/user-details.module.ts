import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { UserDetailsComponent } from './user-details.component';

@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule  // Add FormsModule to the imports array
  ]
})
export class UserDetailsModule { }
