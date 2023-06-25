import ProductCard from "../../components/home/ProductCard";

const Home = () => {
  return (
    <>
      <h1 className="md:text-2xl lg:text-3xl font-bold text-center mt-6">Our Products</h1>

      {/* Products section */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
};

export default Home;