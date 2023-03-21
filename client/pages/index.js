import PrimaryButton from "../Components/Button/PrimaryButton";
import Layout from "../Components/Layout";
import Typewriter from "typewriter-effect";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useRouter } from "next/router";
import Head from "next/head";
import { IoCalendarOutline } from "react-icons/io5";
// import home.module.css
export default function Home() {
  const { user } = useContext(AppContext);
  const [exploring, setExploring] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let button = document.querySelector(".primary-button");
    let item = document.querySelector(".primary-button .round");
    button.addEventListener("mouseenter", function (event) {
      this.classList += " animate";
      let buttonX = event.offsetX;
      let buttonY = event.offsetY;
      if (buttonY < 24) {
        item.style.top = 0 + "px";
      } else if (buttonY > 30) {
        item.style.top = 48 + "px";
      }
      item.style.left = buttonX + "px";
      item.style.width = "1px";
      item.style.height = "1px";
    });
    button.addEventListener("mouseleave", function () {
      this.classList.remove("animate");
      let buttonX = event.offsetX;
      let buttonY = event.offsetY;
      if (buttonY < 24) {
        item.style.top = 0 + "px";
      } else if (buttonY > 30) {
        item.style.top = 48 + "px";
      }
      item.style.left = buttonX + "px";
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Pulzion'22</title>
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
          paddingTop: "0vh",
        }}
      >
        <div
          className={`flex flex-col items-center justify-center gap-4 max-w-7xl w-11/12 mx-auto`}
        >
          <p className="text-3xl font-bold tracking-wide text-center text-primaries-100 md:text-5xl">
            PICT ACM Student Chapter
          </p>
          {/* <img
            src="https://pict.acm.org/static/logo-61e5ab630d7c60480cb27df8e79abd63.png"
            className="w-40"
          /> */}
          <p className="text-lg font-normal text-center text-primaries-100 md:text-xl">
            presents
          </p>
          <img src="logo.png" className="w-full" />
          <p className="items-center justify-center my-5 text-2xl font-bold tracking-wide text-center text-primaries-100 md:text-3xl">
            An annual techfest of PICT ACM Student Chapter
          </p>
          <div className="text-center">
            {/* <Typewriter
              options={{
                strings: ["Celebrating 10 years of success..."],
                autoStart: true,
                loop: true,
                wrapperClassName:
                  "text-primaries-300 font-bold text-2xl md:text-3xl tracking-wide text-center items-center justify-center",
                delay: 50,
                cursorClassName: "text-center",
              }}
            /> */}
          </div>
          <div className="flex flex-row items-center justify-center gap-4 text-2xl font-bold md:-mt-10 md:gap-6 text-primaries-100 md:text-5xl">
            <IoCalendarOutline /> <p>12th, 13th &amp; 14th April</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex sm:flex-row">
            <button
              class="primary-button"
              style={{backgroundImage: "linear-gradient(to right, #172947c5, black)" ,opacity : 0.95, position:"relative", borderWidth: "2px", borderStyle: "solid", borderRadius: "550px", width: "250px", height: "48px", overflow: "hidden", backgroundColor: "transparent", textTransform: "uppercase", color:"white", fontWeight: "700px"}}
              // className="bg-gradient-to-br from-[#172947c5] to-black opacity-95 relative border-2 border-solid rounded-[550px] w-[250px] h-[48px] overflow-hidden bg-transparent uppercase text-white text-sm font-bold"
              onClick={() =>
                user?.id ? router.push("/events") : router.push("/register")
              }
            >
              {user?.id ? "Register For Events" : "Register Now"}
              <span class="round" />
            </button>

            <button
              // className="relative border-2 border-solid border-primaries-500 rounded-[550px] w-[250px] h-[48px] overflow-hidden bg-transparent uppercase text-white text-sm font-bold"
              class="primary-button"
              className="bg-gradient-to-r hover:border-blue-800 from-[#172947c5] to-black opacity-95 relative border-2 border-solid rounded-[550px] w-[250px] h-[48px] overflow-hidden bg-transparent uppercase text-white text-sm font-bold"
              onClick={() => setExploring(() => !exploring)}
            >
              {exploring ? " Go back Main Page" : "Explore"}
              <span class="round" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

