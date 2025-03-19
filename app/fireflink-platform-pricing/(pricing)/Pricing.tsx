import styles from "./Pricing.module.scss";

const Pricing = () => {
  const data = [
    {
      category: "Manual Testcase Management",
      features: [
        "Manual testcase templates",
        "Traceability of test cases",
        "Manual test suite execution",
        "Manual test execution result analytics",
      ],
    },
    {
      category: "UI Element Identification",
      features: [
        "Access to FireLink Finder tool",
        "Element recognition on Web, Android & iOS",
        "Export element locators in Excel & CSV format",
        "Automatic generation of optimal locators",
        "Identify dynamic elements with the reference of static elements",
        "Shadow DOM element identification",
      ],
    },
  ];

  const plans = [
    "Free Trial License",
    "Cloud Professional",
    "On Premise - Enterprise",
  ];

  return (
    <div className={styles.container}>
      {/* Header Table */}
      <table className={styles.headerTable}>
        <thead>
          <tr className={styles.planHeader}>
            <th className={styles.featureColumn}>Feature</th>
            {plans.map((plan, index) => (
              <th key={index} className={styles.planColumn}>
                {plan}
              </th>
            ))}
          </tr>
        </thead>
      </table>

      {/* Gap Between Tables */}
      <div className={styles.tableGap}></div>

      {/* Body Table */}
      <table className={styles.bodyTable}>
        <tbody>
          {data.map((section, index) => (
            <>
              <tr key={index} className={styles.sectionHeader}>
                <td colSpan={plans.length + 1}>{section.category}</td>
              </tr>
              {section.features.map((feature, i) => (
                <tr key={`${index}-${i}`} className={styles.featureRow}>
                  <td className={styles.feature}>{feature}</td>
                  {plans.map((_, j) => (
                    <td key={j} className={styles.checkmark}>
                      ✔
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
