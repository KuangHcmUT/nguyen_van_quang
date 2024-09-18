import { checkArea, checkPrice } from "@/unils/helper";
import products from "./data.json";
import ProductDetail from "./ProductDetail";

interface ProductProps {
    province: string;
    district: string;
    priceRange: string;
    area: string;
}

const Product: React.FC<ProductProps> = ({
    province,
    district,
    priceRange,
    area,
}) => {
    const filteredProducts = products.map((product) => {
        if (
            (province === "0" || product.city === province) &&
            (district === "0" || product.district === district) &&
            (priceRange === "0" || checkPrice(product.price, priceRange)) &&
            (area === "0" || checkArea(product.area, area))
        ) {
            return product;
        }
        return null;
    });
    return (
        <div className="grid grid-cols-1 gap-4 w-3/4 m-auto mt-5">
            {filteredProducts.map((product, index) => {
                if (product) {
                    return <ProductDetail key={index} product={product} />;
                }
                return null;
            })}
        </div>
    );
};

export default Product;
