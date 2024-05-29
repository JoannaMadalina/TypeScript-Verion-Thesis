import { useEffect } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import type Product from "~/Models/Product";
import ProductsService from "~/Services/ProductsService.";
import Navbar from "~/UI Components/Global Components/NavBar";
import HomeBanner from "~/UI Components/Global Components/HomeBanner";
import ItemsSlider from "~/UI Components/Global Components/ItemsSlider";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);

  //Fromm session you can extract:
  //"shop" - shopify host name
  //"accessToken" - the shopify api key
  const { shop, accessToken } = session;

  const productsService = new ProductsService(
    accessToken as string,
    shop as string,
  );

  const productsList: Product[] | null =
    await productsService.getAllShopProducts();

  return productsList;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  //const { admin } = await authenticate.admin(request);
};

export default function Index() {
  const productsList = useLoaderData<typeof loader>();
  useEffect(() => {}, []);

  return (
    <main>
      <Navbar />
      <HomeBanner />
      {productsList ? (
        <ItemsSlider storeProducts={productsList} title="Store products" />
      ) : (
        <h2>No products found</h2>
      )}
    </main>
  );
}
