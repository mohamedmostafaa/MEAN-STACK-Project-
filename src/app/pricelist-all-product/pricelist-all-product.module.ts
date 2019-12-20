import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricelistAllProductPageRoutingModule } from './pricelist-all-product-routing.module';

import { PricelistAllProductPage } from './pricelist-all-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricelistAllProductPageRoutingModule
  ],
  declarations: [PricelistAllProductPage]
})
export class PricelistAllProductPageModule {}
