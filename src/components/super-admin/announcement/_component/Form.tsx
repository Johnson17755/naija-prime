import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import questionMark from "../../../../../public/Question-mark-icon.svg";
import axios from "axios";
import { toast } from "react-toastify";

interface FormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = ({ setShowModal }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [emailNotification, setEmailNotification] = useState<boolean>(false);
  const [pushNotification, setPushNotification] = useState<boolean>(false);
  const [multipleDeliveries, setMultipleDeliveries] = useState<boolean>(false);
  const [targetDepartment, setTargetDepartment] = useState<string>("");
  const [visibility, setVisibility] = useState<string[]>([]);
  const [displayDate, setDisplayDate] = useState<string>("");
  const [displayTime, setDisplayTime] = useState<string>("");
  const [publishDate, setPublishDate] = useState<string>("");
  const [publishTime, setPublishTime] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= 500) {
      setDescription(event.target.value);
    }
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, name, checked } = event.target;
    if (name === "visibility") {
      setVisibility((prev) =>
        checked ? [...prev, id] : prev.filter((v) => v !== id)
      );
    } else {
      switch (name) {
        case "email-notification":
          setEmailNotification(checked);
          break;
        case "push-notification":
          setPushNotification(checked);
          break;
        case "multiple-deliveries":
          setMultipleDeliveries(checked);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const convertTime = (date: string, time: string) => {
      return `${date}T${time}:00.000Z`;
    };

    const currentDate = new Date();

    // Format the date as YYYY-MM-DD
    const formattedDate = currentDate.toISOString().split("T")[0];

    const delivery = [];
    if (emailNotification) delivery.push("EMAIL_NOTIFICATION");
    if (pushNotification) delivery.push("PUSH_NOTIFICATION");
    if (multipleDeliveries) delivery.push("ALLOW_MULTIPLE_DELIVERIES");

    const formData = {
      announcementTitle: title,
      description,
      delivery: delivery.join(","),
      targetDepartment,
      visibility: visibility[0]?.toUpperCase().replace("-", "_"),
      displayDate: displayDate || formattedDate,
      displayTime: convertTime(displayDate, displayTime),
      automaticPublishDate: publishDate || formattedDate,
      automaticPublishTime: convertTime(publishDate, publishTime),
    };

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/superAdmin/create-announcement`,
        formData
      );
      toast.success("Form submitted successfully");
      console.log("Form submitted successfully:", response.data);
      setShowModal(false);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error submitting form:", error.message);
        if (error.response) {
          // The request was made, and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error("Request data:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", error.message);
        }
      } else {
        console.error("Unknown error:", error);
      }
      toast.error("Form submission failed");
    }
  };

  return (
    <div className="scroll-container">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <div className="font-bold bg-[#D9D9D9] py-3 px-5 text-left">
            <h5 className="font-bold mb-2">Details</h5>
            <div className="flex flex-col gap-2 text-sm font-bold">
              <div>
                <label htmlFor="title">
                  Announcement Title
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-[#FEFEFE] text-sm border-none focus:outline-none focus:border-none"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  cols={50}
                  maxLength={500}
                  onChange={handleDescriptionChange}
                  value={description}
                  className="w-full bg-[#FEFEFE] border-none focus:outline-none focus:border-none text-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="font-bold bg-[#D9D9D9] py-3 px-5 text-left">
            <h5 className="font-bold mb-2">Delivery</h5>
            <div className="flex flex-col gap-2 text-sm font-bold">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="email-notification"
                  name="email-notification"
                  checked={emailNotification}
                  onChange={handleCheckboxChange}
                  className="bg-[#FEFEFE] text-sm border-none focus:outline-none"
                />
                <label htmlFor="email-notification">
                  Email Notification Enabled
                </label>
                <Image src={questionMark} alt="" className="w-3" />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="push-notification"
                  name="push-notification"
                  checked={pushNotification}
                  onChange={handleCheckboxChange}
                  className="bg-[#FEFEFE] text-sm border-none focus:outline-none"
                />
                <label htmlFor="push-notification">
                  Push Notification Enabled
                </label>
                <Image src={questionMark} alt="" className="w-3" />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="multiple-deliveries"
                  name="multiple-deliveries"
                  checked={multipleDeliveries}
                  onChange={handleCheckboxChange}
                  className="bg-[#FEFEFE] text-sm border-none focus:outline-none"
                />
                <label htmlFor="multiple-deliveries">
                  Allow Multiple Deliveries
                </label>
                <Image src={questionMark} alt="" className="w-3" />
              </div>
            </div>
          </div>
          <div className="font-bold bg-[#D9D9D9] py-3 px-5 text-left">
            <h5 className="font-bold mb-2">Target Settings</h5>
            <div className="flex flex-col gap-2 text-sm font-bold">
              <div>
                <label htmlFor="department">
                  Target Department
                  <select
                    id="department"
                    name="department"
                    value={targetDepartment}
                    onChange={(e) => setTargetDepartment(e.target.value)}
                    className="w-full bg-[#FEFEFE] text-sm border-none focus:outline-none focus:border-none"
                  >
                    <option value="">Select a department</option>
                    <option value="CUSTOMER_CARE">Customer Care</option>
                    <option value="FINANCIAL_DEPARTMENT">
                      Finance Department
                    </option>
                    <option value="HUMAN_RESOURCES">Human Resources</option>
                    <option value="CONTENT_DEPARTMENT">
                      Content Department
                    </option>
                    <option value="SCHEDULE_DEPARTMENT">
                      Schedule Department
                    </option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="font-bold bg-[#D9D9D9] py-3 px-5 text-left">
            <h5 className="font-bold mb-2">Visibility</h5>
            <div className="flex flex-col gap-2 text-sm font-bold">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="ONLY_YOU"
                  name="visibility"
                  checked={visibility.includes("ONLY_YOU")}
                  onChange={handleCheckboxChange}
                  className="bg-[#FEFEFE] text-sm border-none focus:outline-none"
                />
                <label htmlFor="ONLY_YOU">Only you</label>
                <Image src={questionMark} alt="" className="w-3" />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="SHOW_IN_LANDING_PAGE"
                  name="visibility"
                  checked={visibility.includes("SHOW_IN_LANDING_PAGE")}
                  onChange={handleCheckboxChange}
                  className="bg-[#FEFEFE] text-sm border-none focus:outline-none"
                />
                <label htmlFor="SHOW_IN_LANDING_PAGE">
                  Show in Landing page
                </label>
                <Image src={questionMark} alt="" className="w-3" />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="FINANCIAL_DEPARTMENT"
                  name="visibility"
                  checked={visibility.includes("FINANCIAL_DEPARTMENT")}
                  onChange={handleCheckboxChange}
                  className="bg-[#FEFEFE] text-sm border-none focus:outline-none"
                />
                <label htmlFor="FINANCIAL_DEPARTMENT">
                  Show in Account Department Portal
                </label>
                <Image src={questionMark} alt="" className="w-3" />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="CONTENT_DEPARTMENT"
                  name="visibility"
                  checked={visibility.includes("CONTENT_DEPARTMENT")}
                  onChange={handleCheckboxChange}
                  className="bg-[#FEFEFE] text-sm border-none focus:outline-none"
                />
                <label htmlFor="CONTENT_DEPARTMENT">
                  Show in Content Department Portal
                </label>
                <Image src={questionMark} alt="" className="w-3" />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="CUSTOMER_CARE"
                  name="visibility"
                  checked={visibility.includes("CUSTOMER_CARE")}
                  onChange={handleCheckboxChange}
                  className="bg-[#FEFEFE] text-sm border-none focus:outline-none"
                />
                <label htmlFor="CUSTOMER_CARE">
                  Show in Customer Care Department Portal
                </label>
                <Image src={questionMark} alt="" className="w-3" />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="SCHEDULE_DEPARTMENT"
                  name="visibility"
                  checked={visibility.includes("SCHEDULE_DEPARTMENT")}
                  onChange={handleCheckboxChange}
                  className="bg-[#FEFEFE] text-sm border-none focus:outline-none"
                />
                <label htmlFor="SCHEDULE_DEPARTMENT">
                  Show in Scheduling Department Portal
                </label>
                <Image src={questionMark} alt="" className="w-3" />
              </div>
            </div>
          </div>
          <div className="font-bold bg-[#D9D9D9] p-5 text-left">
            <h5 className="font-bold mb-2">Scheduling</h5>
            <div className="flex flex-col gap-2 text-sm font-bold">
              <div>
                <label htmlFor="date" className="relative">
                  Display Date
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={displayDate}
                    onChange={(e) => setDisplayDate(e.target.value)}
                    className="w-full bg-[#FEFEFE] text-sm border-none focus:outline-none"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="time" className="relative">
                  Display Time
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={displayTime}
                    onChange={(e) => setDisplayTime(e.target.value)}
                    className="w-full bg-[#FEFEFE] text-sm border-none focus:outline-none"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="publish-date" className="relative">
                  Automatic Publish Date
                  <input
                    type="date"
                    id="publish-date"
                    name="publish-date"
                    value={publishDate}
                    onChange={(e) => setPublishDate(e.target.value)}
                    className="w-full bg-[#FEFEFE] text-sm border-none focus:outline-none"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="publish-time" className="relative">
                  Automatic Publish Time
                  <input
                    type="time"
                    id="publish-time"
                    name="publish-time"
                    value={publishTime}
                    onChange={(e) => setPublishTime(e.target.value)}
                    className="w-full bg-[#FEFEFE] text-sm border-none focus:outline-none"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center my-3">
          {/* <button
            type="submit"
            className="flex items-center gap-2 bg-[#11EE42DB] font-bold px-2 border border-black text-sm"
            onClick={(e) => {
              console.log("Saved Changes button clicked");
            }}
          >
            Saved Changes
          </button> */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#11EE42DB] font-bold px-2 border border-black text-sm"
            onClick={(e) => {
              console.log("Publish button clicked");
            }}
          >
            {loading ? "Publishing..." : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
