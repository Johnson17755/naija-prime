"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import Logo from "../../../../public/NaijaPrimeLogo.svg";
import naijaPrime from "../../../../public/AIJAPRIME.svg";
import backgroundImage from "../../../../public/HDwallpaper.svg";
import logoCenter from "../../../../public/LogoCenter.png";
import { schema } from "@/utils/validation";
import Loading from "../_components/Loading";

interface IFormInput {
  department: string;
  uniquePassKey: string;
}

const departSelected = [
  `SA00112395`,
  `HR00223882`,
  `CSUP00765094`,
  `SCH000243769`,
  `ACCT00694632`,
  `CX00654874`,
];

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [departmentCode, setDepartmentCode] = useState(""); // State for department code
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    imageUrl: "",
    department: "",
    uniquePassKey: "",
  });

  const [loading, setLoading] = useState(false); // State for loading

  const handleVerify = async (data: IFormInput) => {
    const userData = {
      department: data.department,
      uniquePassKey: data.uniquePassKey,
    };

    try {
      setLoading(true); // Start loading
      const response = await axios.get(`${baseUrl}/hr/verifyBeforeLogin`, {
        params: userData,
      });

      console.log("Verification Response:", response.data);

      if (response.data && response.data.firstName && response.data.lastName) {
        const { firstName, lastName, imageUrl, departmentCode } = response.data;
        setUserDetails({ ...userData, firstName, lastName, imageUrl });
        setDepartmentCode(departmentCode); // Set departmentCode from response
        setIsVerified(true);
        setErrorMessage("");
      } else {
        setErrorMessage(
          response.data.message || "Invalid Admin ID or Department Pass"
        );
        setIsVerified(false);
      }
    } catch (error: AxiosError | any) {
      console.error("Verification Error:", error); // Debugging line
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
      setIsVerified(false);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.post(`${baseUrl}/hr/login`, {
        ...userDetails,
        departmentCode: departmentCode, // Use departmentCode from state
      });

      console.log("API Response Data:", response.data); // Check the entire response structure

      if (response.status === 200) {
        const result = response.data;
        const departmentCode = result.adminResponse?.departmentPassword; // Adjust according to your API response structure

        console.log("Department Code from API:", departmentCode); // Debugging line
        console.log("Available Department Codes:", departSelected);

        if (departSelected.includes(departmentCode)) {
          // Define routing paths
          const routes: { [key: string]: string } = {
            SA00112395: "/super-admin",
            HR00223882: "/human-resources",
            CSUP00765094: "/content-department",
            SCH000243769: "/schedule-department",
            ACCT00694632: "/financial-department",
            CX00654874: "/customer-care",
          };

          // Route to the appropriate path
          router.push(routes[departmentCode] || "/"); // Default route if departmentCode is not matched
        } else {
          setErrorMessage("Invalid role. Please contact support.");
          setIsVerified(false);
        }
      } else {
        setErrorMessage(
          response.data.message || "Login failed. Please try again."
        );
        setIsVerified(false);
      }
    } catch (error: AxiosError | any) {
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
      setIsVerified(false);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const formSubmit = (data: IFormInput) => {
    if (isVerified) {
      handleLogin();
    } else {
      handleVerify(data);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image
            src={backgroundImage}
            alt=""
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="absolute -z-10 left-[37.5%] top-[47%]">
          <Image src={logoCenter} alt="" className="w-[25rem]" />
        </div>
        <div className="flex justify-center items-center relative mt-5 mb-7">
          <Image src={Logo} alt="" className="w-16" />
          <div className="flex flex-col">
            <Image
              src={naijaPrime}
              alt=""
              className="w-48 absolute left-[46.5%] top-[30px]"
            />
            <p className="textColor font-bold mt-7 text-sm ml-8">
              (WE CHOOSE YOU)
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center font-markaziText">
          <h2 className="text-4xl text-white font-bold">WELCOME</h2>
          <h3 className="text-3xl mt-2 mb-3 text-white font-bold">
            NAIJAPRIME ADMINISTRATOR
          </h3>
          <h4 className="text-2xl text-white font-bold">
            INPUT UNIQUE ID PLEASE
          </h4>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="flex flex-col my-4">
              <label
                htmlFor="department"
                className="textColor font-semibold text-2xl"
              >
                ADMIN ID
              </label>
              <input
                type="text"
                id="department"
                {...register("department")}
                className={`w-[18rem] h-12 bg-[#bdbcbc6c] border-[5px] ${
                  errors.department ? "border-red-500" : "border-[#D9D9D9A1]"
                } focus:outline-none focus:border-[#D9D9D9A1] hover:border-[#D9D9D9A1] text-white text-xl`}
                readOnly={isVerified}
              />
              {errors.department && (
                <p className="text-red-500 font-bold">
                  {errors.department.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="uniquePassKey"
                className="textColor font-semibold text-2xl"
              >
                DEPARTMENT PASS
              </label>
              <input
                type="password"
                id="uniquePassKey"
                {...register("uniquePassKey")}
                className={`w-[18rem] h-12 bg-[#bdbcbc6c] border-[5px] ${
                  errors.uniquePassKey ? "border-red-500" : "border-[#D9D9D9A1]"
                } focus:outline-none focus:border-[#D9D9D9A1] hover:border-[#D9D9D9A1] text-white text-xl`}
                readOnly={isVerified}
              />
              {errors.uniquePassKey && (
                <p className="text-red-500 font-bold">
                  {errors.uniquePassKey.message}
                </p>
              )}
            </div>
            {errorMessage && (
              <p className="text-red-500 font-bold">{errorMessage}</p>
            )}
            <div>
              {!isVerified ? (
                <button
                  type="submit"
                  className="bg-[#0BF931] py-1 px-5 w-[18rem] my-5 font-extrabold text-xl border-2 border-black"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? <Loading /> : "Verify"}
                </button>
              ) : (
                <div className="flex flex-col items-center mt-5">
                  <div className="flex justify-between my-3">
                    <h4 className="text-lg font-semibold mt-2 text-white">
                      PLEASE CONFIRM ID
                    </h4>
                    <div className="flex flex-col items-center">
                      <div className="bg-[#D9D9D9] rounded-[50%]">
                        {userDetails.imageUrl && (
                          <Image
                            src={userDetails.imageUrl}
                            alt="Profile"
                            width={56}
                            height={40}
                            className="rounded-full"
                          />
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-white">
                        {userDetails.firstName} {userDetails.lastName}
                      </h4>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0BF931] py-1 px-5 w-[18rem] mt-5 font-extrabold text-xl border-2 border-black"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? <Loading /> : "CONFIRM AND LOGIN"}
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
