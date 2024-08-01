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
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import updateUserData from "@/lib/data/updateUserData";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { useState } from "react";

const UpdatePasswordForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = z
    .object({
      currentPassword: z.string().min(6, {
        message: "Current password must be at least 6 characters.",
      }),
      newPassword: z.string().min(6, {
        message: "Password must be at least 6 characters.",
      }),
      confirmedNewPassword: z.string().min(6, {
        message: "Confirm Password must be at least 6 characters.",
      }),
    })
    .refine((data) => data.newPassword === data.confirmedNewPassword, {
      message: "Passwords don't match",
      path: ["confirmedNewPassword"], // Set the path of the error message.
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmedNewPassword: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    const userData = {
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
    };
    await updateUserData(userData);
    form.reset();
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[450px] overflow-hidden w-[400px] border-solid border-grey border-[1px] rounded-[5px]">
      <div className="w-[90%] m-auto bg-white lg:max-w-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 mb-4">
              <h2 className="text-2xl text-center">Update Password</h2>
              <p className="text-gray-600 text-center">
                Enter your new password information
              </p>
            </div>

            <FormField
              name="currentPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Current Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="newPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="confirmedNewPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center">
              <Checkbox
                id="showPassword"
                checked={showPassword}
                onCheckedChange={() => setShowPassword(!showPassword)}
              />
              <Label htmlFor="showPassword" className="ml-2">
                Show Password
              </Label>
            </div>
            <div className="flex flex-col">
              <Button type="submit" className="w-full">
                Update Password
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
