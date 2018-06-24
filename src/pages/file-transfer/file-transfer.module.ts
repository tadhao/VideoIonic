import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileTransferPage } from './file-transfer';

@NgModule({
  declarations: [
    FileTransferPage,
  ],
  imports: [
    IonicPageModule.forChild(FileTransferPage),
  ],
})
export class FileTransferPageModule {}
