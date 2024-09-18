import Image from "next/image";
import districts from "./quan_huyen.json";

interface Product {
    title: string;
    thumbnail: string;
    price: number;
    area: number;
    city: string;
    district: string;
    content: string;
}
interface ProductDetailProps {
    product: Product;
}
const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    console.log(product);
    return (
        <div className="flex flex-col md:flex-row gap-3 p-2 border-2 border-red-700">
            <div className="w-1/4">
                <div className="relative aspect-[500/400]">
                    <Image
                        src={product.thumbnail}
                        layout="fill"
                        className="object-cover"
                        alt="thumbnail"
                    />
                </div>
            </div>
            <div className="w-3/4 grid grid-cols-1 gap-2">
                <h2 className="text-red-600 font-bold text-xl">
                    {product.title}
                </h2>
                <p className="text-green-600 font-bold text-2xl">
                    {product.price / 1000000} Triệu/tháng
                </p>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-row gap-1">
                        <span className="text text-gray-400">Diện tích:</span>
                        <p>{product.area}m2</p>
                    </div>
                    <div className="flex flex-row gap-1">
                        <span className="text text-gray-400">Khu Vực:</span>
                        <p className="text-xl text-blue-500">
                            {districts[product.district].path_with_type}
                        </p>
                    </div>
                </div>
                <p className=" text-gray-400">{product.content}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
