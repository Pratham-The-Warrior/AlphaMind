'use client'

import {SubmitHandler, useForm} from 'react-hook-form'
import {Button} from '@/components/ui/button'
import InputField from '@/components/forms/InputField'
import FooterLink from '@/components/forms/FooterLink'

type SignInFormData = {
    email: string
    password: string
}

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
        try {
            console.log(data)
            // Add your authentication logic here
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h1 className="form-title">Sign In to Your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    register={register}
                    error={errors.email}
                    validation={{
                        required: 'Email address is required',
                        pattern: {
                            value: /^\S+@\S+$/,
                            message: 'Invalid email address',
                        },
                    }}
                />

                <InputField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    register={register}
                    error={errors.password}
                    validation={{required: 'Password is required', minLength: 8}}
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                </Button>

                <FooterLink text="Don't have an account?" linkText="Sign up" href="/sign-up"/>
            </form>
        </>
    )
}

export default SignIn
