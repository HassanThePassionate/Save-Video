import { Check } from "lucide-react";
import React from "react";

const Submit = () => {
  return (
    <div className="flex items-center flex-col gap-4 p-8">
      <h1 className="text-5xl sm:text-7xl font-bold text-center">THANK YOU!</h1>
      <Check color="green" size={100} fontWeight={900} />
      <p className="text-center text-lg">
        Thanks a bunch for filling that out. It means a lot to us, just like you
        do! We really appreciate you giving us a moment of your time today.
        Thanks for being you.
      </p>
    </div>
  );
};

export default Submit;
