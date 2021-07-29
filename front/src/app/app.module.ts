import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule, Route } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { CreateUpdateRoomComponent } from './pages/create-update-room/create-update-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListRoomsComponent } from './pages/list-rooms/list-rooms.component';

const routes:Route[] = [
  {path: 'create', component: CreateUpdateRoomComponent},
  {path: 'create/:id', component: CreateUpdateRoomComponent},
  {path: 'rooms', component: ListRoomsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateRoomComponent,
    ListRoomsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule,
    RouterModule.forRoot(routes),
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
