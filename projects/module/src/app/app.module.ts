import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {
    IlpnComponentsModule,
    PetriNetLayoutManagerFactoryService,
    PnDisplayModule,
    SpringEmbedderLayoutManagerFactoryService,
} from 'ilpn-components';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF, PlatformLocation} from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        IlpnComponentsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PnDisplayModule,
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
            deps: [PlatformLocation]
        },
        {
            provide: PetriNetLayoutManagerFactoryService,
            useExisting: SpringEmbedderLayoutManagerFactoryService,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
