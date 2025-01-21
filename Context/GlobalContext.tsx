"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { GlobalContextProps } from "@/types/GlobalContext";

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>("test");
  const [selectedDate, setSelectedDate] = useState<number | null>(
    new Date().getDate()
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(
    "10:00AM to 10:30AM"
  );
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [weekdayName, setWeekdayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [month, setMonth] = useState("");
  useEffect(() => {
    function getMonth() {
      switch (currentMonth) {
        case 0:
          setMonth("January");
          break;
        case 1:
          setMonth("February");
          break;
        case 2:
          setMonth("March");
          break;
        case 3:
          setMonth("April");
          break;
        case 4:
          setMonth("May");
          break;
        case 5:
          setMonth("June");
          break;
        case 6:
          setMonth("July");
          break;
        case 7:
          setMonth("August");
          break;
        case 8:
          setMonth("September");
          break;
        case 9:
          setMonth("October");
          break;
        case 10:
          setMonth("November");
          break;
        case 11:
          setMonth("December");
          break;
        default:
          setMonth("Invalid month");
      }
    }

    getMonth();
  }, [currentMonth]);
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };
  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
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
        handlePrev,
        username,
        email,
        setUsername,
        setEmail,
        month,
        setMonth,
        weekdayName,
        setWeekdayName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  console.log(context);
  if (!context) {
    throw new Error("something went wrong");
  }
  return context;
};
