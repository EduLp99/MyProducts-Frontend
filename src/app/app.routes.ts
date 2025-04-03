import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

export const routes: Routes = [{
    path: "",
    component: HomeComponent
}, {
    path: "products",
    component: ProductComponent
},
{
    path: "products/list",
    component: ProductListComponent
  },
];
