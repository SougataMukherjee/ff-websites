import hussmannLogo from "@/public/images/homepage-testimonial-brand-7.png";
import jopLogo from "@/public/images/homepage-testimonial-brand-6.png";
import alchemyLogo from "@/public/images/homepage-testimonial-brand-5.png";
import motilalOswalLogo from "@/public/images/homepage-testimonial-brand-4.png";
import GridLogo from "@/public/images/homepage-testimonial-brand-3.svg";
import codeRythmLogo from "@/public/images/homepage-testimonial-brand-2.svg";
import ncdex from "@/public/images/homepage-testimonial-brand-1.svg";
import user1 from "@/public/images/homepage-testimonial-user-1.svg";
import user2 from "@/public/images/homepage-testimonial-user-2.svg";
import user3 from "@/public/images/homepage-testimonial-user-3.svg";
import { TestimonialData } from "@/types/HomePageTestimonials";

export const TESTIMONIALS: TestimonialData[] = [
  {
    ID: 1,
    LOGO: ncdex,
    DESCRIPTION: `Using FireFlink has transformed our testing process! Its intuitive interface and powerful automation capabilities have drastically reduced our testing time from 15 days to just 1 or 2 days and improved the accuracy of our results.
      The seamless integration with our existing tools and workflows made the transition smooth and effortless. FireFlink has also helped us refine our process, enabling us to derive a clear ROI.
      The NCDEX team availed three resources from the FireFlink team for the implementation, and they have been dedicated, helping us use the product efficiently. FireFlink’s customer support team has been exceptional, always ready to assist and ensure we get the most out of the product.
      Thanks to FireFlink, we’ve seen a significant boost in productivity and a notable reduction in software defects. Highly recommend it to any team looking to streamline their testing efforts!`,
    NAME: "Pritesh Ashar",
    ROLE: "Senior Vice President",
    CLIENT_NAME: "National Commodity & Derivatives Exchange Limited",
    AuthorName: "PA",
    AuthorImage: user1,
  },
  {
    ID: 2,
    LOGO: motilalOswalLogo,
    DESCRIPTION: `We are impressed with the FireFlink & the way the team has constantly supported to help our team. FireFlink is designed in such a manner that our test engineers adopted the automation techniques & standards so easily & quickly with renowned patterns and techniques.
          We would like to appreciate the quick response, approaches for the solution, their professionalism and meeting timelines.`,
    ParagraphOne:
      "We are impressed with the FireFlink & the way the team has constantly supported to help our team. FireFlink is designed in such a manner that our test engineers adopted the automation techniques & standards so easily & quickly with renowned patterns and techniques.",
    NAME: "Pankaj Purohit",
    ROLE: "Executive Vice President & Head of IT",
    CLIENT_NAME: "Motilal Oswal",
    AuthorName: "PP",
    AuthorImage: user2,
  },
  {
    ID: 3,
    LOGO: GridLogo,
    DESCRIPTION: `I wanted to take a moment to express my sincere appreciation for the incredible work FireFlink team has done. From the initial stages of planning to the final delivery, FireFlink team’s commitment has truly made a significant impact. I particularly wish to speak of training team very well and was always up for our doubts. They have always looked into our issues, no matter how big or small they were, they visited our office and were constantly available for all the issues we faced and helped us develop required program elements and develop Test suites in person, and finally the support team who were really quick in responding to our mails and queries.
          This product has really helped us resolve our main issue which was finding unique locators and automating critical test cases. Creating custom NLP in any programming language and using it in fireflink has reduced our coding duration.
          The Dataprovider feature to fetch data from excel sheets has made it very easy and fast to automate entering data into the table. Easier to debug the script using the failed status. Usage of module level test-case execution and step-group’s reusability feature is really reducing the rework in most of the test-cases. Creation/execution of Test suites and report generation is very simple, helps us get a broader idea of test-case status. I want to highlight one prompt change that your team has made in your latest build for our convenience, displaying the Total number of Parallel run execution on the top right corner really helped us while executing scripts in a better way. The best part is even Manual Testing Engineers, who have little to no knowledge in automation can contribute to automation testing as it is a user friendly product. Working with your team has been a pleasure, and I am grateful for the positive and collaborative relationship we’ve developed. Please extend my gratitude to each member of the team for their outstanding performance.`,
    ParagraphOne:
      "I wanted to take a moment to express my sincere appreciation for the incredible work FireFlink team has done. From the initial stages of planning to the final delivery, FireFlink team’s commitment has truly made a significant impact. I particularly wish to speak of training team very well and was always up for our doubts. They have always looked into our issues, no matter how big or small they were, they visited our office and were constantly available for all the issues we faced and helped us develop required program elements and develop Test suites in person, and finally the support team who were really quick in responding to our mails and queries.",
    ParagraphTwo:
      "This product has really helped us resolve our main issue which was finding unique locators and automating critical test cases. Creating custom NLP in any programming language and using it in fireflink has reduced our coding duration.",
    PragraphThree:
      "The Dataprovider feature to fetch data from excel sheets has made it very easy and fast to automate entering data into the table. Easier to debug the script using the failed status. Usage of module level test-case execution and step-group’s reusability feature is really reducing the rework in most of the test-cases. Creation/execution of Test suites and report generation is very simple, helps us get a broader idea of test-case status. I want to highlight one prompt change that your team has made in your latest build for our convenience, displaying the Total number of Parallel run execution on the top right corner really helped us while executing scripts in a better way. The best part is even Manual Testing Engineers, who have little to no knowledge in automation can contribute to automation testing as it is a user friendly product. Working with your team has been a pleasure, and I am grateful for the positive and collaborative relationship we’ve developed. Please extend my gratitude to each member of the team for their outstanding performance.",
    NAME: "Aayush Agrawal",
    ROLE: "CTO",
    CLIENT_NAME: "Grid.",
    AuthorName: "AA",
    AuthorImage: user3,
  },
  {
    ID: 4,
    LOGO: jopLogo,
    DESCRIPTION: `We’ve been using FireFlink for automation testing, and the results have exceeded our expectations.Their expertise and commitment to quality have significantly improved our software reliability.
          What stands out is their professionalism and responsiveness— they consistently meet project timelines.`,
    NAME: "Ravi Verma",
    ROLE: "Executive Vice President & Head of IT",
    CLIENT_NAME: "GetJop",
    AuthorName: "RV",
  },
  {
    ID: 5,
    LOGO: hussmannLogo,
    DESCRIPTION: `I wanted to express my gratitude for your proactive efforts in introducing an in-house implementation engineer. This initiative has significantly enhanced our comprehension of FireFlink. The exciting news is that we now have more team members who are proficient in FireFlink, thanks to this effort.`,
    NAME: "Ratheesh KS",
    ROLE: "Head of Software & controls team",
    CLIENT_NAME: "Hussmann",
    AuthorName: "RK",
  },
  {
    ID: 6,
    LOGO: alchemyLogo,
    DESCRIPTION: `We recognise that this will serve as a symbol of our successful collaboration. I wish you continued success in your endeavours.`,
    NAME: "Ronak Shah",
    ROLE: "CTO & Co-Founder",
    CLIENT_NAME: "Alchemy Tech",
    AuthorName: "RS",
  },
  {
    ID: 7,
    LOGO: codeRythmLogo,
    DESCRIPTION: `We are pleased to continue supporting our partnership and the strong collaborative relationship we share. Thank you for acknowledging the value of our partnership. We look forward to the continued success of our collaboration.`,
    NAME: "Amjid Backer",
    ROLE: "Co Founder & Director",
    CLIENT_NAME: "CodeRythm Technology Pvt Ltd",
    AuthorName: "AB",
  },
];
