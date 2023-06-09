import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { Navigation_barComponent } from './navigation_bar/navigation_bar.component';
import { FooterComponent } from './footer/footer.component';
import { Book_info_cardComponent } from './book_info_card/book_info_card.component';
import { Book_listComponent } from './book_list/book_list.component';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserService } from './services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AddBookComponent } from './add-book/add-book.component';
import { DetailResolverService } from './product-details/detail-resolver.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { BookService } from './services/book.service';
import { AlertyfyService } from './services/alertyfy.service';
import { AuthentificationService } from './services/authentification.service';
import { SortPipe } from './Pipes/sort.pipe';
import { CartItemComponent } from './cart-item/cart-item.component';

const appRoutes: Routes = [
  {path: '', component:Book_listComponent},
  {path: 'product-details/:id', component:ProductDetailsComponent,
                                resolve: {prp:DetailResolverService}},
  {path: 'cart', component:CartFormComponent},
  {path: 'authorization', component:UserLoginComponent},
  {path: 'register', component:UserRegisterComponent},
  {path: 'add-book', component:AddBookComponent}

]

@NgModule({
  declarations: [	
    AppComponent,
      Navigation_barComponent,
      FooterComponent,
      Book_info_cardComponent,
      Book_listComponent,
      PdfReaderComponent,
      CartFormComponent,
      ProductDetailsComponent,
      UserLoginComponent,
      UserRegisterComponent,
      AddBookComponent,
      FilterPipe,
      SortPipe,
      CartItemComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    BookService,
     UserService,
     AlertyfyService,
     AuthentificationService,
     DetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
