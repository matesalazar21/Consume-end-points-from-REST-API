import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'page01',
    loadChildren: () => import('./pages/page01/page01.module').then( m => m.Page01PageModule)
  },
  {
    path: 'page02',
    loadChildren: () => import('./pages/page02/page02.module').then( m => m.Page02PageModule)
  },
  {
    path: 'page03',
    loadChildren: () => import('./pages/page03/page03.module').then( m => m.Page03PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
