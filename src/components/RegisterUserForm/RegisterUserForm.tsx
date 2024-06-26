import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



const RegisterUserForm = () => {
    return (
    <div>
        <Card className='w-[400px]'>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              Create an account
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to sign up
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <span className=" text-blue-600 hover:underline text-sm">
              Forget password ?
            </span>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Sign Up</Button>
            <p className="mt-2 text-xs text-center text-gray-700">
              {" "}
              Already have an account?{" "}
              <span className=" text-blue-600 hover:underline">Sign In</span>
            </p>
          </CardFooter>
        </Card>            
    </div>
    )
}

export default RegisterUserForm;


