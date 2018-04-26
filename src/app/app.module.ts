import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './views/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
