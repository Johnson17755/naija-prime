"use client";

import Image from "next/image";
import total_Users from "../../../../../public/Total-users-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const TotalUsers = () => {
  const [totalUsers, setTotalUsers] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/superAdmin/total-users`
        );
        setTotalUsers(response.data);
      } catch (error: unknown) {
        console.error("Failed to fetch total users", error);
      }
    };

    fetchTotalUsers();
  }, []);

  return (
    <div>
      <div className="bg-[#0BF93166] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">Total Users</p>
        <div className="flex items-center justify-between">
          <Image src={total_Users} alt="" className="w-12" />
          <h4 className="text-[25px] font-bold">
            {totalUsers?.toLocaleString()}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TotalUsers;
