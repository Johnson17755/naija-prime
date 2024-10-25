import { useState } from "react";
import DateTimePicker from "./DateTimePicker";
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

interface ScheduleData {
  movieId: string;
  bannerUrl: string;
  trailerUrl: string;
  title: string;
  startShowing: string;
  endShowing: string;
  ageCategory: string;
  aboutMovie: string;
  stationOfRelease: string;
  timeOfRelease: string;
  dayOfRelease: string;
}

interface FormProps {
  movieId: string;
  bannerUrl: string;
  trailerUrl: string;
  title: string;
  ageCategory: string;
  aboutMovie: string;
}

const Form = ({
  movieId,
  bannerUrl,
  trailerUrl,
  title,
  ageCategory,
  aboutMovie,
}: FormProps) => {
  const [stationOfRelease, setStationOfRelease] = useState<string>("");
  const [timeOfRelease, setTimeOfRelease] = useState<string>("00:00:00");
  const [dayOfRelease, setDayOfRelease] = useState<Date | null>(new Date());
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = (): boolean => {
    if (!stationOfRelease || !dayOfRelease) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const createSchedule = async (data: ScheduleData) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${baseUrl}/api/v1/schedule/create-schedule`,
        data
      );
      toast.success("Schedule created successfully!");
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Response data:", error.response.data); // Log server response
          toast.error(`Error: ${error.response.data.message}`);
        } else {
          toast.error("No response from server. Please try again later.");
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const scheduleData: ScheduleData = {
      movieId,
      bannerUrl,
      trailerUrl,
      title,
      startShowing: new Date().toISOString(),
      endShowing: new Date().toISOString(),
      ageCategory,
      aboutMovie,
      stationOfRelease,
      timeOfRelease,
      dayOfRelease: dayOfRelease
        ? dayOfRelease.toISOString().split("T")[0]
        : "",
    };

    console.log("Schedule Data being sent:", scheduleData);

    await createSchedule(scheduleData);
  };

  return (
    <div className="bg-[#D9D9D9EB] py-2 px-4">
      <div>
        <h5 className="text-xs font-bold mb-2">Schedule Content</h5>
      </div>
      <div className="flex gap-20">
        <div className="">
          <div className="flex flex-col gap-7 text-sm">
            <div className="flex items-center gap-2">
              <label htmlFor="station-of-release" className="font-bold">
                Station of Release
              </label>
              <select
                id="station-of-release"
                name="station-of-release"
                value={stationOfRelease}
                onChange={(e) => setStationOfRelease(e.target.value)}
                className="text-center bg-[#FEFEFE] text-sm font-normal border-none focus:outline-none focus:border-none w-[140px]"
              >
                <option value="" disabled></option>
                <option value="kids">Kids</option>
                <option value="adult">Adult</option>
              </select>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <DateTimePicker
              selectedTime={timeOfRelease}
              selectedDate={dayOfRelease}
              onTimeChange={setTimeOfRelease}
              onDateChange={setDayOfRelease}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <button
          onClick={handleSubmit}
          className="font-bold rounded-md bg-[#0BF931] py-1 px-5"
          disabled={loading}
        >
          {loading ? "Scheduling..." : "Schedule"}
        </button>
      </div>
    </div>
  );
};

export default Form;
