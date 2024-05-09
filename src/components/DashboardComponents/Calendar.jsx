import * as React from "react";
import { Calendar } from "../../components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState()



  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border content-center flex justify-center" // Fit to parent div
      classNames={{
        day_selected: "bg-[#5547D7] text-white", // Custom class for selected date
      }}
    />
  );
}
