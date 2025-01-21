export interface GlobalContextProps {
  user: string | null;
  setUser: (user: string | null) => void;
  selectedDate: number | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<number | null>>;
  selectedTime: string | null;
  setSelectedTime: React.Dispatch<React.SetStateAction<string | null>>;
  currentMonth: number;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
  currentYear: number;
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handlePrev: (value: number | ((prevStep: number) => number)) => void;
  username: string;
  email: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  weekdayName: string;
  setWeekdayName: React.Dispatch<React.SetStateAction<string>>;
}
