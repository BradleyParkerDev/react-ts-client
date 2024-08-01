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
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch } from 'react-redux'
import { useState } from "react"

const LoginUserForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = z.object({
    emailAddress: z.string().email({
      message: "Invalid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    showPassword: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
      showPassword: false,
    },
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    const userData = {
      emailAddress: formData.emailAddress,
      password: formData.password,
    };
    await loginUser(userData, dispatch); // Corrected userDispatch argument
    form.reset();
  };

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
              name="showPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox
                      id="showPassword"
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        setShowPassword(checked);
                        field.onChange(checked);
                      }}
                    />
                  </FormControl>
                  <FormLabel htmlFor="showPassword" className="ml-2">
                    Show Password
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
  );
}

export default LoginUserForm;
