import React from "react";
import allBlogs from "../../components/data/blogs";
import Navbar from "../../components/navbar";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#449eae] bg-cover ">
      <div className="text-white">
        <Navbar />
      </div>
      <h1 className="tracking-[.7rem] uppercase font-light text-2xl md:text-4xl text-center text-white py-14 pt-24">
        Strat<span className="text-black">o</span>s Blogs
      </h1>

      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {allBlogs.map((item) => {
            return (
              <article
                key={item.id}
                className="flex flex-col shadow my-4 cursor-pointer"
              >
                <div className="hover:opacity-75">
                  <Link href={`/blogs/${item.id}`}>
                    <a>
                      <img src={item.imgSrc} />
                    </a>
                  </Link>
                </div>
                <div className="flex flex-col justify-start p-6 bg-[#ececec]">
                  <div className="text-3xl font-bold hover:text-gray-700 pb-4">
                    <Link href={`/blogs/${item.id}`}>{item.title}</Link>
                  </div>
                  <div className="text-sm pb-3 flex ">
                    By:
                    <p className="font-semibold hover:text-gray-800 pl-1">
                      <Link href={`/blogs/${item.id}`}>{item.writer}</Link>
                    </p>
                    <p className="pl-10">Published on {item.date}</p>
                  </div>

                  <div className="pb-6">
                    <Link href={`/blogs/${item.id}`}>
                      <p className="line-clamp-5 h-full">{item.body[0].text}</p>
                    </Link>
                  </div>
                  <div className="uppercase text-gray-800 hover:text-black">
                    <Link href={`/blogs/${item.id}`}>
                      <a>
                        Continue Reading <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6 bg-[#ececec]">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p>
              Jonathan Cornelius founded Stratos intending to solve a big
              problem. The problem was the lack of diverse talent in the tech
              space.
            </p>
            <p>
              Stratos started as a recruitment firm that sourced diverse talent
              for its partners. What inspired us to expand our vision was when
              Jonathan made a call to offer a young lady a job. Jonathan told
              her, &quot;you got the job,&quot; and she began to cry. Jonathan
              asked her why are you crying, and her response was, &quot;this
              opportunity changed me and my family&apos;s life.&quot; Stratos is
              on a mission to scale this story and replicate this level of
              impact across the world.
            </p>
            <a
              href="#"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;