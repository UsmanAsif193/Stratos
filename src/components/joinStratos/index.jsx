import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import SuccessCard from "../SuccessCard";

const JoinStratos = () => {
   const [email, setEmail] = useState("");
   const [name,setName] = useState("");
   const handleJoinInput = (e) => {
    setJoinInput(e.target.value);
  };
  const updateDBJoin = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "Name_Email"), {
        email: email,
        name: name,
      });

      setEmail("");
      setName("");
      SuccessCard();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <section className="flex items-center justify-center flex-wrap min-h-screen pt-20 px-6 lg:pt-0 lg:px-40 overflow-hidden">
      <div className="w-full flex-1">
        <div>
          <h2 className="text-xl md:text-3xl">
            A new way for Latinx & Black professionals to find relevant
            community networking and career opportunities
          </h2>
        </div>
        <div className="text-xl md:text-2xl font-bold py-6">
          <h2>
            At Stratos, your voices are heard, and your questions are answered.
          </h2>
          <h3>
            Find your next community networking & career opportunity with us.
          </h3>
        </div>
        <div>
          <h4 className="pb-4 md:pb-4">
            Sign up to be the first to have access to Stratos community
            networking & career opportunities.
          </h4>
        </div>
        <div>
          <div>
            <form onSubmit={updateDBJoin}>
              <input
                value={name}
                type="text"
                className={` appearance-none placeholder-black block w-80 bg-white text-black border
              border-gray-300 rounded-xl border-0 shadow-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100`}
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                value={email}
                type="email"
                className={`  placeholder-black block w-80 bg-white text-black border
              border-gray-300 rounded-xl border-0 shadow-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100`}
                required
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className=" right-50 cennter top-0 ">
                <input
                  value="Join"
                  type="submit"
                  className="bg-black ml-20  hover:bg-gray-700 text-white font-semibold py-2 px-16 rounded-xl border-0 shadow-md-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img
          className="mt-20 sm:mt-0 mb-20 h-[400px] md:h-[650px]"
          src="assets/Header-graphic.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default JoinStratos;
