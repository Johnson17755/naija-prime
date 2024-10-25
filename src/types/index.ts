// declear your types here

export type DepartmentsProps = {
  departmentName: string;
  totalPersons: number;
  // id: number;
  // title: string;
  // currencyValue: string;
  // departmentCardImg: string;
  // upDownIcon: string;
  // percentageValue: string;
  // monthValue: string;
};

export type OverviewProps = {
  id: number;
  value: number;
  text: string;
  img: string;
};

export type ReviewCardProps = {
  id: number;
  title: string;
  img: string;
};

export type CCReviewCardProps = {
  id: number;
  title: string;
  img: string;
  amount: string;
};

export type EmployeeProps = {
  id: number;
  employee_name: string;
  employee_pos: string;
  department_title: string;
  department_name: string;
  date_title: string;
  date_value: string;
  email_logo: string;
  email_name: string;
  phone_logo: string;
  phone_num: string;
  passcode_title: string;
  passcode_value: string;
  dot_icon: string;
  ball_icon: string;
};

export interface Application {
  id: number;
  firstName: string;
  lastName: string;
  otherName: string;
  age: string;
  sex: string;
  state: string;
  phoneNumber: string;
  email: string;
  emergencyContact: string;
  fullAddress: string;
  qualifications: string;
  yearsOfExperience: string;
  previousOrganizations: string;
  positionAppliedFor: string;
  governmentIdUrl: string;
  certificateUrl: string;
  createdOn: string;
}

export interface JobOpening {
  jobTitle: string;
  department: string;
  candidates: number;
  qualifications: string;
  salary: string;
  expireDate: string;
  status: string;
}

export interface GetEmployees {
  id: number;
  firstName: string;
  secondName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  phoneNumber: string;
  hiredDate: string;
  departmentPassword: string;
  uniquePassKey: string;
}

export interface CardData {
  id: string;
  title: string;
  bannerUrl: string;
  trailerUrl: string | null;
  producer: string;
  seriesGenre: string | null;
  fullMovieUrl: string | null;
  uploadTime: string;
}

export interface PendingNewSubmitApiResponse {
  totalPages: number;
  totalElements: number;
  size: number;
  content: CardData[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface RequestingScheduleApiResponse {
  totalPages: number;
  totalElements: number;
  size: number;
  content: CardData[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface GetDepartment {
  id: number;
  title: string;
  count: number;
  img: string;
  downloadIcon: string;
  percentage: string;
  month: string;
}

export interface MessageProps {
  id: number;
  senderEmail: string;
  receiverEmail: string;
  subject: string;
  content: string;
  sentOn: string;
  forwarded: boolean;
}
