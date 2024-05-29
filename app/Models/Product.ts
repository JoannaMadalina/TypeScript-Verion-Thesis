class Product {
  public id: number;
  public title: string;
  public weight: number;
  constructor(productId: number, productTitle: string, productWeight: number) {
    this.id = productId;
    this.title = productTitle;
    this.weight = productWeight;
  }
}

export default Product;
