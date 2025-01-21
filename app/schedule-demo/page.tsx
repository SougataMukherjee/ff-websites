import ScheduleDemo from "./(schedule-demo)/ScheduleDemo";
import { GlobalProvider } from "@/Context/GlobalContext";
export default function Home() {
  return (
    <GlobalProvider>
      <ScheduleDemo />
    </GlobalProvider>
  );
}
