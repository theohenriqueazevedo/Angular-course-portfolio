import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';
import { KnowledgeComponent } from './modules/portfolio/components/knowledge/knowledge.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    HeaderComponent,
    KnowledgeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
