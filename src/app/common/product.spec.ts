import { Product } from './product';

// describe('Product', () => {
//   it('should create an instance', () => {
//     expect(new Product()).toBeTruthy();
//   });
// });

describe('Product', () => {
  it('should create an instance', () => {
    expect(
      new Product(
        "2",
        'Test Product',
        'A product for testing',
        9.99,
        'http://example.com/image.jpg',
        true,
        100,
        new Date(),
        new Date()
      )
    ).toBeTruthy();
  });
});
