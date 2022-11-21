import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoChipListComponent } from './components/crypto-chip-list/crypto-chip-list.component';
import { PublicHolidayListComponent } from './components/public-holiday-list/public-holiday-list.component';
import { CheckboxCategoryListComponent } from './components/checkbox-category-list/checkbox-category-list.component';
import { CategoriesMenuListComponent } from './components/categories-menu-list/categories-menu-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipListComponentModule } from './components/crypto-chip-list/crypto-chip-list.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { PublicHolidayListComponentModule } from './components/public-holiday-list/public-holiday-list.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CheckboxCategoryListComponentModule } from './components/checkbox-category-list/checkbox-category-list.component-module';
import { CategoriesMenuListComponentModule } from './components/categories-menu-list/categories-menu-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoChipListComponent }, { path: 'public-holidays', component: PublicHolidayListComponent }, { path: 'checkbox-categories', component: CheckboxCategoryListComponent }, { path: 'categories-menu', component: CategoriesMenuListComponent }]), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoChipListComponentModule, CryptoChipsServiceModule, PublicHolidayListComponentModule, PublicHolidaysServiceModule, CheckboxCategoryListComponentModule, CategoriesMenuListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
