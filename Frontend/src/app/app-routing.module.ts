import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { TransferComponent } from './transfer/transfer.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: "", component: ListComponent},
  {path: "toAdd", component: AddComponent},
  {path: "toUpdate", component: UpdateComponent},
  {path: "toTransfer", component: TransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
