import React, { useState, useRef } from "react";
import styles from "../styles/sponsors.module.css";
import SectionHeading from "./SectionHeading";

export default function SponsorsCard({ 
    id,
    name,
    imgUrl,
    type
 }) {
    const [xRotation, setXRotation] = useState(0);
    const [yRotation, setYRotation] = useState(0);
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const sizesboxRef = useRef(null);
    const purchaseRef = useRef(null);

    function handleMouseMove(event) {
        const card = cardRef.current;
        const { offsetWidth: width, offsetHeight: height } = card;
        const { clientX, clientY } = event;
        const x = clientX - card.offsetLeft - width / 6;
        const y = clientY - card.offsetTop - height / 6;
        var mult = 40;
        setXRotation((y / height / 2) * mult);
        setYRotation((x / width / 2) * mult);
    }

    function handleMouseLeave() {
        setXRotation(0);
        setYRotation(0);
    }

    return (

        <div
            className={`${styles.sponsorscard} bg-gradient-to-br from-[#172947c5] to-black my-6  w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mx-12 flex flex-col  relative`}
            ref={cardRef}
            style={{
                transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img
                ref={imgRef}
                src={imgUrl}
                alt="sponsor image"
                className="z-[99999] w-[270px] h-[270px]"
            />
            <h2 className={`${styles.sponsorstitle} whitespace-pre text-2xl py-3 text-center text-white font-bold`} >
                {/* {sponsor.type} */}
                {type}
            </h2>
        </div >
    );
}