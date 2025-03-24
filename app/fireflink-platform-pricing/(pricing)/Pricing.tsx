"use client";
import Image from "next/image";
import styles from "./Pricing.module.scss";
import RectStick from "@/public/images/rect.svg";
import { Icon, useDeviceType } from "website-pixel-react";
const Pricing = () => {
  const { isMobile } = useDeviceType();

  const data = [
    {
      category: "Manual Testcase Management",
      features: [
        {
          name: "Manual testcase templates",
          availability: [true, true, true], // Tick for all plans
        },
        {
          name: "Traceability of test cases",
          availability: [true, true, false], // Cross for last plan
        },
        {
          name: "Manual test suite execution",
          availability: [true, false, false], // Cross for last two
        },
        {
          name: "Manual test execution result analytics",
          availability: [true, true, true],
        },
      ],
    },
    {
      category: "UI Element Identification",
      features: [
        {
          name: "Access to FireLink Finder tool",
          availability: [true, false, false], // Cross for last two
        },
        {
          name: "Element recognition on Web, Android & iOS",
          availability: [true, true, true],
        },
        {
          name: "Export element locators in Excel & CSV format",
          availability: [true, true, false], // Cross for last plan
        },
        {
          name: "Automatic generation of optimal locators",
          availability: [true, true, true],
        },
        {
          name: "Identify dynamic elements with the reference of static elements",
          availability: [true, false, false], // Cross for last two
        },
        {
          name: "Shadow DOM element identification",
          availability: [true, true, true],
        },
      ],
    },
  ];

  const plans = [
    "Free Trial License",
    "Cloud Professional",
    "On Premise - Enterprise",
  ];
  const mobilePlans = ["Free Trial", "Professional", "Enterprise"];

  return (
    <div
      className={styles.container}
      style={{ margin: isMobile ? "0" : "32px" }}
    >
      {/* Header Table */}
      <table className={styles.headerTable}>
        <thead>
          <tr
            className={styles.planHeader}
            style={{ height: isMobile ? "60px" : "100px" }}
          >
            <th className={styles.featureColumn}>Feature</th>
            {(isMobile ? mobilePlans : plans).map((plan, index) => (
              <>
                <Image src={RectStick} alt="stick" width={1} height={35} />
                <th key={index} className={styles.planColumn}>
                  {plan}
                </th>
              </>
            ))}
          </tr>
        </thead>
      </table>

      {/* Gap Between Tables */}
      <div className={styles.tableGap}></div>

      {/* Body Table */}

      <div className={styles.tableWrapper}>
        <table className={styles.bodyTable}>
          <tbody>
            {data.map((section, index) => (
              <>
                <tr key={index} className={styles.sectionHeader}>
                  <td colSpan={plans.length + 1}>{section.category}</td>
                </tr>
                {section.features.map((feature, i) => (
                  <tr key={`${index}-${i}`} className={styles.featureRow}>
                    <td className={styles.feature}>{feature.name}</td>
                    {plans.map((_, j) => (
                      <td key={j} className={styles.checkmark}>
                        <Icon
                          name={feature.availability[j] ? "tick" : "close"}
                          className={styles.checkTick}
                          color={
                            feature.availability[j] ? "#09B285" : "#FF4D4D"
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
