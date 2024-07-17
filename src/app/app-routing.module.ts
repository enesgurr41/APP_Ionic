import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { GatePage } from './gate/gate.page';
import { Gate1Page } from './gate1/gate1.page';
import { Gate2Page } from './gate2/gate2.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./auth-component/auth-component.component').then(m => m.AuthComponentComponent)
  },
  
  {
    path: '',
    component: AuthComponentComponent
  },
  {
    path: 'gate',
    component: GatePage
  },
  {
    path: 'gate1',
    component: Gate1Page
  },
  {
    path: 'gate2',
    component: Gate2Page
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
