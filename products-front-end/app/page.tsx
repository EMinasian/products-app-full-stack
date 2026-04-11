import Products from "@/components/Products";
import CreatePostsButton from "@/components/CreateProducts";

const HomePage = async () => {
  return (
    <div>
      <Products />
      <CreatePostsButton />
    </div>
  );
};

export default HomePage;
