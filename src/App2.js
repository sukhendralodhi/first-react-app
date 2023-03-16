// import React from "react";
import GetImageUrl from "./Utils";

const Avatar = ({pesron,size}) => {
  return (
    <div className="bg-white px-24 py-6">
    {/* <h3 className="text-center mb-4 text-xl">{pesron.name}</h3> */}
      <img
        className="rounded-full"
        src={GetImageUrl(pesron)}
        alt="Lin Anything"
        width={size}
        height={size}
      />
    </div>
  );
};

function App2() {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="flex">
      <Avatar pesron={{ name: "Lin Lyning", imageId: "YfeOqp2" }} size={100} />
      <Avatar pesron={{ name: "Lin Lyning", imageId: "OKS67lh" }} size={80} />
      <Avatar pesron={{ name: "Lin Lyning", imageId: "1bX5QH6" }} size={60} />
      </div>
    </div>
  );
}

export default App2;
