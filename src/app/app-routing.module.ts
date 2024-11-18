import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaImgComponent } from './upload/carga-img/carga-img.component';

const routes: Routes = [
{
  path:'',
  component:CargaImgComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
