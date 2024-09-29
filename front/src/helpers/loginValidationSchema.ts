import * as Yup from 'yup'

export const loginValidationSchema = Yup.object({
    email: 
    Yup.string()
    .email("Email must be valid")
    .required("Email is required"),

    password: 
    Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")

})

