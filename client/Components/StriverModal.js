import { useRouter } from "next/router";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const StriverModal = ({ isVisible, setIsVisible }) => {
  const router = useRouter();
  const onApp = router.pathname === '/sponsors/app' || router.pathname === '/privacy_policy/app'
  return (
    <div
      style={{
        zIndex: "99999",
        display: isVisible && !onApp ? "block" : "none",
      }}
      className="fixed top-0 left-0 w-screen min-h-screen backdrop-blur"
      onClick={() => {
        setIsVisible(false);
      }}
    >
      <IoCloseSharp
        style={{
          top: 10,
          right: 20,
          position: "absolute",
          width: "30px",
          height: "30px",
        }}
        color="#fff"
        onClick={() => setIsVisible(false)}
      />
      <div
        className="text-white fixed rounded-3xl max-w-xl w-11/12 flex flex-col items-center justify-center bg-transparent mb-5"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "all",
          backgroundColor: "transparent",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img class="object-cover" src={"/images/striver.jpeg"} />
        <div className="mt-5 rounded-b-3xl flex justify-center items-center flex-col">
          <a
            href="https://striver.pulzion.in"
            className="text-white px-5 py-2 rounded-md uppercase tracking-wider bg-primaries-500 ease-in-out duration-500 mb-3"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default StriverModal;
