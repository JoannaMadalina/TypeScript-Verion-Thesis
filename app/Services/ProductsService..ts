import Product from "~/Models/Product";

/**
 * This class serves as an entry point to all methods related to the Shopify Product object
 * All products are fetched from the API server
 */
class ProductsService {
  protected serverUrl: string;
  protected accessToken: string;
  protected hostName: string;

  constructor(accessToken: string, hostName: string) {
    this.serverUrl = "https://weee-calculator-server.onrender.com/api/v1";
    this.accessToken = accessToken;
    this.hostName = hostName;
  }

  public async getAllShopProducts(): Promise<Array<Product> | null> {
    try {
      const response = await fetch(`${this.serverUrl}/products/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "access-token": this.accessToken,
          "host-name": this.hostName,
        },
      });

      if (response.status == 200) {
        const data = await response.json();

        const productsList: Product[] = data.map(
          (product: any) =>
            new Product(
              product.productId,
              product.productTitle,
              product.productWeight,
            ),
        );
        return productsList;
      } else if (response.status == 500) {
        throw new Error("Error getting shop products: Internal Server Error");
      }

      return null;
    } catch (e) {
      throw new Error(`Error getting all products: ${e}`);
    }
  }
}

export default ProductsService;
