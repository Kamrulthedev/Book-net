
export const getAllPosts = async (type: string) => {
  let fetchOptions = {};

  if (type === "ssr") {
    fetchOptions = {
      cache: "no-store",
    };
  } else if(type === "isr"){
    fetchOptions ={
      next:{
        revalidate : 30
      }
    }
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/posts`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Fetch Data Error");
  }
  return res.json();
};
