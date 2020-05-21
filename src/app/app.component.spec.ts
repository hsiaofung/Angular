import { AppComponent } from './app.component';
import { Stock } from './model/stock';

describe('AppComponent', () => {
  it('should have stock instantiated on ngInit', () => {
    const appComponent = new AppComponent();
    expect(appComponent.stock).toBeUndefined();
    appComponent.ngOnInit();
    expect(appComponent.stock).toEqual(
      new Stock('Test Stock Company', 'TSC', 85, 80)
    );
  });
  it('should have toggle stock favorite', () => {
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stock.favorite).toBeFalsy();
    appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
    expect(appComponent.stock.favorite).toBeTruthy();
    appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
    expect(appComponent.stock.favorite).toBeFalsy();
  });
});
