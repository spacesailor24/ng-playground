import { PlaysetsModule } from './playsets.module';

describe('PlaysetsModule', () => {
  let playsetsModule: PlaysetsModule;

  beforeEach(() => {
    playsetsModule = new PlaysetsModule();
  });

  it('should create an instance', () => {
    expect(playsetsModule).toBeTruthy();
  });
});
