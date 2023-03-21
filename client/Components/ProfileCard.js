import React from "react";
import styles from "../styles/team.module.css";

const ProfileCard = ({
  name,
  avatar,
  designation,
  linkedin,
  ...otherProps
}) => {
  return (
    <div
      className={otherProps?.className}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.avatar_bg}>
        <img src={avatar} className={styles.custom_avatar} alt="profile" />
        <div className={`${styles.social_container}`}>
          <ul class={styles.social_icons}>
            <li>
              <a href={linkedin} target="_blank">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.blur_bg} shadow-2xl`}></div>
      </div>
      <div className={styles.details}>
        <h3 className={`${styles.name} text-blue-400`}>{name}</h3>
        <h5 className={`${styles.designation} text-blue-300`}>{designation}</h5>
      </div>
    </div>
  );
};

export default ProfileCard;
