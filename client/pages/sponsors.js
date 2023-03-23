import Head from "next/head";
import Layout from "../Components/Layout";
import Sponsors from "../Components/Sponsors";
import { IoCall} from "react-icons/io5";
// import Test from '../Components/Test'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Pulzion'23 | Sponsors</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full gap-4 mt-10 text-center md:mt-20 md:gap-8">
        <p className="text-3xl font-bold text-center md:text-5xl text-primaries-100">
          We Are Open For Sponsorship
        </p>
        <p className="text-base text-white">
          For more details contact :
        </p>      
        <p className="text-lg text-white">
          Om Shinde -{" "}
          <a
            className="flex-auto hover:opacity-50"
            href="tel: 8668355548"
            target="_blank"
          >
            (+91) 8668355548
          </a>
        </p>        
        <p className="-mt-5 text-lg text-white">
          Dheeraj Mhaske  -{" "}
          <a
            className="flex-auto hover:opacity-50"
            href="tel:8805073812"
            target="_blank"
          >
            (+91) 8805073812
          </a>
        </p>        
        <p className="-mt-5 text-lg text-white">
          <a
            className="flex-auto hover:opacity-50"
            href="mailto: marketing.pasc@gmail.com"
            target="_blank"
          >
            marketing.pasc@gmail.com
          </a>
        </p>
      </div>

      {/* <Sponsors></Sponsors> */}
    </Layout>
  );
}
