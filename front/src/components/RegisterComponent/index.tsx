"use client";
import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerValidationSchema } from "@/helpers/registerValidationSchema";
import { IRegister } from "@/interfaces/interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function RegisterComponent() {
  const router = useRouter();
  const { signUp } = useContext(UserContext);

  const initialValues: IRegister = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };

  const handleSubmit = async (
    values: IRegister,
    { resetForm }: { resetForm: () => void }
  ) => {
    const success = await signUp(values);
    if (success) {
      MySwal.fire({
        title: "Success!",
        text: "Profile created! Enjoy ;)",
        icon: "success",
        confirmButtonText: "Cool",
      });
      router.push("/home");
    }
    if (!success) {
      MySwal.fire({
        title: "Ups!",
        text: "This email is already in use!",
        icon: "error",
      });
    }
    resetForm();
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-16 pb-8">
      <div className="w-full max-w-lg bg-black bg-opacity-50 p-10 rounded-2xl text-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-pageColor">
          Create your profile and start shopping!
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-white mb-1">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-black rounded p-2 text-black"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-white mb-1">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="w-full border border-black rounded p-2 text-black"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-white mb-1">
                  Address
                </label>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  className="w-full border border-black rounded p-2 text-black"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-1">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-black rounded p-2 text-black"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white mb-1">
                    Phone
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full border border-black rounded p-2 text-black"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={!isValid || !dirty}
                className="w-full bg-pageColor hover:bg-pageColorHover text-sm text-white rounded py-2 mt-4 hover:bg-zinc-900"
              >
                CREATE MY PROFILE
              </button>
              <p className="text-center">Do you already have an account?</p>
              <p className="text-center text-pageColor">
                <Link href="/login">LOG IN</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
