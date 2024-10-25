import { useState, Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import { TimePicker } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import { FaCaretUp } from "react-icons/fa";
import dayjs from "dayjs";

// Define the props interface
interface DateTimePickerProps {
  selectedDate: Date | null;
  selectedTime: string;
  onDateChange: Dispatch<SetStateAction<Date | null>>;
  onTimeChange: Dispatch<SetStateAction<string>>;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
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
    <div className="flex space-x-4">
      <div className="relative">
        <button
          onClick={() => setShowDatePicker(!showDatePicker)}
          className="flex items-center gap-1 px-3 py-1 bg-[#D9D9D9] text-sm"
        >
          {selectedDate ? selectedDate.toDateString() : "Choose Date"}
          <FaCaretUp />
        </button>
        <AnimatePresence>
          {showDatePicker && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-12 left-0 z-10"
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
      <div className="relative">
        <button
          onClick={() => setShowTimePicker(!showTimePicker)}
          className="flex items-center gap-1 px-3 py-1 bg-[#D9D9D9] text-sm"
        >
          {selectedTime}
          <FaCaretUp />
        </button>
        <AnimatePresence>
          {showTimePicker && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-12 left-0 z-10"
            >
              <TimePicker
                value={dayjs(selectedTime, "HH:mm")}
                onChange={handleTimeChange}
                format="HH:mm"
                showSecond={false}
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
