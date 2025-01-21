import React, { useState } from "react";
import styles from "./ScheduleFormDemo.module.scss";
import { Form, Input, TextArea, Icon } from "pixel-react";
import Image from "next/image";
import { useGlobalContext } from "@/Context/GlobalContext";
const ScheduleFormDemo = () => {
  const {
    handlePrev,
    selectedDate,
    selectedTime,
    currentYear,
    setStep,
    username,
    email,
    setUsername,
    setEmail,
    month,
    weekdayName,
  } = useGlobalContext();

  console.log(username, email);
  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    if (data.email && data.message && data.username) {
      setStep((prevStep) => prevStep + 1);
    }
  };
  return (
    <div className={styles.scheduleDemoContainer}>
      {/* Left Form Section */}
      <div className={styles.formSection}>
        <button className={styles.prevButton} onClick={handlePrev}>
          &lt;
        </button>
        <p>Schedule a demo</p>
        <Form onSubmit={onSubmit} id="schedule-demo-form">
          {({ register, setValue, watch, trigger, formState: { errors } }) => (
            <>
              <label>
                Organisation Name
                <Input
                  value={watch("organisationName") || ""}
                  name="organisationName"
                  onChange={(e) => setValue("organisationName", e.target.value)}
                  type="text"
                  isLabelRequired={false}
                  style={{ background: "#F7F9FC" }}
                  placeholder="Enter organisation name"
                />
              </label>
              <label>
                Full Name
                <Input
                  style={{ background: "#F7F9FC" }}
                  value={watch("username") || ""}
                  type="text"
                  isLabelRequired={false}
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Username is required",
                    },
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                    maxLength: {
                      value: 15,
                      message: "Username must not exceed 15 characters",
                    },
                  })}
                  error={!!errors.username?.message}
                  helperText={errors.username?.message}
                  onChange={(e) => {
                    setValue("username", e.target.value, {
                      shouldValidate: true,
                    });
                    setUsername(e.target.value);
                  }}
                  onBlur={() => {
                    trigger("username");
                  }}
                  placeholder="username"
                />
              </label>
              <label>
                Email
                <Input
                  style={{ background: "#F7F9FC" }}
                  value={watch("email") || ""}
                  type="email"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  onChange={(e) => {
                    setValue("email", e.target.value, { shouldValidate: true });
                    setEmail(e.target.value);
                  }}
                  onBlur={() => {
                    trigger("email");
                  }}
                  name="email"
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
                  isLabelRequired={false}
                  placeholder="Enter your email"
                />
              </label>
              <label>
                Message
                <TextArea
                  style={{ background: "#F7F9FC" }}
                  label=""
                  value={watch("message") || ""}
                  {...register("message", {
                    required: "message is required",
                    maxLength: {
                      value: 30,
                      message: "Maximum length is 200 characters",
                    },
                  })}
                  error={!!errors?.description?.message}
                  onBlur={() => {
                    trigger("message");
                  }}
                  onChange={(e) =>
                    setValue("message", e.target.value, {
                      shouldValidate: true,
                    })
                  }
                  placeholder="Send a note"
                />
              </label>
              <div className={styles.terms}>
                <input
                  checked={watch("terms") || false}
                  onChange={(e) => setValue("terms", e.target.checked)}
                  type="checkbox"
                  id="terms"
                />
                <label htmlFor="terms">
                  By submitting this form you agree to our terms of use, Privacy
                  policy, and EULA.
                </label>
              </div>
              <button type="submit" className={styles.scheduleButton}>
                Schedule a demo
              </button>
            </>
          )}
        </Form>
      </div>

      {/* Right Preview Section */}
      <div className={styles.previewSection}>
        <div className={styles.previewCard}>
          <Image
            src={"images/schedule-user.svg"}
            alt="user"
            width={40}
            height={40}
            className={styles.previewImage}
          />
          <div>
            {username.length > 0 && <h4>Hi {username}</h4>}
            {email.length > 0 && (
              <p>
                Your call will be scheduled at below date and time, a reminder
                will be sent to {email}
              </p>
            )}
          </div>
          <section className={styles.previewSection}>
            <div className={styles.previewSectionOne}>
              <Icon name="primary_calendar_icon" color="#fff" />
              <h4>
                {weekdayName} {selectedDate} {month} {currentYear}
              </h4>
            </div>
            <div className={styles.previewSectionTwo}>
              <Icon name="clock_icon" color="#fff" />
              <h4>{selectedTime} </h4>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFormDemo;
