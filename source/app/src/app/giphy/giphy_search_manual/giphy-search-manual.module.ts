import { NgModule } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';
import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { ShareModuleModule } from '../../share/share.module';
import {GiphySearchListModule} from '../giphy-search-list/giphy-search-list.module';
import {GiphySearchManualComponentRoutingModule} from './giphy-search-routing.module';


@NgModule({
  imports: [ ShareModuleModule, GiphySearchListModule, GiphySearchManualComponentRoutingModule ],
  exports: [ GiphySearchManualComponent ],
  declarations: [ GiphySearchManualComponent ],
  providers: [ GiphySearchService ]
})

export class GiphySearchManualComponentModule {
}
