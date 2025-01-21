type FinderServiceData = {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  buttonLabel: string;
};
export const FinderServiceData: FinderServiceData[] = [
  {
    id: 1,
    title: "Web Locator Finder",
    description:
      "In most cases, the success or failure of an automation test script rests heavily on the process of locating UI elements. FireFlink Finder greatly simplifies the laborious task of generating web UI element locators.",
    bullets: [
      "Auto prioritization of locators",
      "Generates advanced relative XPaths",
      "Captures iframe and SVG elements",
      "Management of Dynamic UI elements",
    ],
    buttonLabel: "Read More",
  },
  {
    id: 2,
    title: "Mobile Locator Finder",
    description:
      "FireFlink Finder is highly proficient in working with mobile UI components. The tool offers UI-element locating solutions for Android and iOS apps. To identify locators, users can connect their mobile devices locally or use virtual devices.",
    bullets: [
      "Generates locators for Emulators/Simulators",
      "Pause and resume recording sessions",
      "Auto set desired capabilities",
      "Independent of 3rd party servers",
    ],
    buttonLabel: "Read More",
  },
  {
    id: 3,
    title: "Salesforce Locator Finder",
    description:
      "For applications developed on top of the Salesforce platform, FireFlink Finder includes a fairly straightforward method of dealing with UI element locators. Locators for UI components can be retrieved with a single click in FireFlink Finder.",
    bullets: [
      "Open shadow DOM-based elements management",
      "Identifies elements in complicated Iframes",
      "Accommodative to platform customizations",
      "Dynamic element identification",
    ],
    buttonLabel: "Read More",
  },
  {
    id: 4,
    title: "MS Dynamics 365 Locator Finder",
    description:
      "Users of FireFlink Finder can use accelerated locator methods to find hard-to-find UI element locators for applications that is based on MS Dynamics 365.",
    bullets: [
      "Open shadow DOM-based element management",
      "Identifies elements in complicated iFrames",
      "Accommodative to platform customizations",
      "Dynamic element identification",
    ],
    buttonLabel: "Read More",
  },
];
