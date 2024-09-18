"use client";
import SearchBar from "./components/SearchBar";
import Product from "./components/Product";
import { useState } from "react";

interface FilterValues {
    province: string;
    district: string;
    priceRange: string;
    area: string;
}

export default function Home() {
    const [filterData, setFilterData] = useState<FilterValues>({
        province: "0",
        district: "0",
        priceRange: "0",
        area: "0",
    });

    const handleFilter = (values: FilterValues) => {
        console.log("Filter values:", values);
        setFilterData(values);
        console.log(filterData);
    };
    return (
        <main className="container flex flex-col w-full m-auto pb-5">
            <SearchBar onFilter={handleFilter} />
            <Product
                district={filterData.district}
                province={filterData.province}
                priceRange={filterData.priceRange}
                area={filterData.area}
            />
        </main>
    );
}
