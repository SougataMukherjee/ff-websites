import Logo from "@/public/images/fireflink-logo.svg";
import { PLATFORM_CARD_DATA_TYPE } from "@/types/PlatformCardData";
export const PLATFORM_CARD_DATA: PLATFORM_CARD_DATA_TYPE[] = [
  {
    ID: 1,
    // LOGO: Logo,
    HEADING: `Test Management Platform`,
    DESCRIPTION: `FireFlink has all of its testing assets in one place. FireFlink offers everything from automation script development to manual test case management, as well as defect tracking calls, all under one roof.`,
  },
  {
    ID: 2,
    LOGO: Logo,
    HEADING: `Highly Templatized Platform`,
    DESCRIPTION: `Manual test-case and defect tracking can be automated using FireFlink's help of user-created templates. It allows users to create and edit templates as well as access preloaded execution results, dashboards, and analytics.`,
  },
  {
    ID: 3,
    LOGO: Logo,
    HEADING: `Scriptless - NLP Techniques`,
    DESCRIPTION: `With FireFlink, writing automation test scripts is as simple as writing manual test cases. With 95% of the automation requirements met by NLP, simply input an action or a verification statement and begin developing the test script.`,
  },
  {
    ID: 4,
    LOGO: Logo,
    HEADING: `Data-Driven Tests`,
    DESCRIPTION: `Run iterative tests on the same automation test script using massive data from an external document in any format. FireFlink's clear and powerful user interface makes testing several data sets iteratively effortless.`,
  },
  {
    ID: 5,
    LOGO: Logo,
    HEADING: `Effortless Element Locator Generation`,
    DESCRIPTION: `Single clicks generates locators. FireFlink-Finder effectively builds a vast UI element repository, manages dynamic UI, and intelligently provides optimal locators for all software programmes, whether on the web, mobile, or enterprise.`,
  },
  {
    ID: 6,
    LOGO: Logo,
    HEADING: `A Dedicated Section for Execution`,
    DESCRIPTION: `Within FireFlink, an independent section is available for running test suites. With the test-development and execution components segregated, automation script maintenance is easier than ever.`,
  },
];
