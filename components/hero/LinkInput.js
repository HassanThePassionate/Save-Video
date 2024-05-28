import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

const LinkInput = ({ link, setLink, loading, setLoading }) => {
  const pasteLink = async () => {
    const text = await navigator.clipboard.readText();
    setLink(text);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Wait for 2 seconds
  };

  const inputHandler = (e) => {
    setLoading(true);
    setLink(e.target.value);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className='flex w-full items-center space-x-4 px-0'>
        <Input
          type='url'
          placeholder='Enter URL'
          value={link}
          onChange={inputHandler}
          className='!h-10'
        />
        <Button disabled={loading} onClick={pasteLink} variant={"secondary"}>
          {loading ? (
            <>
              <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />
              Please wait
            </>
          ) : (
            "Paste Link"
          )}
        </Button>
      </div>
    </>
  );
};

export default LinkInput;
