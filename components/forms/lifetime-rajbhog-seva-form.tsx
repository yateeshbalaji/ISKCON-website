"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import indianStates from "@/data/indian-states.json";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Please provide your name",
  }),
  email: z.string().email({
    message: "Please provide a valid email",
  }),
  phone: z.string().min(10).max(10, {
    message: "Please provide a valid phone number",
  }),
  address: z.string().min(1, {
    message: "Please provide your address",
  }).optional(),
  city: z.string().min(1, {
    message: "Please provide your city",
  }).optional(),
  state: z.string().min(1, {
    message: "Please provide your state",
  }).optional(),
  postal_code: z.string().min(6).max(6, {
    message: "Please provide a valid postal code",
  }).optional(),
  family_members: z.string().min(1, {
    message: "Please provide number of family members",
  }).optional(),
  preferred_time_slot: z.string().min(1, {
    message: "Please select preferred time slot",
  }).optional(),
});

type FormValues = z.infer<typeof FormSchema>;

type Props = {
  className?: string;
  onFormSubmit: (data: FormValues) => void;
};

export function LifetimeRajbhogSevaForm({ className, onFormSubmit }: Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onFormSubmit)}
        className={cn("space-y-6", className)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {indianStates.map((state) => (
                      <SelectItem
                        key={state.code}
                        value={state.code}
                        className="text-sm"
                      >
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="postal_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter postal code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Donate ₹51,001/- and Secure Your Spot</Button>

        <div>
          <p className="text-center text-sm text-gray-700">
            For any queries, please contact us at{" "}
            <a href="phone:+919876543210" className="text-blue-600">
              +91 98765 43210
            </a>
          </p>
        </div>
      </form>
    </Form>
  );
}
