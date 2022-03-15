import React from "react";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";
import Slider from "../components/slider";
import CategoryItems from "../components/category/categories";
import Products from "../components/products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />

      <CategoryItems />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
