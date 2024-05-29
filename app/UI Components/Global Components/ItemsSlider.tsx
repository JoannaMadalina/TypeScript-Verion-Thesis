import { Card, InlineGrid, Text } from "@shopify/polaris";
import { useRef, useState } from "react";
import Product from "~/Models/Product";
import ProductItemCard from "../Small Components/ProductItemCard";

type ItemsSliderProps = {
  title: string;
  storeProducts: Product[];
};

const ItemsSlider: React.FC<ItemsSliderProps> = ({ title, storeProducts }) => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const slide = (shift: number) => {
    scrl.current.scrollBy({
      left: shift,
      behavior: "smooth",
    });

    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <div className=" item-slider-container">
      <h4 className="px-3 mb-3 item-title">{title}</h4>
      <div className="item-slider">
        <div
          onClick={() => slide(-100)}
          className={`left-arrow-left ${scrollX < 1 ? "is-disabled-hide" : ""}`}
        >
          &lt;
        </div>
        <div ref={scrl} onScroll={scrollCheck} className="item-container">
          {storeProducts.map((product: Product) => {
            return <ProductItemCard product={product} />;
          })}
        </div>
        <div
          className={`right-arrow-right ${!scrollEnd ? "" : "is-disabled-hide"}`}
          onClick={() => slide(+100)}
        >
          &gt;
        </div>
      </div>
    </div>
  );
};

export default ItemsSlider;
