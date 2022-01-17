import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import SuccessCard from '../SuccessCard/SuccessCard';

const JoinStratos = () => {
   const [joinInput, setJoinInput] = useState("");
   const handleJoinInput = (e) => {
    setJoinInput(e.target.value);
  };
  const updateDBJoin = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "userEmails"), {
        email: joinInput,
      });
      
      setJoinInput("");
      SuccessCard();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <section className="flex items-center justify-center flex-wrap h-screen pt-20 px-6 lg:pt-0 overflow-hidden">
      <div className="w-[600px]">
        <div>
          <h2 className="text-xl md:text-3xl">
            A new way for Black & Latinx professionals to network with each
            other
          </h2>
        </div>
        <div className="text-xl md:text-2xl font-bold py-6">
          <h2>Careers. Networking. Mentorships. All in one spot.</h2>
        </div>
        <div>
          <h3 className="pb-4 md:pb-2">
            Be the first to have access to Stratos opportunities
          </h3>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <form onSubmit={updateDBJoin} >
            <input
              value={joinInput}
              type="email"
              className="h-12 w-[90vw] md:h-12 md:w-[550px] pl-4 md:pl-8 pr-20 placeholder:text-lg placeholder-white bg-transparent border-2 rounded-lg z-0 focus:shadow focus:outline-none"
              placeholder="Email"
              name="email"
              required
              onChange={handleJoinInput}
            />
            <div className="  absolute top-0 right-0">
              <input value="Join" type="submit"  className="h-12 w-28 md:h-12 md:w-40 text-black text-lg rounded-lg bg-white hover:bg-black hover:text-white hover:border-white hover:border-2" />
            </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img className="md:w-[650px]" src="assets/Header-graphic.png" alt="" />
      </div>
    </section>
  );
};

export default JoinStratos;
