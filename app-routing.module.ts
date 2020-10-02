import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './app.component/CardComponent;
import { InputComponent } from './app.component/InputComponent';
import { GalleryComponent } from './app.component/GalleryComponent';



const routes: Routes = [
  {path: '', component: CardComponent },
  {path: 'edit/:id', component: InputComponent },
  {path: 'new', component: InputComponent},
  {path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
