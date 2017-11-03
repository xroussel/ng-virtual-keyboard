import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MdButtonModule, MdDialogModule, MdIconModule, MdInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShContextMenuModule } from 'ng2-right-click-menu';

import { NgVirtualKeyboardDirective } from './virtual-keyboard.directive';
import { VirtualKeyboardComponent } from './virtual-keyboard.component';
import { VirtualKeyboardKeyComponent } from './virtual-keyboard-key.component';
import { VirtualKeyboardService } from './virtual-keyboard.service';

@NgModule({
  declarations: [
    NgVirtualKeyboardDirective,
    VirtualKeyboardComponent,
    VirtualKeyboardKeyComponent,
  ],
  providers: [
    VirtualKeyboardService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdDialogModule,
    MdIconModule,
	MdInputModule,
	ShContextMenuModule
  ],
  entryComponents: [
    VirtualKeyboardComponent,
  ],
  exports: [
    NgVirtualKeyboardDirective
  ]
})

export class NgVirtualKeyboardModule { }
