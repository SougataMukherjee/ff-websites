"use client";
import React from "react";
import styles from "./ScheduleDemo.module.scss";
import { format, startOfDay, getDay } from "date-fns";
import { Select, Icon, Button } from "pixel-react";
import ScheduleFormDemo from "../(schedule-form-demo)/ScheduleFormDemo";
import { useGlobalContext } from "@/Context/GlobalContext";
import Image from "next/image";
const ScheduleDemo = () => {
  const {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    step,
    setStep,
    username,
    email,
    month,
    weekdayName,
    setWeekdayName,
  } = useGlobalContext();

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const timeSlots = [
    "10:00AM to 10:30AM",
    "10:30AM to 11:00AM",
    "11:00AM to 11:30AM",
    "11:30AM to 12:00AM",
    "12:00PM to 12:30PM",
    "02:30PM to 03:00PM",
    "03:00PM to 03:30PM",
    "03:30PM to 04:00PM",
    "04:00PM to 04:30PM",
    "05:00PM to 05:30PM",
  ];

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month: number, year: number): number[] => {
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };

  const days = getDaysInMonth(currentMonth, currentYear);
  const monthName = format(new Date(currentYear, currentMonth), "MMMM yyyy");

  const isDateDisabled = (date: number) => {
    const selectedDate = new Date(currentYear, currentMonth, date);
    const today = startOfDay(new Date());
    return selectedDate.getTime() < today.getTime();
  };

  const handleDateSelect = (date: number) => {
    const selectedFullDate = new Date(currentYear, currentMonth, date);
    const weekdayIndex = getDay(selectedFullDate);
    setWeekdayName(weekdays[weekdayIndex]);

    if (!isDateDisabled(date)) {
      setSelectedDate(date);
    }
  };

  const handleTimeSelect = (time: string) => setSelectedTime(time);

  // Add padding for the first day of the month to align weekdays
  const startDayOfMonth = getDay(new Date(currentYear, currentMonth, 1));
  const paddedDays = Array.from({ length: startDayOfMonth }, () => null);

  return (
    <section className={styles["schedule-demo-wrapper"]}>
      <article>Schedule a demo</article>
      {step === 1 && (
        <div
          className={styles.container}
          style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
        >
          <div className={styles.calendar}>
            <div className={styles.header}>
              <span>{monthName}</span>
              <button
                style={{ marginLeft: "300px" }}
                className={styles.btn}
                onClick={handlePrevMonth}
              >
                &lt;
              </button>
              <button className={styles.btn} onClick={handleNextMonth}>
                &gt;
              </button>
            </div>
            <div className={styles.weekdays}>
              {weekdays.map((day) => (
                <div key={day} className={styles.weekday}>
                  {day}
                </div>
              ))}
            </div>
            <div className={styles.days}>
              {paddedDays.map((_, index) => (
                <div key={`pad-${index}`} className={styles.empty}></div>
              ))}
              {days.map((date) => (
                <div
                  key={date}
                  className={`${styles.day} ${
                    selectedDate === date ? styles.selected : ""
                  } ${isDateDisabled(date) ? styles.disabled : ""}`}
                  onClick={() => handleDateSelect(date)}
                >
                  {date.toString().padStart(2, "0")}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.timePicker}>
            <Select
              selectedOption={{
                label: "fire-flink-LIC4900-onPrem",
                value: "fire-flink-LIC4900-onPrem",
              }}
              optionsList={[
                {
                  label: "fire-flink-LIC4900-onPrem",
                  value: "fire-flink-LIC4900-onPrem",
                  name: "fireflink",
                  disable: true,
                },
                {
                  label: "fire-flink-LIC3179",
                  value: "fire-flink-LIC3179",
                  name: "local",
                  disable: false,
                },
              ]}
              onChange={() => {}}
              showLabel={false}
            />
            <h3 style={{ marginTop: "10px" }}>Pick your time slot</h3>
            <div className={`${styles.timeSlotWrapper}`}>
              {timeSlots.map((time) => (
                <div
                  key={time}
                  className={` ${styles.timeSlot} ${
                    selectedTime === time ? styles.selected : ""
                  }`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={styles.scheduleForm}>
          <ScheduleFormDemo />
        </div>
      )}
      {step === 3 && (
        <div className={styles.scheduled}>
          <div className={styles.scheduleHeader}>
            <h4>Demo Scheduled</h4>
            <Button
              variant="primary"
              label="Reschedule"
              onClick={() => setStep((prevStep) => prevStep - 2)}
            />
          </div>
          <div className={styles.scheduledCard}>
            <Image
              src={"images/schedule-user.svg"}
              alt="user"
              width={40}
              height={40}
              className={styles.scheduledImage}
            />
            <div>
              <h4>Hi {username}</h4>
              <p>
                Your call will be scheduled at below date and time, a reminder
                will be sent to {email}
              </p>
            </div>
            <section className={styles.scheduledSection}>
              <div className={styles.scheduledSectionOne}>
                <Icon name="primary_calendar_icon" color="#fff" />
                <h4>
                  {weekdayName} {selectedDate} {month} {currentYear}
                </h4>
              </div>
              <div className={styles.scheduledSectionTwo}>
                <Icon name="clock_icon" color="#fff" />
                <h4>{selectedTime} </h4>
              </div>
            </section>
          </div>
          <div className={styles.scheduledText}>
            Contact our team for any updates or queries at +91 99000 10384 and
            contactus@fireflink.com
          </div>
        </div>
      )}

      <div
        className={styles.buttons}
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        {step === 1 && (
          <button className={styles.nextButton} onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default ScheduleDemo;
