"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import Submit from "./Submit";

const Contact = () => {
  const [lastClicked, setLastClicked] = useState(null);
  const [loading, setLoading] = useState(false); // State variable for loading
  const [submitted, setSubmitted] = useState(false); // State variable for form submission

  const handleClick = (buttonName) => {
    setLastClicked(buttonName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Simulate form submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true); // Set form submission state to true
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto my-4 md:my-12 space-y-8">
      {submitted ? (
        <Submit />
      ) : (
        <>
          <div className="px-4">
            <h2 className="text-center text-5xl sm:text-6xl font-bold">
              Contact Us
            </h2>
            <p className="text-center mt-6 text-[20px] text-[#71717a] mb-[20px]">
              We&apos;re here to provide the support you need. Whether you have
              questions, comments, or need assistance, we are ready to help.
            </p>
          </div>
          <Card className="p-[16px]">
            <CardContent>
              <form
                className="flex flex-col gap-6 mt-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    type="text"
                    className="mt-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">E-mail address</label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Your e-mail address"
                    type="email"
                    className="mt-3"
                    required
                  />
                </div>
                <div className="flex gap-3 flex-wrap">
                  {[
                    "General Contact",
                    "Feedback",
                    "Bug Report",
                    "Feature Request",
                  ].map((buttonName) => (
                    <Button
                      key={buttonName}
                      variant="outline"
                      type="button"
                      className={`${
                        lastClicked === buttonName
                          ? "bg-black text-white hover:text-white dark:bg-[#444] hover:bg-black dark:hover:bg-[#444]"
                          : ""
                      }`}
                      onClick={() => handleClick(buttonName)}
                    >
                      {buttonName}
                    </Button>
                  ))}
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="mt-3"
                    required
                  />
                </div>
                <div className="flex items-center justify-center">
                  {loading ? (
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Button type="submit">Submit</Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default Contact;
