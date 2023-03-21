import { useRouter } from "next/router";
import React, { useState } from "react";
import PrimaryButton from "./Button/PrimaryButton";
import EventCard from "./EventCard";
import headerImg from "../public/astronaut.svg";

// import TrackVisibility from "react-on-screen";
// const events = [
//   {
//     name: "Just Coding",
//     logo: "/JustCoding.png",
//     type: "Technical",
//     tagline: "while( ! succeed == try() ){keepCoding();}",
//   },
//   {
//     name: "Bug Off",
//     logo: "/BugOff.png",
//     type: "Technical",
//     tagline: "Where there is a code, there is a bug!",
//   },
//   {
//     name: "Just Coding",
//     logo: "/JustCoding.png",
//     type: "Technical",
//     tagline: "while( ! succeed == try() ){keepCoding();}",
//   },
//   {
//     name: "Bug Off",
//     logo: "/BugOff.png",
//     type: "Non Technical",
//     tagline: "Where there is a code, there is a bug!",
//   },
//   {
//     name: "Just Coding",
//     logo: "/JustCoding.png",
//     type: "Non Technical",
//     tagline: "while( ! succeed == try() ){keepCoding();}",
//   },
//   {
//     name: "Bug Off",
//     logo: "/BugOff.png",
//     type: "Technical",
//     tagline: "Where there is a code, there is a bug!",
//   },
// ];

const Tabs = ({ events }) => {
  console.log("IN TABS");
  console.log(events);
  const tabs = ["All", "Technical", "Non Technical"];
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);

  const changeTabOnClick = (index) => {
    setActiveTab(index);
  };

  let visible = events;

  if (activeTab == 0) {
    visible = events;
  } else if (activeTab == 1) {
    visible = visible.filter((event) => event.type === "Technical");
  } else {
    visible = visible.filter((event) => event.type === "Non Technical");
  }

  return (
    <div className="tabs-body">
      <TabHeader
        data={tabs}
        click={changeTabOnClick}
        tabs={tabs}
        activeId={activeTab}
      />
      <TabContent data={visible} activeId={activeTab} router={router} />
    </div>
  );
};

// class Tabs extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       activeTab: 0,
//       data: this.props.events,
//     };

//     this.tabs = ["All", "Technical", "Non Technical"];

//     this.changeTabOnClick = this.changeTabOnClick.bind(this);
//   }

//   changeTabOnClick(index) {
//     let data = [];
//     if (index == 0) {
//       data = events;
//     } else if (index == 1) {
//       data = events.filter((event) => event.type === "Technical");
//     } else {
//       data = events.filter((event) => event.type === "Non Technical");
//     }
//     this.setState({
//       activeTab: index,
//       data: data,
//     });
//   }

//   render() {
//     return (
//       <div className="tabs-body">
//         <TabHeader
//           data={this.tabs}
//           click={this.changeTabOnClick}
//           tabs={this.tabs}
//           activeId={this.state.activeTab}
//         />
//         <TabContent data={this.state.data} activeId={this.state.activeTab} />
//       </div>
//     );
//   }
// }

class TabHeader extends React.Component {
  doClick(index, event) {
    this.props.click(index);
  }

  render() {
    let activeClass = this.props.activeId;

    let tabs = this.props.tabs.map((item, index) => {
      return (
        <li
          className={`${
            activeClass === index ? "active" : ""
          } md:w-1/3 md:mx-5`}
        >
          <a
            onClick={this.doClick.bind(this, index)}
            className="bg-primaries-800"
          >
            <span className="text-xl">{item}</span>
          </a>
        </li>
      );
    });

    return (
      <ul className="flex flex-col justify-center tabs-header md:flex-row">
        {tabs}
      </ul>
    );
  }
}

class TabContent extends React.Component {
  render() {
    return (
      <>
        {this.props?.data?.length === 0 &&
          this.props.router?.pathname === "/my_events" && (
            <div className="flex flex-col items-center justify-center w-full gap-4 mt-10 md:mt-20 md:gap-8">
              {/* {({ isVisible }) => (
                
              )} */}
              <p className="text-3xl font-bold text-center md:text-5xl text-primaries-100">
                Registered Events will be visible after verification.
              </p>
              <PrimaryButton onClick={() => this.props.router.push("/events")}>
                Register Now
              </PrimaryButton>
            </div>
          )}
        {/* <div
            className={"banner"}
            style={{
              position: "absolute",
              top: " 50%",
              left: 0,
              zIndex: -1,
            }}
          >
            <img src={headerImg.src} alt="Header Img" />
          </div> */}
        <div className="grid items-center justify-center grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10">
          {this.props.data?.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </>
    );
  }
}

export default Tabs;
