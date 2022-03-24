import React, { useState } from "react";

const WaitListForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <form>
        <input
          value={firstName}
          type="text"
          className={` appearance-none placeholder-black block w-80 bg-white text-black border
              border-gray-300 rounded-xl border-0 shadow-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100`}
          placeholder="First Name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          value={lastName}
          type="text"
          className={`  placeholder-black block w-80 bg-white text-black border
              border-gray-300 rounded-xl border-0 shadow-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100`}
          required
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
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
