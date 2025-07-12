import React from "react";
import Hero from "../components/Layout/Hero"; //banner
import GenderCollectionSection from "../components/Products/GenderCollectionSection"; //bộ sưu tập theo giới tính
import NewArrivals from "../components/Products/NewArrivals"; //sản phẩm mới
import ProductDetails from "../components/Products/ProductDetails"; //chi tiết một sản phẩm
import ProductGrid from "../components/Products/ProductGrid"; //danh sách sản phẩm dưới dạng lưới
import FeaturedCollection from "../components/Products/FeaturedCollection"; //bộ sưu tập nổi bật
import FeaturesSection from "../components/Products/FeaturesSection"; //các đặc điểm nổi bật

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 200,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 300,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 400,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
  {
    _id: 5,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    _id: 6,
    name: "Product 2",
    price: 200,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
  {
    _id: 7,
    name: "Product 3",
    price: 300,
    images: [{ url: "https://picsum.photos/500/500?random=9" }],
  },
  {
    _id: 8,
    name: "Product 4",
    price: 400,
    images: [{ url: "https://picsum.photos/500/500?random=10" }],
  },
];

const Home = () => {
  return (
    <div>
      <Hero /> 
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">Top Wears for Women</h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
