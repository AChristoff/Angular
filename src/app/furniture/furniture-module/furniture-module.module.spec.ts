import { FurnitureModuleModule } from './furniture-module.module';

describe('FurnitureModuleModule', () => {
  let furnitureModuleModule: FurnitureModuleModule;

  beforeEach(() => {
    furnitureModuleModule = new FurnitureModuleModule();
  });

  it('should create an instance', () => {
    expect(furnitureModuleModule).toBeTruthy();
  });
});
