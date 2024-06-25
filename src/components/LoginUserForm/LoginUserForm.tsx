
// import { Button } from "@/components/ui/button"
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardFooter,
// 	CardHeader,
// 	CardTitle,
// } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// const LoginUserForm = () =>{
//   return (
//     // <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
// 	// 	<div className="w-full m-auto bg-white lg:max-w-lg">
// 			<div>
// 			<Card className="w-[400px]">
// 				<CardHeader className="space-y-1">
// 				<CardTitle className="text-2xl text-center">Sign in</CardTitle>
// 				<CardDescription className="text-center">
// 					Enter your email and password to login
// 				</CardDescription>
// 				</CardHeader>
// 				<CardContent className="grid gap-4">
// 				<div className="grid gap-2">
// 					<Label htmlFor="email">Email</Label>
// 					<Input id="email" type="email" placeholder="" />
// 				</div>
// 				<div className="grid gap-2">
// 					<Label htmlFor="password">Password</Label>
// 					<Input id="password" type="password" />
// 				</div>
// 				<div className="flex items-center space-x-2">
// 					<Checkbox id="terms" />
// 					<label
// 					htmlFor="terms"
// 					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// 					>
// 					Remember me
// 					</label>
// 				</div>
// 				</CardContent>
// 				<CardFooter className="flex flex-col">
// 				<Button className="w-full">Login</Button>
// 				<p className="mt-2 text-xs text-center text-gray-700">
// 					{" "}
// 					Don't have an account?{" "}
// 					<span className=" text-blue-600 hover:underline">Sign up</span>
// 				</p>
// 				</CardFooter>
// 			</Card>
// 			</div>
// // 		</div>
// //     </div>
//   )
// }

// export default LoginUserForm;

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

loginUser()
const LoginUserForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
})

const onSubmit = (values:any) => {
    console.log(values)
}

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 mb-4">
              <h2 className="text-2xl">Sign in</h2>
              <p className="text-gray-600">
                Enter your email and password to login
              </p>
            </div>
            <FormField
              name="email"
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
