import { useRouter } from "next/router";
import React from "react";
import allBlogs from "../../components/data/blogs";
import Navbar from "../../components/navbar";

const SingleArticle = () => {
  const router = useRouter();
  const { singleBlog } = router.query;
  const blog = allBlogs.find((item) => item.id === singleBlog);
  console.log(blog);
  const otherBlogs = allBlogs.filter((item) => item.id !== singleBlog);

  return (
    <>
      {blog && (
        <div className="min-h-screen bg-cloud-image-index bg-cover">
          <div className="text-white  ">
            <Navbar />
          </div>
          <div className="text-center pt-16 md:pt-32 text-white">
            <p className="text-sm md:text-base text-green-300 font-bold">
              {blog.date}
            </p>
            <h1 className="font-bold break-normal text-3xl md:text-5xl">
              {blog.title}
            </h1>
          </div>

          <div
            className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
            style={{
              backgroundImage: `url(${blog.imgSrc})`,
              height: "75vh",
            }}
          ></div>

          <div className="container max-w-5xl mx-auto -mt-32 ">
            <div className="mx-0 sm:mx-6">
              <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-white leading-normal bg-[#449eae]">
                {blog.body.map((bodyItem, i) => (
                  <>
                    <p className="py-6" key={i}>
                      {bodyItem.text}
                    </p>
                    {bodyItem.blockquote && (
                      <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
                        {bodyItem.blockquote}
                      </blockquote>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="container w-full max-w-6xl mx-auto px-2 py-10">
              <h2 className="font-bold break-normal text-2xl md:text-5xl text-white text-center pb-12">
                Related Articles
              </h2>
              <div className="flex flex-wrap -mx-2">
                {otherBlogs.slice(0, 3).map((item) => (
                  <div className="w-full md:w-1/3 px-2 pb-12">
                    <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                      <a href="#" className="no-underline hover:no-underline">
                        <img
                          src={item.imgSrc}
                          className="h-48 w-full rounded-t shadow-lg"
                        />
                        <div className="p-6 h-auto md:h-48">
                          <div className="font-bold text-xl text-gray-900">
                            {item.title}
                          </div>
                          <p className="text-gray-800 font-serif line-clamp-5 h-[83%] text-base mb-5">
                            {item.body[0].text}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleArticle;
