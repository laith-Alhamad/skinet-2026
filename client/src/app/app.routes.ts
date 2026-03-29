import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ShopComponent } from './features/shop/shop.component';
import { ProductDetailsComponent } from './features/shop/product-details/product-details.component';
import { TestErrorcomponent } from './features/test-errorcomponent/test-errorcomponent';
import { NotFoundcomponent } from './shared/components/not-foundcomponent/not-foundcomponent';
import { ServerErrorcomponent } from './shared/components/server-errorcomponent/server-errorcomponent';

export const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'shop', component:ShopComponent},
    {path:'shop/:id', component:ProductDetailsComponent},
    {path:'test-error', component:TestErrorcomponent},
    {path:'not-found', component:NotFoundcomponent},
    {path:'server-error', component:ServerErrorcomponent},
    {path:'**', redirectTo:'not-found', pathMatch:'full'},
    

];
