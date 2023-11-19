import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { AdmComponent } from './adm/adm.component';
import { BookComponent } from './book/book.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
{
    path:'',
    component:HomeComponent
},
{
  path:'add',
  component:AddComponent
},
{
  path:'adm',
  component:AdmComponent
},
{
  path:'book/:id',
  component:BookComponent
},
{
  path:'edit/:id',
  component:EditComponent
},
{
  path:'book/:id',
  component:BookComponent
},
{
  path:'details/:id',
  component:DetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
