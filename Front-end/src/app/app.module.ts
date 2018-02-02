import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JawaComponent } from './jawa/jawa.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResepMasakanJawaComponent } from './resep-masakan-jawa/resep-masakan-jawa.component';
import { MasakanJawaComponent } from './masakan-jawa/masakan-jawa.component';
import { AdminJawaComponent } from './admin-jawa/admin-jawa.component';
import { AdminSumateraComponent } from './admin-sumatera/admin-sumatera.component';
import { AdminKalimantanComponent } from './admin-kalimantan/admin-kalimantan.component';
import { AdminBaliComponent } from './admin-bali/admin-bali.component';
import { AdminMalukuComponent } from './admin-maluku/admin-maluku.component';
import { AdminPapuaComponent } from './admin-papua/admin-papua.component';
import { AdminSulawesiComponent } from './admin-sulawesi/admin-sulawesi.component';
import { MasakanSumateraComponent } from './masakan-sumatera/masakan-sumatera.component';
import { MasakanKalimantanComponent } from './masakan-kalimantan/masakan-kalimantan.component';
import { MasakanBaliComponent } from './masakan-bali/masakan-bali.component';
import { MasakanMalukuComponent } from './masakan-maluku/masakan-maluku.component';
import { MasakanSulawesiComponent } from './masakan-sulawesi/masakan-sulawesi.component';
import { MasakanPapuaComponent } from './masakan-papua/masakan-papua.component';
import { ViewComponent } from './view/view.component';
import { ResepEditComponent } from './resep-edit/resep-edit.component';
import { LogoutComponent } from './logout/logout.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JawaComponent,
    AdminComponent,
    LoginComponent,
    AddComponent,
    DashboardComponent,
    ResepMasakanJawaComponent,
    MasakanJawaComponent,
    AdminJawaComponent,
    AdminSumateraComponent,
    AdminKalimantanComponent,
    AdminBaliComponent,
    AdminMalukuComponent,
    AdminPapuaComponent,
    AdminSulawesiComponent,
    MasakanSumateraComponent,
    MasakanKalimantanComponent,
    MasakanBaliComponent,
    MasakanMalukuComponent,
    MasakanSulawesiComponent,
    MasakanPapuaComponent,
    ViewComponent,
    ResepEditComponent,
    LogoutComponent,
    EditAdminComponent,
    AdminDetailComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    RouterModule.forRoot([
      { path : '', component : HomeComponent },
      { path : 'dashboard', component : DashboardComponent },
      { path : 'admin', component : AdminComponent },
      { path : 'login', component : LoginComponent },
      { path : 'add', component : AddComponent },
      { path : 'dashboard-jawa', component : AdminJawaComponent },
      { path : 'dashboard-sumatera', component : AdminSumateraComponent },
      { path : 'dashboard-kalimantan', component : AdminKalimantanComponent },
      { path : 'dashboard-sulawesi', component : AdminSulawesiComponent },
      { path : 'dashboard-bali-nusra', component : AdminBaliComponent },
      { path : 'dashboard-maluku', component : AdminMalukuComponent },
      { path : 'dashboard-papua', component : AdminPapuaComponent },
      { path : 'masakan-jawa', component : MasakanJawaComponent },
      { path : 'masakan-sumatera', component : MasakanSumateraComponent },
      { path : 'masakan-kalimantan', component : MasakanKalimantanComponent },
      { path : 'masakan-sulawesi', component : MasakanSulawesiComponent },
      { path : 'masakan-bali-nusra', component : MasakanBaliComponent },
      { path : 'masakan-maluku', component : MasakanMalukuComponent },
      { path : 'masakan-papua', component : MasakanPapuaComponent },
      { path : 'view/:id', component : ViewComponent },
      { path : 'resep-edit/:id', component: ResepEditComponent},
      { path : 'admin-edit/:id', component: EditAdminComponent},
      { path : 'profile', component: AdminDetailComponent},
      { path : 'logout', component: LogoutComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
