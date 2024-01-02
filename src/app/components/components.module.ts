import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeadersComponent, FooterComponent],
  exports: [HeadersComponent, FooterComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
