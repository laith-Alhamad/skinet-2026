import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import 'zone.js';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { lastValueFrom } from 'rxjs';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { errorInterceptor } from './core/interceptors/error-interceptor';
import { loadingInterceptor } from './core/interceptors/loading-interceptor';
import { InitService } from './core/services/init-service.service';
import { isPlatformBrowser } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection(),

    // ✅ أضفنا withFetch
    provideHttpClient(withFetch(), withInterceptors([errorInterceptor, loadingInterceptor])),

    provideAppInitializer(async () => {

      const initService = inject(InitService);
      const platformId = inject(PLATFORM_ID);

      return lastValueFrom(initService.init()).finally(() => {

        // ✅ الحل هنا
        if (isPlatformBrowser(platformId)) {
          const splash = document.getElementById('initial-splash');
          if (splash) splash.remove();
        }

      });

    }),

    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { autoFocus: 'dialog', restoreFocus: true }
    }
  ]
};