import { OFFERING_TYPE } from "@/types/HomePageOffering";
import ActiveOne from "@/public/images/homepage-offering-1-active.svg";
import PassiveOne from "@/public/images/homepage-offering-1.svg";
import ActiveTwo from "@/public/images/homepage-offering-2-active.svg";
import PassiveTwo from "@/public/images/homepage-offering-2.svg";
import ActiveThree from "@/public/images/homepage-offering-3-active.svg";
import PassiveThree from "@/public/images/homepage-offering-3.svg";
import ActiveFour from "@/public/images/homepage-offering-4-active.svg";
import PassiveFour from "@/public/images/homepage-offering-4.svg";
import ActiveFive from "@/public/images/homepage-offering-5-active.svg";
import PassiveFive from "@/public/images/homepage-offering-5.svg";
export const OFFERING: OFFERING_TYPE[] = [
  {
    ID: 1,
    HEADING: `Training and Upskilling`,
    ACTIVE_IMG: {
      src: ActiveOne,
      alt: "offering-one",
    },
    PASSIVE_IMG: {
      src: PassiveOne,
      alt: "offering-one",
    },
    DESCRIPTION: ` <ul className="ff-homepage-offering-training-section-sub">
                  <li>
                    Test management training - Fullstack, web, mobile, & API
                  </li>
                  <li>
                    In-depth hands-on guided experience by professional trainers
                  </li>
                  <li>
                    Guidance to create web, mobile, and API test scripts from
                    scratch
                  </li>
                </ul>`,
  },
  {
    ID: 2,
    HEADING: `Audit and Assessment of Framework`,
    ACTIVE_IMG: {
      src: ActiveTwo,
      alt: "offering-two",
    },
    PASSIVE_IMG: {
      src: PassiveTwo,
      alt: "offering-two",
    },
    DESCRIPTION: `<ul className="ff-homepage-offering-training-section-sub">
                  <li>Analyze business workflow</li>
                  <li>Perform detailed assessment</li>
                  <li>Analyze business workflow</li>
                </ul>`,
  },
  {
    ID: 3,
    HEADING: `Express Methodology with Pre-configured Repository`,
    ACTIVE_IMG: {
      src: ActiveThree,
      alt: "offering-three",
    },
    PASSIVE_IMG: {
      src: PassiveThree,
      alt: "offering-three",
    },
    DESCRIPTION: `<ul className="ff-homepage-offering-training-section-sub">
                  <li>
                    Build the entire repository for the application under test
                  </li>
                  <li>Repository includes creating Page View</li>
                  <li>
                    Structuring, capturing UI elements and creating re-usable
                    libraries
                  </li>
                </ul>`,
  },
  {
    ID: 4,
    ACTIVE_IMG: {
      src: ActiveFour,
      alt: "offering-four",
    },
    PASSIVE_IMG: {
      src: PassiveFour,
      alt: "offering-four",
    },
    HEADING: `E2E Automation Implementation`,
    DESCRIPTION: `<ul className="ff-homepage-offering-training-section-sub">
                  <li>
                    Migration of current scripts to the FireFlink platform
                  </li>
                  <li>Derive scenarios and develop scripts on the platform </li>
                  <li>Operate and maintain </li>
                </ul>`,
  },
  {
    ID: 5,
    HEADING: `Traditional Tool Migration`,
    ACTIVE_IMG: {
      src: ActiveFive,
      alt: "offering-five",
    },
    PASSIVE_IMG: {
      src: PassiveFive,
      alt: "offering-five",
    },
    DESCRIPTION: `   <ul className="ff-homepage-offering-training-section-sub">
                  <li>
                    Seamless migration of scripts from Selenium to FireFlink
                  </li>
                  <li>
                    Test data & object repository migration via SeF migration
                    tool
                  </li>
                  <li>
                    Script migration through FireFlink&apos;s Acceleration Team
                  </li>
                </ul>`,
  },
];
