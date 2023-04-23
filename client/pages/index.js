import PrimaryButton from "../Components/Button/PrimaryButton";
import Layout from "../Components/Layout";
import Typewriter from "typewriter-effect";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useRouter } from "next/router";
import Head from "next/head";
import { IoCalendarOutline } from "react-icons/io5";
import styles from "../styles/homeAnimation.module.css"
export default function Home() {
  const { user } = useContext(AppContext);
  const [exploring, setExploring] = useState(false);
  const router = useRouter();
  // useEffect(() => {
  //   let button = document.querySelector(".some-button");
  //   // let item = document.querySelector(".some-button .round");
  //   button.addEventListener("mouseenter", function (event) {
  //     this.classList += " animate";
  //     let buttonX = event.offsetX;
  //     let buttonY = event.offsetY;
  //     // if (buttonY < 24) {
  //     //   item.style.top = 0 + "px";
  //     // } else if (buttonY > 30) {
  //     //   item.style.top = 48 + "px";
  //     // }
  //     // item.style.left = buttonX + "px";
  //     // item.style.width = "1px";
  //     // item.style.height = "1px";
  //   });
  //   button.addEventListener("mouseleave", function () {
  //     // this.classList.remove("animate");
  //     // let buttonX = event.offsetX;
  //     // let buttonY = event.offsetY;
  //     // if (buttonY < 24) {
  //     //   item.style.top = 0 + "px";
  //     // } else if (buttonY > 30) {
  //     //   item.style.top = 48 + "px";
  //     // }
  //     // item.style.left = buttonX + "px";
  //   });
  // }, []);
  return (
    <Layout>
      <Head>
        <title>Pulzion'23</title>
        <meta
          name="description"
          content="Pulzion is the annual flagship event organized by PICT ACM
        Student Chapter (PASC). Pulzion consists of multiple events in
        technical as well as non-technical domains including coding
        competitions, mock placement interviews, business
        management-based events, design and development based contests
        and quizzing events."
        />
      </Head>
      <div
        className={` flex flex-col items-center justify-center pb-5 ${exploring ? "" : "relative"
          }  `}
        style={{
          paddingTop: "10vh",
          zIndex: 20,
        }}
      >
        <div
          className={`flex flex-col items-center justify-center gap-6 max-w-7xl w-11/12 mx-auto`}
        >
          <p className="text-3xl font-bold tracking-wide text-center text-primaries-100 md:text-5xl">
            PICT ACM Student Chapter
          </p>
          <p className="text-lg italic font-normal text-center text-primaries-100 md:text-xl">
            presents
          </p>
          <img src="logo.png" className="w-full" />
          <p className="items-center justify-center my-5 text-2xl font-bold tracking-wide text-center text-primaries-100 md:text-3xl">
            The annual techfest of PICT ACM Student Chapter
          </p>
          <div className="flex flex-row items-center justify-center gap-4 text-2xl font-bold md:gap-6 text-primaries-100 md:text-5xl">
            <IoCalendarOutline /> <p>3rd, 4th &amp; 5th May</p>
          </div>
          <div className="flex flex-col gap-6 xl:mt-5 sm:flex sm:flex-row">
            {/* <button
              // class="primary-button"
              className={`${styles.animated} some-button`}
              // style={{
              //   clipPath: "polygon(12% 0, 0% 30%, 0 100%, 88% 100% , 100% 65%, 100% 0)",
              // }}
              // style={{                
              //   backgroundImage: "linear-gradient(to right, #172947c5, black)",
              //   opacity: 0.95,
              //   position: "relative",
              //   borderWidth: "2px",
              //   borderStyle: "solid",
              //   borderRadius: "550px",
              //   width: "250px",
              //   height: "48px",
              //   overflow: "hidden",
              //   backgroundColor: "transparent",
              //   textTransform: "uppercase",
              //   color: "white",
              //   fontWeight: "700px",
              // }}
              // className="bg-gradient-to-br from-[#172947c5] to-black opacity-95 relative border-2 border-solid rounded-[550px] w-[250px] h-[48px] overflow-hidden bg-transparent uppercase text-white text-sm font-bold"
              onClick={() =>
                user?.id ? router.push("/events") : router.push("/register")
              }
            >
              {user?.id ? "Register For Events" : "Register Now"}
              <span class="round" />
            </button> */}
            <button className={`${styles.animated} some-button`}
              onClick={() =>
                user?.id ? router.push("/events") : router.push("/register")
              }
            >            
              <span className="italic text-xl tracking-normal">{user?.id ? "Register For Events" : "Register Now"}</span>
            </button>
            {/* <button
              // className="bg-gradient-to-r shadow-[#630834] hover:border-blue-800 from-[#172947c5] to-black opacity-95 relative border-2 border-solid rounded-[550px] w-[250px] h-[48px] overflow-hidden bg-transparent uppercase text-white text-sm font-bold"
              // className={`${styles.animate} before:h-[100%] after:text-center relative z-20 after:absolute after:inset-[5px] after:py-5 after:bg-gradient-to-br from-[#172947c5] to-black after:bg-opacity-100 after:w-[96%] before:absolute before:w-[100%] before:shadow-[#630834a2] before:shadow-[20px_20px_5px_2px] before:bg-[#630834] before:inset-0 italic w-[250px] h-[70px] overflow-hidden bg-transparent uppercase text-white text-sm font-bold`}                
              className={`${styles.animate} relative z-20 italic w-[250px] h-[70px] overflow-hidden bg-transparent uppercase text-white text-sm font-bold`}                
              style={{
                clipPath: "polygon(12% 0, 0% 30%, 0 100%, 88% 100% , 100% 65%, 100% 0)",
              }}
              onClick={() => setExploring(() => !exploring)}
            >
              {exploring ? " Go back Main Page" : "Explore"}
              <span class="round" />
            </button> */}
            <button className={`${styles.animated}`} onClick={() => setExploring(() => !exploring)}>
              <span className="italic text-xl tracking-normal">{exploring ? " Go back Main Page" : "Explore"}</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}