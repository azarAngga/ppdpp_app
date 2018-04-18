import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexKaryawanPage } from './index-karyawan';

@NgModule({
  declarations: [
    IndexKaryawanPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexKaryawanPage),
  ],
})
export class IndexKaryawanPageModule {}
