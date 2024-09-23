import Banner from "@/components/banner/Banner";
import LatestPosts from "@/components/latestPosts/LatestPost";
import { getAllPosts } from "@/services/PostService";

const HomePage = async () => {
  const posts = await getAllPosts("isr");
 

  return (
    <>
      <Banner></Banner>
      <LatestPosts posts={posts}></LatestPosts>
    </>
  );
};

export default HomePage;
