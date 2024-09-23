export const getAllPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`);

  if (!res.ok) {
    throw new Error("Fetch Data Error");
  }
  return res.json();
};
