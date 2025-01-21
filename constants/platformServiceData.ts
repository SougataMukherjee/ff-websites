type PlatformServiceData = {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  buttonLabel: string;
};
export const platformServiceData: PlatformServiceData[] = [
  {
    id: 1,
    title: "Web Automation Testing",
    description:
      "Automation of web applications is heading towards codeless processes with simple NLP based scripts to handle all types of actions and verifications effortlessly. FireFlink has the perfect blend of all popular test automation framework types and beyond.",
    bullets: [
      "NLP based scripting",
      "Automation scripts are mapped directly to test cases",
      "Separate sections for test development and test execution phases",
      "A single script can contain web, android, iOS, and API steps",
    ],
    buttonLabel: "Read More",
  },
  {
    id: 2,
    title: "Mobile Automation Testing",
    description:
      "FireFlink is an indispensable platform for developing mobile scripts! With its mobile-specific NLP library and streamlined approach to automation, FireFlink is paving the way for a new era in mobile app testing.",
    bullets: [
      "Instant test setup",
      "A single mobile script can run on both Android and iOS apps",
      "No maximum number of devices for concurrent execution, unlike other tools",
      "A single suite can be configured to run on multiple environments",
    ],
    buttonLabel: "Read More",
  },
  {
    id: 3,
    title: "API Automation Testing",
    description:
      "Create Web Service test scripts effortlessly. Get on your toes with our Web Service testing, which drives you unstoppably towards testing the deep Web Service layers in minutes with all their complexities.",
    bullets: [
      "Scripting language expertise is not required",
      "Manual API test steps converted to API automation scripts",
      "Hassle free management of custom assertions",
      "Rich reporting feature",
    ],
    buttonLabel: "Read More",
  },
  {
    id: 4,
    title: "Visual Testing",
    description:
      "Real users may notice problems that developers, marketers, and product owners may miss because of their familiarity with the site. This kind of information is vital for enhancing the quality of products and services for customers. FireFlink offers hassle-free UX testing solutions.",
    bullets: [
      "Using NLP for User Experience",
      "UX testing evaluation facilities included into the test script at every test step",
      "Ability to omit unwanted parts of the Golden Image",
      "A visual testing score is presented for every comparison",
    ],
    buttonLabel: "Read More",
  },
  {
    id: 5,
    title: "UI Performance Testing",
    description:
      "The success of a website or app is directly proportional to the quality of its user interface. Through FireFlink's visual testing features, users can uncover quick testing methods that boost the usability of a website or app's user interface and eliminate any issues that may lead to customer dissatisfaction.",
    bullets: [
      "Criteria for auditing performance tests",
      "NLPs to effectively test user interfaces",
      "Page analysis snapshots taken at any point during testing",
      "Compatible with a wide variety of platforms, from desktops to mobile phones",
    ],
    buttonLabel: "Read More",
  },
  {
    id: 6,
    title: "Manual Test Case management",
    description:
      "Manual test case management is made simpler within FireFlink. Its simple UI allow test engineers to quickly comprehend and cover testing requirements to manage test cases, with one-on-one mapping of manual test case entries with their corresponding automation test scripts",
    bullets: [
      "Mapping Test Cases to their corresponding automation scripts",
      "Clear traceability with tree structure view",
      "Customizable manual test case templates",
      "Generation of manual test execution result analytics",
    ],
    buttonLabel: "Read More",
  },
  {
    id: 7,
    title: "Defect Management",
    description:
      "Defects within FireFlink provide a foundation for critical feedback to improve the software development processes. FireFlink delivers a dependable bug-tracking solution that ensures software quality assurance so that software releases can go off without a hitch.",
    bullets: [
      "Customizable defect templates",
      "Configurable defect life cycle templates",
      "Easy defect logging upon automation step failure",
      "Auto generation of 'Steps to reproduce the defects' in the issue creation form",
    ],
    buttonLabel: "Read More",
  },
];
