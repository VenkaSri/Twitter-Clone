import { Avatar, Skeleton } from "@mui/material";
import React from "react";

const RectangularSkeleton = ({ width, height, radius = 16 }) => (
  <Skeleton
    variant="rectangular"
    animation="wave"
    width={width}
    height={height}
    sx={{ borderRadius: radius }}
  />
);

const CircularAvatarSkeleton = () => (
  <div className="w-[40px] mr-4">
    <Skeleton variant="circular" animation="wave">
      <Avatar />
    </Skeleton>
  </div>
);

export const PostSkeleton = () => {
  return (
    <div>
      <div className="cursor-pointer">
        <article className="flex-col-container px-4">
          <div className="flex-col-container flex grow ">
            <div className="flex grow pt-4"></div>
            <div className="max-w-full flex  grow pb-3 ">
              <CircularAvatarSkeleton />
              <div className="flex-col-container grow  ">
                <div className="flex">
                  <RectangularSkeleton width="30%" height={10} />
                </div>
                <div className="flex-col-container mt-4 gap-1">
                  <RectangularSkeleton width="100%" height={10} />
                  <RectangularSkeleton width="100%" height={10} />
                  <RectangularSkeleton width="30%" height={10} />
                </div>
                <div className="flex mt-4">
                  <RectangularSkeleton width="100%" height={150} radius={4} />
                </div>
                <div className="flex mt-4 justify-between px-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <RectangularSkeleton key={index} width={60} height={12} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="absolute w-full ">
        <div className="border-b border-b-[#eff3f4]"></div>
      </div>
    </div>
  );
};
