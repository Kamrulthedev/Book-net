import { delay } from "@/utils/delay";

export const getCommentsById = async (id: string, wait = false) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/comments?postId=${id}`
  );

  if (!res.ok) {
    throw new Error("Fetch Data Error");
  }

  if (wait) {
    delay(2000);
  }
  return res.json();
};
