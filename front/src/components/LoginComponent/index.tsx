"use client";
import { loginValidationSchema } from "@/helpers/loginValidationSchema";
import { ILogin } from "@/interfaces/interfaces";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function LoginComponent() {
  const router = useRouter();
  const { signIn } = useContext(UserContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: ILogin, { resetForm }: { resetForm: () => void }) => {
    const success = await signIn(values);
    if (success) {
      MySwal.fire({
        title: 'Success!',
        text: 'Successfully logged in!',
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    
        router.push("/home");
    } else {
      MySwal.fire({
        title: 'Ups!',
        text: 'Something went wrong! Please check your credentials.',
        icon: 'error'
      });
    }
    resetForm();
};


  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-lg bg-black bg-opacity-50 p-10 text-white border-black rounded-2xl">
        {/* Título */}
        <h1 className="text-3xl font-bold text-center mb-6 text-pageColor">Welcome back, Sign In!</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-white mb-1">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-black text-black rounded p-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block  mb-1">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="w-full border border-black text-black rounded p-2"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!isValid || !dirty}
                  className="w-full bg-pageColor hover:bg-pageColorHover text-sm text-white rounded py-2 mt-4 hover:bg-zinc-900"
                >
                  START SHOPPING
                </button>
                <p className="text-center">You still don't have an account?</p>
                <p className="text-center text-pageColor">
                  <Link href="/register">CREATE YOUR PROFILE</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
