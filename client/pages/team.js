import React from "react";
import Head from 'next/head';
import styles from "../styles/team.module.css";
import Layout from "../Components/Layout";
import Image from "next/image";
import ProfileCard from "../Components/ProfileCard";
import SectionHeading from "../Components/SectionHeading";

const TeamPage = () => {
  const profiles = [
    // {
    //   name: "Ashutosh",
    //   surname: "Shaha",
    //   imageUrl: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/6Zr4VTa.jpg",
    //   designation: "Chairperson",
    //   socials: {
    //     linkedin: "https://www.linkedin.com/in/ashutosh-shaha/",
    //   },
    // },
    // {
    //   name: "Siddhi",
    //   surname: "Wakchaure",

    //   imageUrl: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/wgo56lh.jpg",
    //   designation: "Vice Chairperson",
    //   socials: {
    //     linkedin: "https://www.linkedin.com/in/siddhi-wakchaure-98b147198/",
    //   },
    // },
    {
      name: "Rohin Bhat",
      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/DrQKBgx.jpg",
      designation: "Secretary",

      linkedin: "https://www.linkedin.com/in/rohinbhat",
    },
    {
      name: "Bhavana Bafna",
      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/qMVRJNd.jpg",
      designation: "Treasurer",

      linkedin: "https://www.linkedin.com/in/bhavana-bafna-2b80991a6",
    },
    {
      name: "Sharayu Hiwarkhedkar",
      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/XtF0mWQ.jpg",
      designation: "Public Relations Officer",

      linkedin: "https://www.linkedin.com/in/sharayu-hiwarkhedkar-996a8b1b0",
    },
    {
      name: "Vimal Galani",

      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/gctrKTy.jpg",
      designation: "Technical Head",

      linkedin: "https://www.linkedin.com/in/vimal-galani-a7b977199/",
    },
    {
      name: "Rugved Somwanshi",
      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/MYeC06A.jpg",
      designation: "Technical Head",

      linkedin: "https://www.linkedin.com/in/rugved-somwanshi-29078417b/",
    },
    {
      name: "Akshat Sharma",
      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/KY2e5gD.jpg",
      designation: "Domain Director (Web & DevOps)",

      linkedin: "https://www.linkedin.com/in/akshat-sharma-2602/",
    },
    {
      name: "Aditya Kangune",

      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/zKht3vZ.jpg",
      designation: "Domain Director (ML & AI)",

      linkedin: "https://www.linkedin.com/in/aditya-kangune-0376671aa/",
    },
    {
      name: "Ojas Kund",
      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/ueWUJFE.jpg",
      designation: "Domain Director (Competitive Programming)",

      linkedin: "https://www.linkedin.com/in/ojas-kund/",
    },
    {
      name: "Aagaaz Ali Sayed",

      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/YVvRzwF.jpg",
      designation: "Marketing Head",

      linkedin: "https://www.linkedin.com/in/aagaaz-ali-sayed-1063851ba/",
    },
    {
      name: "Sakshi Harode",
      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/Sczmb38.jpg",
      designation: "Design Head",
      linkedin: "https://www.linkedin.com/in/sakshi-harode/",
    },
    {
      name: "Pranjali Desai",
      avatar: "https://pulzion22.s3.ap-south-1.amazonaws.com/team/JawtfQc.jpg",
      designation: "Content Head",
      linkedin: "https://www.linkedin.com/in/pranjali-desai-0090a2218/",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Pulzion'23 | Team</title>
        <meta name='description' content="Pulzion is the annual flagship event organized by PICT ACM
				Student Chapter (PASC). Pulzion consists of multiple events in
				technical as well as non-technical domains including coding
				competitions, mock placement interviews, business
				management-based events, design and development based contests
				and quizzing events."/>
      </Head>
      <div className="py-5 md:py-10">
        <SectionHeading>Meet Our Team</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 justify-center items-center mt-20">
          <ProfileCard
            className="col-span-full"
            name="Dr. Geetanjali Kale"
            avatar={"/profiles/tg.jpg"}
            designation="Teacher Guardian"
            linkedin="https://www.linkedin.com/in/dr-geetanjali-kale-17148922/"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 justify-center items-center mt-20">
          <ProfileCard
            name="Ashutosh Shaha"
            avatar="https://pulzion22.s3.ap-south-1.amazonaws.com/team/6Zr4VTa.jpg"
            designation="Chairperson"
            linkedin="https://www.linkedin.com/in/ashutosh-shaha/"
          />
          <ProfileCard
            name="Siddhi Wakchaure"
            avatar="https://pulzion22.s3.ap-south-1.amazonaws.com/team/wgo56lh.jpg"
            designation="Vice Chairperson"
            linkedin="https://www.linkedin.com/in/siddhi-wakchaure-98b147198/"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20 justify-center items-center mt-20">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
