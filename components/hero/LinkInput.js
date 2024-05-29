"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { LoaderCircle, Clipboard } from "lucide-react"; // Import the Clipboard icon

const LinkInput = ({ link, setLink, loading, setLoading }) => {
  const [btnVisible, setBtnVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setBtnVisible(true);
  };

  const pasteLink = async () => {
    const text = await navigator.clipboard.readText();
    setLink(text);
    setLoading(true);
    setTimeout(() => {
      setBtnVisible(false);
      setLoading(false);
    }, 2000); // Wait for 2 seconds
  };

  const inputHandler = (e) => {
    setLink(e.target.value);
  };

  const clearInput = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setLink("");
      setBtnVisible(false);
      setIsAnimating(false);
    }, 300); // Animation duration
  };

  return (
    <>
      <div
        className={`flex sm:hidden  items-center justify-center transition-all duration-500 ${
          btnVisible ? "max-h-10 " : "max-h-0"
        } overflow-hidden`}
      >
        <Button
          variant='secondary'
          disabled={loading}
          onClick={pasteLink}
          className={`transition-transform duration-300 ${
            loading ? "transform scale-95" : ""
          }`}
        >
          {loading ? (
            <>
              <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />
              Please wait
            </>
          ) : (
            <>
              <Clipboard className='mr-2 h-4 w-4' />
              Paste Link
            </>
          )}
        </Button>
      </div>
      <div className=' flex  items-center space-x-4 px-0'>
        <div className='w-full relative'>
          <Input
            onClick={handleClick}
            type='url'
            placeholder='Enter URL'
            value={link}
            onChange={inputHandler}
            className={`!h-10 pr-10 text-[16px] ${
              link && "pointer-events-none"
            }  `}
          />
          {link && (
            <button
              onClick={clearInput}
              className={`absolute right-3 top-1 transform  text-gray-400 hover:text-gray-600 transition-transform duration-300 ease-in-out text-2xl ${
                isAnimating ? "scale-75" : "scale-100"
              }`}
            >
              &times;
            </button>
          )}
        </div>

        <Button
          disabled={loading}
          onClick={pasteLink}
          variant='secondary'
          className={`hidden sm:flex transition-transform duration-300 ${
            loading ? "transform scale-95" : ""
          }`}
        >
          {loading ? (
            <>
              <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />
              Please wait
            </>
          ) : (
            <>
              <Clipboard className='mr-2 h-4 w-4' />
              Paste Link
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default LinkInput;
