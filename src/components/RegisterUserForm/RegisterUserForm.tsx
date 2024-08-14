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
import registerUser from "@/lib/data/registerUser"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch } from 'react-redux'
import { toggleForm } from "@/redux/layoutSlice"
import { useState } from "react"

const RegisterUserForm = () => {

	const dispatch = useDispatch();
	const switchToLoginUserForm = async ()=>{
		dispatch(toggleForm({showLoginForm: true}));		
		console.log('Switching to LoginUserForm!');
	}



	const [showPassword, setShowPassword] = useState(false);

	const formSchema = z.object({
		firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
		}),
		lastName: z.string().min(2, {
		message: "Last name must be at least 2 characters.",
		}),
		userName: z.string().min(2, {
		message: "Username must be at least 2 characters.",
		}),
		emailAddress: z.string().email({
		message: "Invalid email address.",
		}),
		password: z.string().min(6, {
		message: "Password must be at least 6 characters.",
		}),
		confirmedPassword: z.string().min(6, {
		message: "Confirm Password must be at least 6 characters.",
		}),
		}).refine((data) => data.password === data.confirmedPassword, {
		message: "Passwords don't match",
		path: ["confirmedPassword"], // Set the path of the error message.
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
		firstName: "",
		lastName: "",
		userName: "",
		emailAddress: "",
		password: "",
		confirmedPassword: "",
		},
	});

	const onSubmit = async (formData: z.infer<typeof formSchema>) => {
		const userData = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			userName: formData.userName,
			emailAddress: formData.emailAddress,
			password: formData.password,
		};
		await registerUser(userData);
		form.reset();

	};

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[450px] overflow-hidden w-[400px] border-solid border-grey border-[1px] rounded-[5px]">
      <div className="w-[90%] m-auto bg-white lg:max-w-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 mb-4">
              <h2 className="text-2xl text-center">Create an account</h2>
              <p className="text-gray-600 text-center">
                Enter your information to sign up
              </p>
            </div>
            <div className="flex">
              <div className="mr-[5px]">
                <FormField
                  name="firstName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="ml-[5px]">
                <FormField
                  name="lastName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              name="userName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="jd123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="emailAddress"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="j@d.com" {...field} />
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
                    <Input type={showPassword ? "text" : "password"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="confirmedPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type={showPassword ? "text" : "password"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center">
              <Checkbox id="showPassword" checked={showPassword} onCheckedChange={setShowPassword} />
              <Label htmlFor="showPassword" className="ml-2">
                Show Password
              </Label>
            </div>
            <div className="flex flex-col">
              <Button type="submit" className="w-full">Sign Up</Button>
              <p className="mt-2 text-xs text-center text-gray-700">
                Have an account?{" "}
                <span onClick={()=>{switchToLoginUserForm()}} className="text-blue-600 hover:underline">Login</span>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterUserForm;

