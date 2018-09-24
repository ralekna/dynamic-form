import { FormsManagerModule } from './forms-manager.module';

describe('FormsManagerModule', () => {
  let formsManagerModule: FormsManagerModule;

  beforeEach(() => {
    formsManagerModule = new FormsManagerModule();
  });

  it('should create an instance', () => {
    expect(formsManagerModule).toBeTruthy();
  });
});
