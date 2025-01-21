import linkedInWhite from "@/public/images/Link4.svg";

import fbWhite from "@/public/images/Link3.svg";
import youtubeWhite from "@/public/images/Youtube.svg";
import twitterWhite from "@/public/images/Twitter.svg";
import instagramWhite from "@/public/images/Link.svg";

const FooterData = {
  CompanyWidget: [
    {
      id: 1,
      title: "Get In Touch",
      description:
        "Don’t miss any updates of our new templates and extensions.!",
    },
  ],
  AboutWidget: [
    {
      id: 1,
      title: "Why Fireflink?",
      menuItems: [
        {
          id: 1,
          url: "#",
          text: "FireFlink Platform",
        },
        {
          id: 2,
          url: "#",
          text: "FireFlink Finder",
        },

        {
          id: 4,
          url: "#",
          text: "FireCloud",
        },
        {
          id: 5,
          url: "#",
          text: "FireAssests",
        },
      ],
    },
    {
      id: 2,
      title: "Solutions",
      menuItems: [
        {
          id: 1,
          url: "#",
          text: "Sales force",
        },
        {
          id: 2,
          url: "#",
          text: "MS Dynamics",
        },
      ],
    },
  ],

  Finder: [
    {
      id: 1,
      title: "FireFlink Finder",
      menuItems: [
        {
          id: 1,
          url: "/fireflink-finder/web-locator-finder",
          text: "Web Locator",
        },
        {
          id: 2,
          url: "/fireflink-finder/mobile-app-locator-finder",
          text: "Mobile Locator",
        },
        {
          id: 3,
          url: "/fireflink-finder/msdynamics-locator-finder",
          text: "MS Dynamics Locator",
        },
        {
          id: 4,
          url: "/fireflink-finder/salesforce-locator-finder",
          text: "Salesforce Locator",
        },
      ],
    },
  ],
  Platform: [
    {
      id: 1,
      title: "FireFlink Platform",
      menuItems: [
        {
          id: 1,
          url: "/fireflink-platform/web-automation-testing",
          text: "Web Automation Testing",
        },
        {
          id: 2,
          url: "/fireflink-platform/mobile-app-automation-testing",
          text: "Mobile Automation Testing",
        },
        {
          id: 3,
          url: "/fireflink-platform/api-automation-testing",
          text: "API Automation Testing",
        },
        {
          id: 4,
          url: "/fireflink-platform/visual-testing",
          text: "Visual Testing",
        },
        {
          id: 5,
          url: "/fireflink-platform/ui-performance-testing",
          text: "UI Performance Testing",
        },
        {
          id: 6,
          url: "/fireflink-platform/manual-test-case-management",
          text: "Manual Testcase Management",
        },
        {
          id: 7,
          url: "/fireflink-platform/defect-management",
          text: "Defect Management",
        },
      ],
    },
  ],
  Solutions: [
    {
      id: 1,
      title: "Solutions",
      menuItems: [
        {
          id: 1,
          url: "/solution/salesforce-automation-testing",
          text: "Salesforce",
        },
        {
          id: 2,
          url: "/solution/msdynamics-automation-testing",
          text: "MS Dynamics",
        },
        {
          id: 3,
          url: "/solution/sap-automation-testing",
          text: "SAP",
        },
        {
          id: 4,
          url: "/solution/oracle-automation-testing",
          text: "Oracle",
        },

        {
          id: 5,
          url: "/solution/service-now-automation-testing",
          text: "Service Now",
        },
        {
          id: 6,
          url: "/solution/workday-automation-testing",
          text: "Workday",
        },
        {
          id: 7,
          url: "/solution/peoplesoft-automation-testing",
          text: "PeopleSoft",
        },
      ],
    },
  ],
  Pricing: [
    {
      id: 1,
      title: "Pricing",
      menuItems: [
        {
          id: 1,
          url: "/fireflink-platform-pricing",
          text: "Cloud Basic",
        },
        {
          id: 2,
          url: "/fireflink-platform-pricing",
          text: "Cloud Professional",
        },
        {
          id: 3,
          url: "/fireflink-platform-pricing",
          text: "On Premises - Enterprise",
        },
      ],
    },
  ],

  Resources: [
    {
      id: 1,
      title: "Resources",
      menuItems: [
        {
          id: 1,
          url: "/blogs",
          text: "Blogs",
        },
        {
          id: 2,
          url: "/case-studies",
          text: "Case Studies",
        },
        {
          id: 3,
          url: "/documentation",
          text: "Documentation",
        },
        {
          id: 4,
          url: "/video-tutorial",
          text: "Video Tutorials",
        },
        {
          id: 5,
          url: "/release-notes/latest-version",
          text: "Release Notes",
        },
        {
          id: 6,
          url: "/prerequisites/cloud-version",
          text: "Pre Requisites",
        },
      ],
    },
  ],

  socialIcon: [
    {
      id: 1,
      url: "https://www.facebook.com/profile.php?id=100086345346795",
      iconWhite: fbWhite,
      iconLabel: "Checkout Our Profile in Facebook",
    },
    {
      id: 2,
      url: "https://twitter.com/fire_flink",
      iconWhite: twitterWhite,
      iconLabel: "Checkout Our Profile in Twitter",
    },
    {
      id: 3,
      url: "https://www.linkedin.com/company/fireflink/",
      iconWhite: linkedInWhite,
      iconLabel: "Checkout Our Profile in LinkedIn",
    },
    {
      id: 4,
      url: "https://www.youtube.com/channel/UCdrrwqOs_nBJrGZrJnuvubw",
      iconWhite: youtubeWhite,
      iconLabel: "Checkout Our Profile in Youtube",
    },
    {
      id: 5,
      url: "https://instagram.com/fire_flink",
      iconWhite: instagramWhite,
      iconLabel: "Checkout Our Profile in Instagram",
    },
  ],
  copywrite: "© FireFlink 2019 All rights reserved.",
};
export default FooterData;
