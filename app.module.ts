import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsoptionsComponent } from './formsoptions/formsoptions.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MaincontentComponent,
    FormsoptionsComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
