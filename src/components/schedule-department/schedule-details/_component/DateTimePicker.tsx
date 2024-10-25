"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { TimePicker } from "antd"; // Using Ant Design TimePicker for more flexibility
import { motion, AnimatePresence } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import { FaCaretUp } from "react-icons/fa";
import dayjs from "dayjs";

interface DateTimePickerProps {
  selectedTime: string;
  selectedDate: Date | null;
  onTimeChange: (time: string) => void;
  onDateChange: (date: Date | null) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  selectedTime,
  selectedDate,
  onTimeChange,
  onDateChange,
}) => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    onDateChange(date);
    setShowDatePicker(false);
  };

  const handleTimeChange = (time: any) => {
    if (time && typeof time.format === "function") {
      onTimeChange(time.format("HH:mm"));
      setShowTimePicker(false);
    } else {
      console.error("Invalid time object:", time);
    }
  };

  return (
    <div className="flex gap-20">
      <div className="relative">
        <div className="flex items-center gap-2 justify-end">
          <h5 className="font-bold">Time for Release</h5>
          <button
            onClick={() => setShowTimePicker(!showTimePicker)}
            className="flex items-center justify-center gap-1 px-3 py-1 bg-[#FFFFFF] text-sm w-[140px]"
          >
            {selectedTime}
            <FaCaretUp />
          </button>
        </div>
        <AnimatePresence>
          {showTimePicker && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-12 right-0 z-10"
            >
              <TimePicker
                value={dayjs(selectedTime, "HH")}
                onChange={handleTimeChange}
                format="HH
              "
                showSecond={false}
                className="block w-full mt-2 border border-gray-300 rounded-md shadow-sm"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative">
        <div className="flex items-center gap-2 justify-end">
          <h5 className="font-bold">Day for Release</h5>
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="flex items-center justify-center gap-1 px-3 py-1 bg-[#FFFFFF] text-sm w-[155px]"
          >
            {selectedDate ? selectedDate.toDateString() : "Choose Date"}
            <FaCaretUp />
          </button>
        </div>
        <AnimatePresence>
          {showDatePicker && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-12 right-0 z-10"
            >
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                inline
                showYearDropdown
                scrollableMonthYearDropdown
                className="block w-full mt-2 border border-gray-300 rounded-md shadow-sm"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DateTimePicker;
