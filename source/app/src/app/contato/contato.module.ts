import { NgModule } from '@angular/core';
import {ShareModuleModule} from '../share/share.module';
import {ContatoComponent} from './contato.component';
import {ContatoRoutingModule} from './contato-routing.module';
import {ContatoComponentService} from './contato.component.service';



@NgModule({
  declarations: [ContatoComponent],
  imports: [
    ShareModuleModule, ContatoRoutingModule
  ],
  providers: [ ContatoComponentService ]
})
export class ContatoModule { }
