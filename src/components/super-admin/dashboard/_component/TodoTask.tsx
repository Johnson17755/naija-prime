"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Task {
  id: string;
  contentType: string;
  name: string;
  deadline: string;
  toDoStatus: string;
}

const TodoTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>(`${baseUrl}/api/todo`);
        setTasks(response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchTasks();
  }, [baseUrl]);

  return (
    <div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h4 className="text-[16px] font-semibold">To-do Task</h4>
          <div className="bg-[#7971D9] p-1">
            <p className="font-semibold text-[14px] text-white">
              {tasks.length}
            </p>
          </div>
        </div>
        <div className="todo-task-scrollbar flex flex-col gap-1">
          <div className="grid grid-cols-4 bg-[#999999] text-white py-1 px-3 font-semibold">
            <h5>Content Type</h5>
            <h5>Name</h5>
            <h5>Dateline</h5>
            <h5>Status</h5>
          </div>
          <div className="flex flex-col gap-1">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="grid grid-cols-4 items-center bg-[#0FF04EA3] py-1 px-3 text-sm font-semibold"
                >
                  <h5>{task.contentType}</h5>
                  <h5>{task.name}</h5>
                  <h5>
                    {new Date(task.deadline).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </h5>
                  <div className="text-center px-1 bg-[#F40A0A] text-white mr-14">
                    <h5>{task.toDoStatus}</h5>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-2">No tasks available</div>
            )}
            {error && <div className="text-red-500">Error: {error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoTask;
