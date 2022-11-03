import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { MainHeaderComponent } from './main-header/main-header';
import { BannerComponent } from './banner/banner';
import { MainFooterComponent } from './main-footer/main-footer';
import { PootaComponentsModule } from 'src/app/components/components.module';
import { PootaBackgroundDirectiveModule, PootaBorderDirectiveModule, PootaColorDirectiveModule } from 'src/app/directives';
import { ContentComponent } from './content/content';
import { TagBannerComponent } from './tag-banner/tag-banner';
import { AppListComponent } from './app-list/app-list';
import { AgenciasBannerComponent } from './agencias-banner/agencias-banner';
import { AbraContaComponent } from './abra-conta/abra-conta';


@NgModule({
  declarations: [
    HomeComponent,
    MainHeaderComponent,
    BannerComponent,
    TagBannerComponent,
    MainFooterComponent,
    ContentComponent,
    AppListComponent,
    AgenciasBannerComponent,
    AbraContaComponent
  ],
  imports: [
    CommonModule,
    PootaComponentsModule,
    PootaBorderDirectiveModule,
    PootaBackgroundDirectiveModule,
    PootaColorDirectiveModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
