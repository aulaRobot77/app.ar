import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing, appRoutingProviders } from './app-routing';
import { AulaRobotModule } from './aula-robot/aula-robot.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
// import { BuscarPipe } from './pipes/buscar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent
    // BuscarPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AulaRobotModule,
    UsuariosModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
