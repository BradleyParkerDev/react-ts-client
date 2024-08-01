import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import updateUserData from "@/lib/data/updateUserData";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { useState } from "react";

const UpdateUserForm = () => {
  const dispatch = useDispatch();
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);

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
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      emailAddress: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      userName: formData.userName,
      emailAddress: formData.emailAddress,
    };

    try {
      await updateUserData(userData);
      form.reset();
      setUpdateSuccess(true);
      setUpdateError(null);
      // Dispatch Redux action if needed
      // dispatch(updateUser(userData));
    } catch (error) {
      setUpdateSuccess(false);
      setUpdateError("Failed to update user information. Please try again.");
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[450px] overflow-hidden w-[400px] border-solid border-grey border-[1px] rounded-[5px]">
      <div className="w-[90%] m-auto bg-white lg:max-w-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 mb-4">
              <h2 className="text-2xl text-center">Update User Information</h2>
              <p className="text-gray-600 text-center">
                Enter your information to update your profile
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


            <div className="mt-4 ">
                <h3 className="font-semibold text-lg">Account Settings</h3>
                <ul className="list-none space-y-2">
                    <li>
                        <p className="text-blue-600 hover:underline">Change Password</p>
                    </li>
                    <li>
                        <p className="text-blue-600 hover:underline">Delete Account</p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col">
              <Button type="submit" className="w-full">
                Update Profile
              </Button>
              
              {updateSuccess && (
                <p className="mt-2 text-xs text-center text-green-600">
                  User information updated successfully!
                </p>
              )}
              {updateError && (
                <p className="mt-2 text-xs text-center text-red-600">
                  {updateError}
                </p>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateUserForm;
