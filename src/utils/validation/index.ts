import * as yup from "yup";

export const employeeSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  secondName: yup.string().required("Second name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  imageUrl: yup.string().required("Please upload your image"),
  phoneNumber: yup
    .string()
    .min(11, "Phone number must be at least 10 characters")
    .matches(
      /^0\d{10}$/,
      "Phone number must start with '0' and be 11 digits long"
    )
    .required("Phone number is required"),
    hiredDate: yup
        .string()
        .required("Date is required"),
    departmentPassword: yup
        .string()
        .required("Department Password is required"),
    uniquePassKey: yup
        .string()
        .required("Unique passkey is required"),
    userRole: yup
        .string()
        .required("Department is required")
  })


  export const jobApplicationSchema = yup.object({
    firstName: yup
        .string()
        .required("First name is required"),
    lastName: yup
        .string()
        .required("Last name is required"),
    otherName: yup
        .string()
        .required("Other name is requried"),
    age: yup
        .string()
        .required("Age is requried"),
    sex: yup
        .string()
        .required("Sex is requried"),
    state: yup
        .string()
        .required("State is requried"),
    phoneNumber: yup
        .string()
        .min(11, "Phone number must be at least 10 characters")
        .matches(/^0\d{10}$/, "Phone number must start with '0' and be 11 digits long")
        .required("Phone number is required"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
    emergencyContact: yup
        .string()
        .required("Emergency contact is requried"),
    fullAddress: yup
        .string()
        .required("Full address is requried"),
    qualifications: yup
        .string()
        .required("Qualification is requried"),
    yearsOfExperience: yup
        .string()
        .required("Years of experience is requried"),
    previousOrganization: yup
        .string()
        .required("Previous organization is requried"),
    positionAppliedFor: yup
        .string()
        .required("State the position you're applying for"),
    governmentIdUrl: yup
        .string()
        .required("Government ID is requried"),
    certificateUrl: yup
        .string()
        .required("Certificate is requried"),
  })

  export const jobOpeningSchema = yup.object({
    jobTitle: yup
        .string()
        .required("Job title is required"),
    department: yup
        .string()
        .required("Department is required"),
    candidates: yup
        .number()
        .typeError("Number of candidates must be a valid number")
        .positive("Number of candidates must be a positive number")
        .integer("Number of candidates must be an integer")
        .required("Number of candidates is required"),
    qualifications: yup
        .string()
        .required("Qualification is requried"),
    salary: yup
        .string()
        .required("Salary is requried"),
    expireDate: yup
        .string()
        .required("Expiring date is requried"),
});

// Define the validation schema using yup
export const schema = yup.object().shape({
  department: yup.string().required("Admin ID is required"),
  uniquePassKey: yup.string().required("Department Pass is required"),
});


export const paymentSchema = yup.object({
  companyRation: yup
    .number()
    .typeError("Company ration must be a valid number")
    .positive("Company ration must be a positive number")
    .integer("Company ration must be an integer")
    .required('Company Ration is required'),
  creatorRation: yup
    .number()
    .typeError("Creator ration must be a valid number")
    .positive("Creator ration must be a positive number")
    .integer("Creator ration must be an integer")
    .required('Creator ration is required'),
  creatorName: yup
    .string()
    .required('Creator Name is required'),
  lockAmount: yup
    .number()
    .typeError("Lock amount must be a valid number")
    .positive("Lock amount must be a positive number")
    .integer("Lock amount must be an integer")
    .required('Lock Amount is required')
});
