import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import SuccessCard from "../SuccessCard";

const WaitListForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
            className="bg-black ml-20 cursor-pointer hover:bg-gray-700 text-white font-semibold py-2 px-16 rounded-xl border-0 shadow-md-full"
          />
        </div>
      </form>
    </div>
  );
};

export default WaitListForm;
