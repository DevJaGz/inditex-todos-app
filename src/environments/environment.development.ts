import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const environment = {
  extModules: [
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
};
