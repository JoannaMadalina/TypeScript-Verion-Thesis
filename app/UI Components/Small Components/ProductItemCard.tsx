import { Card, InlineGrid, Text } from "@shopify/polaris";
import Product from "~/Models/Product";

type ProductItemCardProps = {
  product: Product;
};

const ProductItemCard: React.FC<ProductItemCardProps> = ({ product }) => {
  return (
    <Card key={product.id}>
      <InlineGrid gap="200" columns={2}>
        <Text as="h4" variant="bodyMd">
          {product.title}
        </Text>
        <Text as="p" variant="bodyMd">
          {product.weight}
        </Text>
      </InlineGrid>
    </Card>
  );
};

export default ProductItemCard;
