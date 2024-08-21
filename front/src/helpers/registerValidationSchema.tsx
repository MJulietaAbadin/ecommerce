import * as Yup from 'yup'

export const registerValidationSchema = Yup.object({
    email: 
    Yup.string()
    .email("Email must be valid")
    .required("Email is required"),

    password: 
    Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

    name: 
    Yup.string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces"),

    address: 
    Yup.string()
    .required("Address is required"),

    phone: 
    Yup.string()
    .required("Phone is required")
    .matches(/^\d+$/, "Phone must contain only numbers")
    .min(10, "Phone must be at least 10 characters"),
})