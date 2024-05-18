"use client";
import { Backpack, FastForward, Forward, Play, Rewind } from "lucide-react";
import { RiLoopRightFill } from "react-icons/ri";
import { Button } from "../ui/button";
const Cuts = () => {
  return (
    <div>
      <div className="max-w-[768px] sm:mx-auto py-4 my-12">
        <div className="flex justify-between ">
          <div className="cut_button">
            <h2 className="text-2xl mb-3">Cut This Video</h2>
            <div className="btn1 rounded-md mb-6  sm:border-[#dadada] sm:border dark:border-[#333]">
              <div className="py-[5px] px-3 text-center bg-[#f3f3f3] dark:bg-[#27272A]">
                Current Time
              </div>
              <div className=" p-4 text-center">00:02 / 03:29</div>
            </div>

            <div className="btn1 rounded-md mb-6  sm:border-[#dadada] sm:border dark:border-[#333]">
              <div className="py-[5px] px-3 text-center bg-[#f3f3f3] dark:bg-[#27272A]">
                Select Quality
              </div>
              <div className=" p-4 text-center"></div>
            </div>
            <div className="btn1 rounded-md mb-6  sm:border-[#dadada] sm:border dark:border-[#333]">
              <div className="py-[5px] px-3 text-center bg-[#f3f3f3] dark:bg-[#27272A]">
                Cutted duration
              </div>
              <div className=" p-4 text-center">00:02</div>
            </div>
          </div>
          <div className="video_con">
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_rq2SFi2E10?si=PpYHcsZ3sqQtvBak"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="bar"></div>
            </div>
            <div className="progress_bar"></div>
            <div className="bar_iteam">
              <div>00:00</div>
              <div>00:00</div>
            </div>
            <div className="video_btn flex items-center justify-center  gap-8">
              <button>
                <RiLoopRightFill size={30} />
              </button>
              <button>
                <Rewind size={30} />
              </button>
              <button>
                <Play size={30} />
              </button>
              <button>
                <FastForward size={30} />
              </button>
            </div>

            <div className="title_bar flex items-center gap-6 mt-[30px] rounded-sm border border-[#dadada] dark:border-[#333] ">
              <div className="px-[12px] py-2 border-r-[#dadada] border dark:border-[#333]  bg-[#f3f3f3] dark:bg-[#27272A] ">
                Title
              </div>
              <div>GTA 5 : Franklin Try To Find Lost Ironm</div>
            </div>
            <div className="main_btn flex items-center justify-center mt-5">
              <Button variant="outline">Cut</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuts;
