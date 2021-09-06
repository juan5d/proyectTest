import { DataComponent } from './pages/data/data.component';
import { TabletComponent } from './components/tablet/tablet.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './components/map/map.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'map',
    component: MapComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'table',
    component: TabletComponent
  },
  {
    path:'datos',
    component: DataComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
