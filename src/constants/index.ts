import UploadArrow from "../../public/assets/uploadArrow.svg";
import DownloadArrow from "../../public/assets/downloadArrow.svg";
import DepartmentCardImg from "../../public/assets/currencyImage.svg";

import DepartmentImg from "../../public/assets/department-img.svg";
import OverviewImg from "../../public/assets/overview-img.svg";
import InboxImg from "../../public/assets/inbox-img.svg";
import ApplicationsImg from "../../public/assets/applications-img.svg";
import EmployeesImg from "../../public/assets/employees-img.svg";
import JobsImg from "../../public/assets/jobs-img.svg";

import ActiveJobsIcon from "../../public/assets/active-jobs-icon.svg";
import JobsOpeningIcon from "../../public/assets/jobs-opening-icon.svg";
import SubmissionsIcon from "../../public/assets/submissions-icon.svg";
import HiredIcon from "../../public/assets/hired-icon.svg";
import PositionFillIcon from "../../public/assets/position-fill-icon.svg";

import dashboardIcon from "../../public/Dashboard-icon.svg";
import hrIcon from "../../public/HR-icon.svg";
import accountIcon from "../../public/Account-icon.svg";
import attendanceIcon from "../../public/Attendance-icon.svg";
import announcementIcon from "../../public/Announcement-icon.svg";
import employeeIcon from "../../public/Employee-icon.svg";
import customerCareIcon from "../../public/Customer-care-icon.svg";

import UserApplicationIcon from "../../public/assets/user-application-icon.svg";
import NameEllipseIcon from "../../public/assets/name-ellipse-icon.svg";

import FDHomeIcon from "../../public/assets/fd-home.svg";
import FDConfigurationIcon from "../../public/assets/fd-configuration.svg";
import FDPayoutRequestIcon from "../../public/assets/fd-payout-request.svg";
import FDTotalPayoutsIcon from "../../public/assets/fd-total-payout.svg";

import ConfigurationRequestIcon from "../../public/assets/configuration-req-icon.svg";
import TotalRevenueIcon from "../../public/assets/total-revenue-icon.svg";
import TotalPayoutsIcon from "../../public/assets/total-payout-icon.svg";
import PayoutRequestIcon from "../../public/assets/payout-req-icon.svg";

import HomeIcon from "../../public/Home-icon.svg";
import SubmissionIcon from "../../public/Submission-icon.svg";

import banner from "../../public/Banner-image.svg";

import PRCreatorAccountImg from "../../public/assets/payout-record-img.svg";
import PRdminImg from "../../public/assets/payout-record-admin-img.svg";

import CCHomeIcon from "../../public/assets/fd-home.svg";
import CCMessageIcon from "../../public/assets/cc-msg-icon.svg";

import MessageIcon from "../../public/assets/cc-msg-icon.svg";
import ResponseIcon from "../../public/assets/cc-response-icon.svg";
import IncomingCallIcon from "../../public/assets/cc-incoming-call-icon.svg";

import DashboardIcon from "../../public/Home-icon.svg";
import ScheduleRequestIcon from "../../public/Schedule-request-icon.svg";
import SiteIcon from "../../public/Site-icon.svg";

export const departmentsCardData = [
  {
    id: 1,
    title: "Content Review",
    currencyValue: "100",
    departmentCardImg: DepartmentCardImg,
    upDownIcon: UploadArrow,
    percentageValue: "34.4%",
    monthValue: "vs last month",
  },
  {
    id: 2,
    title: "Content Scheduling",
    currencyValue: "100",
    departmentCardImg: DepartmentCardImg,
    upDownIcon: DownloadArrow,
    percentageValue: "34.4%",
    monthValue: "vs last month",
  },
  {
    id: 3,
    title: "Finance",
    currencyValue: "50",
    departmentCardImg: DepartmentCardImg,
    upDownIcon: UploadArrow,
    percentageValue: "35.4%",
    monthValue: "vs last month",
  },
  {
    id: 4,
    title: "Customer service",
    currencyValue: "30",
    departmentCardImg: DepartmentCardImg,
    upDownIcon: UploadArrow,
    percentageValue: "35.4%",
    monthValue: "vs last month",
  },
  {
    id: 5,
    title: "Technical",
    currencyValue: "30",
    departmentCardImg: DepartmentCardImg,
    upDownIcon: UploadArrow,
    percentageValue: "35.4%",
    monthValue: "vs last month",
  },
  {
    id: 6,
    title: "Marketing",
    currencyValue: "30",
    departmentCardImg: DepartmentCardImg,
    upDownIcon: UploadArrow,
    percentageValue: "34.4%",
    monthValue: "vs last month",
  },
];

export const panelItems = [
  {
    id: 1,
    text: "Departments",
    img: DepartmentImg,
    url: "human-resources",
  },
  {
    id: 2,
    text: "Overview",
    img: OverviewImg,
    url: "human-resources/overview",
  },
  {
    id: 3,
    text: "Inbox",
    img: InboxImg,
    url: "human-resources/inbox",
  },
  {
    id: 4,
    text: "Applications",
    img: ApplicationsImg,
    url: "human-resources/applications",
  },
  {
    id: 5,
    text: "Employees",
    img: EmployeesImg,
    url: "human-resources/employees",
  },
  {
    id: 6,
    text: "Jobs",
    img: JobsImg,
    url: "human-resources/jobs",
  },
];

export const fDPanelItems = [
  {
    id: 1,
    text: "HOME",
    img: FDHomeIcon,
    url: "financial-department",
  },
  {
    id: 2,
    text: "Configuration",
    img: FDConfigurationIcon,
    url: "financial-department/configuration",
  },
  {
    id: 3,
    text: "Payouts Requests",
    img: FDPayoutRequestIcon,
    url: "financial-department/payouts-requests",
  },
  {
    id: 4,
    text: "Total Payouts",
    img: FDTotalPayoutsIcon,
    url: "financial-department/total-payouts",
  },
];

export const overviewJobsCardData = [
  {
    id: 1,
    value: 34,
    text: "Active Jobs",
    img: ActiveJobsIcon,
  },
  {
    id: 2,
    value: 16,
    text: "Jobs Openings",
    img: JobsOpeningIcon,
  },
  {
    id: 3,
    value: 50,
    text: "Submissions",
    img: SubmissionsIcon,
  },
  {
    id: 4,
    value: 50,
    text: "Hired",
    img: HiredIcon,
  },
  {
    id: 5,
    value: 6,
    text: "Position to fill",
    img: PositionFillIcon,
  },
];

export const pieChartFakeData = {
  labels: ["LinkedIn", "Instagram", "Twitter", "Google"],
  datasets: [
    {
      label: "Pie Dataset",
      data: [100, 80, 40, 30],
      backgroundColor: ["#0ca525", "#0e08ee", "#f50b0a", "#4c4c4c"],
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartFakeData = {
  labels: ["82% Accepted", "18% Rejected"],
  datasets: [
    {
      label: "Doughnut Dataset",
      data: [82, 18],
      backgroundColor: ["#0ca424", "#f40a0a"],
      hoverOffset: 4,
    },
  ],
};

export const FDdoughnutChartFakeData = {
  labels: ["COMPANY", "CREATOR"],
  datasets: [
    {
      label: "Doughnut Dataset",
      data: [10, 10],
      backgroundColor: ["#008013", "#0f08ef"],
      hoverOffset: 0,
    },
  ],
};

export const hiringPipelineHeader = [
  "Job Title",
  "Department",
  "Candidates",
  "Qualifications",
  "Salary",
  "Expire Date",
  "Status",
];

export const tableData = [
  {
    role: "Customer Care Rep (5)",
    total: 10,
    screening: 6,
    interviews: 3,
    offers: 2,
    hired: 1,
    time: "17 days",
  },
  {
    role: "Customer Care Rep (5)",
    total: 10,
    screening: 6,
    interviews: 3,
    offers: 2,
    hired: 1,
    time: "17 days",
  },
  {
    role: "Customer Care Rep (5)",
    total: 10,
    screening: 6,
    interviews: 3,
    offers: 2,
    hired: 1,
    time: "17 days",
  },
  {
    role: "Customer Care Rep (5)",
    total: 10,
    screening: 6,
    interviews: 3,
    offers: 2,
    hired: 1,
    time: "17 days",
  },
  {
    role: "Customer Care Rep (5)",
    total: 10,
    screening: 6,
    interviews: 3,
    offers: 2,
    hired: 1,
    time: "17 days",
  },
  {
    role: "Customer Care Rep (5)",
    total: 10,
    screening: 6,
    interviews: 3,
    offers: 2,
    hired: 1,
    time: "17 days",
  },
  {
    role: "Customer Care Rep (5)",
    total: 10,
    screening: 6,
    interviews: 3,
    offers: 2,
    hired: 1,
    time: "17 days",
  },
  {
    role: "Customer Care Rep (5)",
    total: 10,
    screening: 6,
    interviews: 3,
    offers: 2,
    hired: 1,
    time: "17 days",
  },
  {
    role: "Customer Care Rep (5)",
    total: 10,
    screening: 6,
    interviews: 3,
    offers: 2,
    hired: 1,
    time: "17 days",
  },
  {
    role: "Customer Care Rep (5)",
    total: 10,
    screening: 6,
    interviews: 3,
    offers: 2,
    hired: 1,
    time: "17 days",
  },
];

export const NavBarPanelItems = [
  {
    id: 1,
    text: "Dashboard",
    img: dashboardIcon,
    url: "super-admin",
  },
  {
    id: 2,
    text: "HR",
    img: hrIcon,
    url: "super-admin/hr",
  },
  {
    id: 3,
    text: "Employee",
    img: employeeIcon,
    url: "super-admin/employee",
  },
  {
    id: 4,
    text: "Attendance",
    img: attendanceIcon,
    url: "super-admin/attendance",
  },
  {
    id: 5,
    text: "Account",
    img: accountIcon,
    url: "super-admin/account",
  },
  {
    id: 6,
    text: "Customer care",
    img: customerCareIcon,
    url: "super-admin/customer-care",
  },
  {
    id: 7,
    text: "Announcement",
    img: announcementIcon,
    url: "super-admin/announcement",
  },
];

export const contentDepartmentNavItems = [
  {
    id: 1,
    text: "Home",
    img: HomeIcon,
    url: "content-department",
  },
  {
    id: 2,
    text: "Submission",
    img: SubmissionIcon,
    url: "content-department/submission",
  },
];

export const scheduleDepartmentNavItems = [
  {
    id: 1,
    text: "Dashboard",
    img: DashboardIcon,
    url: "schedule-department",
  },
  {
    id: 2,
    text: "Schedule Request",
    img: ScheduleRequestIcon,
    url: "schedule-department/schedule-request",
  },
];

export const selectDepartmentsData = [
  { value: "SUPER_ADMIN", name: "Super Admin" },
  { value: "HUMAN_RESOURCES", name: "Human Resources" },
  { value: "CONTENT_DEPARTMENT", name: "Content Department" },
  { value: "SCHEDULE_DEPARTMENT", name: "Schedule Department" },
  { value: "FINANCIAL_DEPARTMENT", name: "Financial Department" },
  { value: "CUSTOMER_CARE", name: "Customer Care" }
];

export const jobsHeaderData = [
  "Job Title",
  "Department",
  "Candidate",
  "Qualifications",
  "Salary",
  "Expire Date",
  "Status",
];

export const jobsTableData = [
  {
    id: 1,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 2,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 3,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 4,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 5,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 6,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 7,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 8,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 9,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 10,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 11,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 12,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 13,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 14,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 15,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
  {
    id: 16,
    job_title: "Accountant",
    department: "Accounting",
    candid_num: 50,
    qualification: "BSC Accounting",
    salary: "1 million",
    expire_date: "10.5.2025",
    status: "Active",
  },
];

export const payoutsReqHeaderData = [
  "NAME",
  "PAYOUT AMOUNT",
  "AVAILABLE AMOUNT",
  "ACTION",
];

export const payoutsReqTableData = [
  {
    id: 1,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 2,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 3,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 4,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 5,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 6,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 7,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 8,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 9,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 10,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 11,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
  {
    id: 12,
    name: "Mariam's Production",
    img: NameEllipseIcon,
    payout_amount: "NGN 500,000",
    available_amount: "NGN 500,000",
    action: "VERIFY",
  },
];

export const selectJobsData = [
  "Content Department",
  "Scheduling Department",
  "Accounting Department",
  "Accounting Department",
  "Customer Rep Department",
  "Tech Department",
];

export const allTabContentData = [
  {
    id: 1,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 2,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 3,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 4,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 5,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 6,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 7,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 8,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 9,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 10,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 11,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 12,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 13,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 14,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 15,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 16,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 17,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 18,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 19,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 20,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 21,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
  {
    id: 22,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    pending_status: "Pending",
    rejected_status: "REJECT",
    shortlisted_status: "SHORTLIST",
    inProgress_status: "In Progress",
    date: "",
  },
];

export const shortlistedTabData = [
  {
    id: 1,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Shortlisted",
    date: "",
  },
  {
    id: 2,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Shortlisted",
    date: "",
  },
  {
    id: 3,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Shortlisted",
    date: "",
  },
  {
    id: 4,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Shortlisted",
    date: "",
  },
];

export const pendingTabData = [
  {
    id: 1,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Pending",
    date: "",
  },
  {
    id: 2,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Pending",
    date: "",
  },
  {
    id: 3,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Pending",
    date: "",
  },
  {
    id: 4,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Pending",
    date: "",
  },
  {
    id: 5,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Pending",
    date: "",
  },
  {
    id: 6,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Pending",
    date: "",
  },
];

export const rejectedTabData = [
  {
    id: 1,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 2,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 3,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 4,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 5,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 6,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 7,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 8,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 9,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 10,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 11,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
  {
    id: 12,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "Rejected",
    date: "",
  },
];

export const inProcessTabData = [
  {
    id: 1,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "In process",
    date: "",
  },
  {
    id: 2,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "In process",
    date: "",
  },
  {
    id: 3,
    img: UserApplicationIcon,
    name: "Emmanuel Johnson",
    time_pos: "2 weeks ago / Position: Business Analyst",
    process_status: "In process",
    date: "",
  },
];

export const financialReviewData = [
  {
    id: 1,
    title: "Configuration requests",
    img: ConfigurationRequestIcon,
  },
  {
    id: 2,
    title: "Total Revenue",
    img: TotalRevenueIcon,
  },
  {
    id: 3,
    title: "Total Payouts",
    img: TotalPayoutsIcon,
  },
  {
    id: 4,
    title: "Payout Requests",
    img: PayoutRequestIcon,
  },
];

export const customerReviewData = [
  {
    id: 1,
    title: "Messages",
    amount: "40,000",
    img: MessageIcon,
  },
  {
    id: 2,
    title: "Response",
    amount: "100,000",
    img: ResponseIcon,
  },
  {
    id: 3,
    title: "Incoming Calls",
    amount: "100,000",
    img: IncomingCallIcon,
  },
  {
    id: 4,
    title: "Payout Requests",
    amount: "100,000",
    img: PayoutRequestIcon,
  },
];

export const CardsData = [
  {
    id: 1,
    banner: banner,
    title: "Movie 1",
    producer: "Producer 1",
    genre: "Genre 1",
  },
  {
    id: 2,
    banner: banner,
    title: "Movie 2",
    producer: "Producer 2",
    genre: "Genre 2",
  },
  {
    id: 3,
    banner: banner,
    title: "Movie 3",
    producer: "Producer 3",
    genre: "Genre 3",
  },
  {
    id: 4,
    banner: banner,
    title: "Movie 4",
    producer: "Producer 4",
    genre: "Genre 4",
  },
  {
    id: 5,
    banner: banner,
    title: "Movie 5",
    producer: "Producer 5",
    genre: "Genre 5",
  },
  {
    id: 6,
    banner: banner,
    title: "Movie 6",
    producer: "Producer 6",
    genre: "Genre 6",
  },
  {
    id: 7,
    banner: banner,
    title: "Movie 7",
    producer: "Producer 7",
    genre: "Genre 7",
  },
  {
    id: 8,
    banner: banner,
    title: "Movie 8",
    producer: "Producer 8",
    genre: "Genre 8",
  },
  {
    id: 9,
    banner: banner,
    title: "Movie 9",
    producer: "Producer 9",
    genre: "Genre 9",
  },
  {
    id: 10,
    banner: banner,
    title: "Movie 10",
    producer: "Producer 10",
    genre: "Genre 10",
  },
  {
    id: 11,
    banner: banner,
    title: "Movie 11",
    producer: "Producer 11",
    genre: "Genre 11",
  },
  {
    id: 12,
    banner: banner,
    title: "Movie 12",
    producer: "Producer 12",
    genre: "Genre 12",
  },
  {
    id: 13,
    banner: banner,
    title: "Movie 13",
    producer: "Producer 13",
    genre: "Genre 13",
  },
  {
    id: 14,
    banner: banner,
    title: "Movie 14",
    producer: "Producer 14",
    genre: "Genre 14",
  },
  {
    id: 15,
    banner: banner,
    title: "Movie 15",
    producer: "Producer 15",
    genre: "Genre 15",
  },
];

export const fdMonthPayoutRecord = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const payoutRecordHeaders = [
  "Creator’s account",
  "Payout Requests",
  "Payout Admin",
  "Payout Amount",
  "Status",
];

export const payoutRecordTableData = [
  {
    id: 1,
    creator_account_img: PRCreatorAccountImg,
    full_name: "Anna Grace",
    account_num: "22849928383900",
    bank_name: "Global Bank",
    pay_req_amount: "500,5000",
    admin_name: "John Glory",
    admin_department: "Finance Admin",
    admin_img: PRdminImg,
    payout_amount: "500,5000",
    status: "APPROVED",
  },
  {
    id: 2,
    creator_account_img: PRCreatorAccountImg,
    full_name: "Anna Grace",
    account_num: "22849928383900",
    bank_name: "Global Bank",
    pay_req_amount: "500,5000",
    admin_name: "John Glory",
    admin_department: "Finance Admin",
    admin_img: PRdminImg,
    payout_amount: "500,5000",
    status: "APPROVED",
  },
  {
    id: 3,
    creator_account_img: PRCreatorAccountImg,
    full_name: "Anna Grace",
    account_num: "22849928383900",
    bank_name: "Global Bank",
    pay_req_amount: "500,5000",
    admin_name: "John Glory",
    admin_department: "Finance Admin",
    admin_img: PRdminImg,
    payout_amount: "500,5000",
    status: "APPROVED",
  },
  {
    id: 4,
    creator_account_img: PRCreatorAccountImg,
    full_name: "Anna Grace",
    account_num: "22849928383900",
    bank_name: "Global Bank",
    pay_req_amount: "500,5000",
    admin_name: "John Glory",
    admin_department: "Finance Admin",
    admin_img: PRdminImg,
    payout_amount: "500,5000",
    status: "APPROVED",
  },
  {
    id: 5,
    creator_account_img: PRCreatorAccountImg,
    full_name: "Anna Grace",
    account_num: "22849928383900",
    bank_name: "Global Bank",
    pay_req_amount: "500,5000",
    admin_name: "John Glory",
    admin_department: "Finance Admin",
    admin_img: PRdminImg,
    payout_amount: "500,5000",
    status: "APPROVED",
  },
  {
    id: 6,
    creator_account_img: PRCreatorAccountImg,
    full_name: "Anna Grace",
    account_num: "22849928383900",
    bank_name: "Global Bank",
    pay_req_amount: "500,5000",
    admin_name: "John Glory",
    admin_department: "Finance Admin",
    admin_img: PRdminImg,
    payout_amount: "500,5000",
    status: "APPROVED",
  },
  {
    id: 7,
    creator_account_img: PRCreatorAccountImg,
    full_name: "Anna Grace",
    account_num: "22849928383900",
    bank_name: "Global Bank",
    pay_req_amount: "500,5000",
    admin_name: "John Glory",
    admin_department: "Finance Admin",
    admin_img: PRdminImg,
    payout_amount: "500,5000",
    status: "APPROVED",
  },
  {
    id: 8,
    creator_account_img: PRCreatorAccountImg,
    full_name: "Anna Grace",
    account_num: "22849928383900",
    bank_name: "Global Bank",
    pay_req_amount: "500,5000",
    admin_name: "John Glory",
    admin_department: "Finance Admin",
    admin_img: PRdminImg,
    payout_amount: "500,5000",
    status: "APPROVED",
  },
  {
    id: 9,
    creator_account_img: PRCreatorAccountImg,
    full_name: "Anna Grace",
    account_num: "22849928383900",
    bank_name: "Global Bank",
    pay_req_amount: "500,5000",
    admin_name: "John Glory",
    admin_department: "Finance Admin",
    admin_img: PRdminImg,
    payout_amount: "500,5000",
    status: "APPROVED",
  },
  {
    id: 10,
    creator_account_img: PRCreatorAccountImg,
    full_name: "Anna Grace",
    account_num: "22849928383900",
    bank_name: "Global Bank",
    pay_req_amount: "500,5000",
    admin_name: "John Glory",
    admin_department: "Finance Admin",
    admin_img: PRdminImg,
    payout_amount: "500,5000",
    status: "APPROVED",
  },
];

export const customerCarePanelItems = [
  {
    id: 1,
    text: "Home",
    img: CCHomeIcon,
    url: "customer-care",
  },
  {
    id: 2,
    text: "Messages",
    img: CCMessageIcon,
    url: "customer-care/message",
  },
];

export const ccHomeHeaderData = ["Name", "Message", "Time"];

export const ccHomeTableData = [
  {
    id: 1,
    name: "Chinaza",
    message: "I need help",
    time: "1 min ago",
  },
  {
    id: 2,
    name: "Chinaza",
    message: "I need help",
    time: "2 min ago",
  },
  {
    id: 3,
    name: "Chinaza",
    message: "I need help",
    time: "2 min ago",
  },
  {
    id: 4,
    name: "Chinaza",
    message: "I need help",
    time: "3 min ago",
  },
  {
    id: 5,
    name: "Chinaza",
    message: "I need help",
    time: "3 min ago",
  },
  {
    id: 6,
    name: "Chinaza",
    message: "I need help",
    time: "5 min ago",
  },
  {
    id: 7,
    name: "Chinaza",
    message: "I need help",
    time: "1 min ago",
  },
  {
    id: 8,
    name: "Chinaza",
    message: "I need help",
    time: "2 min ago",
  },
  {
    id: 9,
    name: "Chinaza",
    message: "I need help",
    time: "2 min ago",
  },
  {
    id: 10,
    name: "Chinaza",
    message: "I need help",
    time: "3 min ago",
  },
  {
    id: 11,
    name: "Chinaza",
    message: "I need help",
    time: "3 min ago",
  },
  {
    id: 12,
    name: "Chinaza",
    message: "I need help",
    time: "5 min ago",
  },
  {
    id: 13,
    name: "Chinaza",
    message: "I need help",
    time: "5 min ago",
  },
  {
    id: 14,
    name: "Chinaza",
    message: "I need help",
    time: "5 min ago",
  },
  {
    id: 15,
    name: "Chinaza",
    message: "I need help",
    time: "2 min ago",
  },
  {
    id: 16,
    name: "Chinaza",
    message: "I need help",
    time: "3 min ago",
  },
  {
    id: 17,
    name: "Chinaza",
    message: "I need help",
    time: "3 min ago",
  },
  {
    id: 18,
    name: "Chinaza",
    message: "I need help",
    time: "5 min ago",
  },
  {
    id: 19,
    name: "Chinaza",
    message: "I need help",
    time: "5 min ago",
  },
  {
    id: 20,
    name: "Chinaza",
    message: "I need help",
    time: "5 min ago",
  },
];

export const ccLiveChatHeaderData = ["Name", "Messages", "Time"];

export const ccLiveChatTableData = [
  {
    id: 1,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 2,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 3,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 4,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 5,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 6,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 7,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 8,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 9,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 10,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 11,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 12,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 13,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 14,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 15,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 16,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 17,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 18,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 19,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
  {
    id: 20,
    name: "Chinaza",
    message: "I need help",
    time: "10 sec ago",
  },
];
