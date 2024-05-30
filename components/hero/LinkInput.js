import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { LoaderCircle, Clipboard, X } from "lucide-react";

const LinkInput = ({ loading, setLoading }) => {
  const [btnVisible, setBtnVisible] = useState(false);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  const whitelist = ["youtube.com"];

  useEffect(() => {
    if (url.trim() !== "") {
      validateUrl(url);
    }
  }, [url]);

  const handleClick = () => {
    setBtnVisible(true);
  };

  const pasteLink = async () => {
    const text = await navigator.clipboard.readText();
    setUrl(text);
    validateUrl(text);
    if (error === "") {
      setLoading(true);
      setTimeout(() => {
        setBtnVisible(false);
        setLoading(false);
      }, 2000);
    }
  };

  const inputHandler = (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text");
    setUrl(paste);
    validateUrl(paste);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    if (value.trim() === "") {
      setError("");
      setLoading(false);
    }
  };

  const validateUrl = (url) => {
    try {
      const urlObj = new URL(url);
      const domain = urlObj.hostname.replace("www.", "");
      if (whitelist.includes(domain)) {
        setError("");
      } else {
        setError(`URL is unsupported.`);
      }
    } catch (error) {
      setError("URL is unsupported..");
    }
  };
  const clear = () => {
    setUrl("");
    setLoading(false);
    setError("");
  };

  return (
    <>
      <div
        className={`flex sm:hidden items-center justify-center transition-all duration-500 ${
          btnVisible ? "max-h-10" : "max-h-0"
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

      <div className='flex items-center space-x-4 px-0'>
        <div className='w-full relative'>
          <Input
            onClick={handleClick}
            type='url'
            placeholder='Enter URL'
            value={url}
            onChange={handleChange}
            onPaste={inputHandler}
            className='!h-10 pr-10 text-[16px]'
          />
          {url && (
            <X
              className=' absolute top-2.5 right-2 cursor-pointer'
              size={20}
              onClick={clear}
            />
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
      {error && <p className='text-red-500 text-sm '>{error}</p>}
    </>
  );
};

export default LinkInput;
