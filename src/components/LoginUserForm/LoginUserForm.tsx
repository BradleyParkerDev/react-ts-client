import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import loginUser from "@/lib/auth/loginUser"
import { z } from "zod"
import {  useDispatch } from 'react-redux'

const LoginUserForm = () => {
	const dispatch = useDispatch();


	const form = useForm({
		defaultValues: {
			emailAddress: "",
			password: "",
			remember: false,
		},
	})

	const onSubmit = (formData:any) => {
		// Do something with the form formData.
		console.log("formData:", formData);
		const userData:any = {
			emailAddress: formData.emailAddress,
			password: formData.password
		}
		loginUser(userData,  dispatch); // Corrected userDispatch argument
	}

	return (
		<div className="relative flex flex-col justify-center items-center min-h-[450px] overflow-hidden w-[400px] border-solid border-grey border-[1px] rounded-[5px]">
			<div className="w-[90%] m-auto bg-white lg:max-w-lg">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<div className="space-y-1 mb-4">
							<h2 className="text-2xl text-center">Sign in</h2>
							<p className="text-gray-600 text-center">
							Enter your email and password to login
							</p>
						</div>
						<FormField
						name="emailAddress"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type="email" placeholder="" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
						/>
						<FormField
						name="password"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input type="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
						/>
						<FormField
						name="remember"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormControl>
								{/* <Checkbox id="terms" checked={field.value} {...field} /> */}
								</FormControl>
								<FormLabel htmlFor="terms">
								Remember me
								</FormLabel>
							</FormItem>
						)}
						/>
						<div className="flex flex-col">
							<Button type="submit" className="w-full">Login</Button>
							<p className="mt-2 text-xs text-center text-gray-700">
								Don't have an account?{" "}
								<span className="text-blue-600 hover:underline">Sign up</span>
							</p>
						</div>
					</form>
				</Form>
			</div>
		</div>
	)
}

export default LoginUserForm;
