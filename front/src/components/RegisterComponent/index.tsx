"use client"
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerValidationSchema } from '@/helpers/registerValidationSchema';
import { IRegisterForm } from '@/interfaces/interfaces';

export default function RegisterComponent() {
    const initialValues: IRegisterForm = {
        email: "",
        password: "",
        name: "",
        address: "",
        phone: ""
    }

    const handleSubmit = async (values: IRegisterForm, {resetForm}: {resetForm: () => void}) => {
        console.log(values);
        resetForm()
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-white p-4'>
            <Formik
                initialValues={initialValues}
                validationSchema={registerValidationSchema}
                onSubmit={handleSubmit}
            >
                {({isValid, dirty}) => (
                    <Form className='w-full max-w-lg bg-white p-6 border border-black rounded'>
                        <div className='space-y-4'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor='email' className='block text-black mb-1'>Email</label>
                                    <Field type='email' name='email' id='email' className='w-full border border-black rounded p-2' />
                                    <ErrorMessage name='email' component='div' className='text-red-600 text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='password' className='block text-black mb-1'>Password</label>
                                    <Field type='password' name='password' id='password' className='w-full border border-black rounded p-2' />
                                    <ErrorMessage name='password' component='div' className='text-red-600 text-sm' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor='address' className='block text-black mb-1'>Address</label>
                                <Field type='text' name='address' id='address' className='w-full border border-black rounded p-2' />
                                <ErrorMessage name='address' component='div' className='text-red-600 text-sm' />
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor='name' className='block text-black mb-1'>Name</label>
                                    <Field type='text' name='name' id='name' className='w-full border border-black rounded p-2' />
                                    <ErrorMessage name='name' component='div' className='text-red-600 text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='phone' className='block text-black mb-1'>Phone</label>
                                    <Field type='text' name='phone' id='phone' className='w-full border border-black rounded p-2' />
                                    <ErrorMessage name='phone' component='div' className='text-red-600 text-sm' />
                                </div>
                            </div>
                            <button
                                type='submit'
                                disabled={!isValid || !dirty}
                                className='w-full bg-black text-white rounded py-2 mt-4 hover:bg-gray-800'
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

