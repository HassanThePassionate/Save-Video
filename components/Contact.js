"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const Contact = () => {
  const [lastClicked, setLastClicked] = useState(null);

  const handleClick = (buttonName) => {
    setLastClicked(buttonName);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className='max-w-2xl  mx-auto my-4 md:my-12 space-y-8'>
      <div className='px-4'>
        <h2 className='text-center  text-5xl sm:text-6xl font-bold'>
          Contact Us
        </h2>
        <p className='text-center mt-6 text-[20px] text-[#71717a] mb-[20px] '>
          We&apos;re here to provide the support you need. Whether you have
          questions, comments, or need assistance, we are ready to help.
        </p>
      </div>
      <Card className='p-[16px]'>
        <CardContent>
          <form className='flex flex-col gap-6 mt-5' onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <Input placeholder='Your name' type='email' className='mt-3' />
            </div>
            <div>
              <label>E-mail address</label>
              <Input placeholder='Your e-mail address' className='mt-3' />
            </div>
            <div className='flex gap-3 flex-wrap'>
              <Button
                variant='outline'
                style={{
                  backgroundColor:
                    lastClicked === "General Contact"
                      ? "black dark:[#999]"
                      : "",
                  color: lastClicked === "General Contact" ? "white" : "",
                }}
                onClick={() => handleClick("General Contact")}
              >
                General Contact
              </Button>
              <Button
                variant='outline'
                style={{
                  backgroundColor:
                    lastClicked === "Feedback" ? "black dark:[#999]" : "",
                  color: lastClicked === "Feedback" ? "white" : "",
                }}
                onClick={() => handleClick("Feedback")}
              >
                Feedback
              </Button>
              <Button
                variant='outline'
                style={{
                  backgroundColor:
                    lastClicked === "Bug Report" ? "black dark:[#999]" : "",
                  color:
                    lastClicked === "Bug Report" ? " black dark:white" : "",
                }}
                onClick={() => handleClick("Bug Report")}
              >
                Bug Report
              </Button>
              <Button
                variant='outline'
                style={{
                  backgroundColor:
                    lastClicked === "Feature Request"
                      ? "black dark:[#999]"
                      : "",
                  color: lastClicked === "Feature Request" ? "white" : "",
                }}
                onClick={() => handleClick("Feature Request")}
              >
                Feature Request
              </Button>
            </div>
            <div>
              <label>Message</label>
              <Textarea placeholder='Enter your message' className='mt-3' />
            </div>
            <div className='flex items-center justify-center'>
              <Button>Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
