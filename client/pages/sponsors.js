import Head from "next/head";
import Layout from "../Components/Layout";
import Sponsors from "../Components/Sponsors";
import { IoCall } from "react-icons/io5";
import SponsorsCard from "../Components/SponsorsCard";
import SectionHeading from "../Components/SectionHeading";
// import Test from '../Components/Test'

export default function Home() {

  //   Magicflare: Title Sponsor
  // Jambore: Event Sponsor
  // Nestle: Refreshment Sponsor
  // Postman: Workshop Partner

  const sponsors = [
    {
      "id": 1,
      "name": "Jamboree",
      "imgUrl": "./jamboree_white8.png",
      "type": "Event Sponsor",

    },
    {
      "id": 2,
      "name": "Postman",
      "imgUrl": "./postman.png",
      "type": "Workshop Sponsor",

    },
    {
      "id": 3,
      "name": "Nestle",
      "imgUrl": "./nestle.png",
      "type": "Refreshment Partner",

    },
    {
      "id": 4,
      "name": "Budhani Bros",
      "imgUrl": "./budhani2.png",
      "type": "Snack Partner",

    }
    
  ];

  return (
    <Layout>
      <Head>
        <title>Pulzion'23 | Sponsors</title>
      </Head>
      <div className="container py-8 mx-auto">
        <SectionHeading children={"Sponsors"} />
        <div className="flex items-center justify-center mt-10">
          <SponsorsCard  
                name = "Magicflare"
                imgUrl = "./magicflare.png"
                type = "Title Sponsor"
          />
        </div>
        <div className="flex flex-wrap items-center justify-around w-full h-full py-2">
          {
            sponsors.map((sponsor) => {
              return (
                <SponsorsCard 
                  key={sponsor.id}  
                  name={sponsor.name}
                  imgUrl={sponsor.imgUrl}
                  type={sponsor.type}
                />
              )
            })
          }
        </div>
      </div>

      {/* <Sponsors></Sponsors> */}
    </Layout>
  );
}
