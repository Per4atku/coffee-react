import { lazy } from "react";
const ProductCard = lazy(() => import("../../components/ProductCard"));
import products from "../../data/products.json";
import { Suspense } from "react";
import ProductCardSkeleton from "../../mui/ProductCardSkeleton/ProductCardSkeleton";

const PopularProducts = () => {
  return (
    <div className="wrap">
      <div className="relative bg-accent rounded-[0_0_65px_65px] w-full -top-32 xs:w-80 xs:mx-auto sm:w-full md:w-5/6 md:min-w-[650px] lg:max-w-[1200px] lg:w-[93%]">
        <div className="relative -top-24 grid grid-cols-1 grid-rows-3 gap-y-10 sm:grid-cols-[290px_1fr_290px] sm:grid-rows-2 sm:[&>*:nth-child(2)]:col-start-3 lg:flex lg:justify-around ">
          {products[0].list.slice(0, 3).map((product, index) => (
            <Suspense key={index} fallback={<ProductCardSkeleton />}>
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                rating={product.rating}
                image={product.image}
                color={"#4BB79E"}
                hot_cold={true}
                id={product.id}
              />
            </Suspense>
          ))}
          <div className="m-auto w-72 h-40 hidden bg-[url(/assets/logo-l.svg)] col-start-3 bg-center bg-contain bg-no-repeat opacity-20 sm:block lg:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
