import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'', component: CreateItemComponent},
  {path:'cart', component: CartComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
