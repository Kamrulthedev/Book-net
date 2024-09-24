import { CreatePost, getAllPosts } from "@/services/PostService";
import { TPost } from "@/types";
import { revalidateTag } from "next/cache";
import Swal from "sweetalert2";

const CreatePostPage = () => {
  const handelCreatePost = async (formData: FormData) => {
    "use server";

    const posts = await getAllPosts();

    const bookData = {
      id: JSON.stringify(posts.length + 1),
      name: formData.get("bookName"),
      description: formData.get("description"),
      category: formData.get("category"),
      image: formData.get("image"),
    };

    try {
      const res = await CreatePost(bookData as TPost);
      console.log(res);
      revalidateTag("Posts")
      Swal.fire("Post Create Successfully !");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" shadow-xl bg-base-100 w-[80%] my-12">
      <h1 className="text-center text-4xl">
        Add Your <span className="text-fuchsia-900">Book Review</span>
      </h1>
      <form action={handelCreatePost} className="p-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Name</span>
          </label>
          <input
            name="bookName"
            type="name"
            placeholder="Book Name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            name="category"
            type="text"
            placeholder="Fantasy, Fiction, etc."
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            name="image"
            type="url"
            placeholder="Image URL"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-accent btn-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
