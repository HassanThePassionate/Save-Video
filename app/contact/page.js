// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { toast } from "@/components/ui/use-toast";
// import { Textarea } from "@/components/ui/textarea";

// const page = () => {
//   const FormSchema = z.object({
//     username: z.string().min(2, {
//       message: "Username must be at least 2 characters.",
//     }),
//   });

//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       username: "",
//     },
//   });

//   function onSubmit(data) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
//           <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//   }

//   return (
//     <div className='max-w-4xl  mx-auto my-4 md:my-12 space-y-8'>
//       <div className='flex flex-col justify-center items-center w-full '>
//         <div>
//           <h2 className='text-center text-6xl font-bold'>Contact Us</h2>
//           <p className='text-center mt-6 text-[20px] text-[#71717a] mb-[20px] '>
//             We're here to provide the support you need. Whether you have
//             questions, comments, or need assistance, we are ready to help.
//           </p>
//         </div>
//         <div></div>
//         <div className='w-full flex items-center justify-center bg-[#f2f2f2] h-full rounded-lg p-[32px]'>
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className='w-2/3 space-y-6'
//             >
//               <FormField
//                 control={form.control}
//                 name='username'
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder='Your name' {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name='username'
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>E-mail address</FormLabel>
//                     <FormControl>
//                       <Input placeholder='Your e-mail address' {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <div className='flex gap-3'>
//                 <Button variant='outline'>General Contact</Button>
//                 <Button variant='outline'>Feedback</Button>
//                 <Button variant='outline'>Bug Report</Button>
//                 <Button variant='outline'>Feature Request</Button>
//               </div>
//               <p>Message</p>
//               <Textarea placeholder='Type your message here.' />
//               <Button type='submit'>Submit Feedback!</Button>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
import React from "react";

const page = () => {
  return <div></div>;
};

export default page;
