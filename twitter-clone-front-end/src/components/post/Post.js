import React, { useState } from "react";
import ProfilePicture from "../ProfilePicture";
import { UserProfile } from "../UserProfile";
import getIcon from "../../utils/icons/iconsutil";
import { MoreButton } from "../MoreButton";
import clsx from "clsx";
import { PostEditorMedia } from "./compose/PostEditorMedia";

const PostText = ({ text }) => {
  return (
    <div className="mt-3 flex grow">
      <div className="flex leading-6 text-[17px] font-cReg ">
        <span>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
          adffasdfsadffddsafdfas
        </span>
      </div>
    </div>
  );
};
//className="bg-[url('https://www.thisiscolossal.com/wp-content/uploads/2017/04/MatRandom_12.jpg')] bg-center bg-cover  mr-0.5 "
const PostMedia = ({ text }) => {
  const images = [
    "https://www.thisiscolossal.com/wp-content/uploads/2017/04/MatRandom_12.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU",
    "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-01.jpg",
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80",
  ];

  return (
    <div className="mt-3 flex grow ">
      <div className="flex-col-container w-full">
        <div className="overflow-hidden  relative">
          <div className="w-full aspect-video"></div>
          <div className="h-full w-full absolute top-0 bottom-0 left-0">
            <div className="h-full w-full flex-col-container">
              <div className="flex relative basis-0 grow ">
                <div className="overflow-hidden flex-col basis-0 grow flex mr-0.5 cursor-pointer relative">
                  <div className="abolute top-0 bottom-0 right-0 left-0 flex-col-container ">
                    <div className="h-full w-full max-w-full flex-col-container ">
                      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-l-2xl">
                        <img
                          className="absolute top-0 left-0 w-full h-full opacity-0 inset-0 -z-[1]"
                          alt={`Uploaded`}
                          src={images[1]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex-col basis-0 grow flex mr-0.5 cursor-pointer relative">
                  <div className="abolute top-0 bottom-0 right-0 left-0 flex-col-container ">
                    <div className="h-full w-full max-w-full flex-col-container ">
                      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-l-2xl">
                        <img
                          className="absolute top-0 left-0 w-full h-full opacity-0 inset-0 -z-[1]"
                          alt={`Uploaded`}
                          src={images[1]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative basis-0 grow ">
                <div className="overflow-hidden flex-col basis-0 grow flex mr-0.5 cursor-pointer relative">
                  <div className="abolute top-0 bottom-0 right-0 left-0 flex-col-container ">
                    <div className="h-full w-full max-w-full flex-col-container ">
                      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-l-2xl">
                        <img
                          className="absolute top-0 left-0 w-full h-full opacity-0 inset-0 -z-[1]"
                          alt={`Uploaded`}
                          src={images[1]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex-col basis-0 grow flex mr-0.5 cursor-pointer relative">
                  <div className="abolute top-0 bottom-0 right-0 left-0 flex-col-container ">
                    <div className="h-full w-full max-w-full flex-col-container ">
                      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-l-2xl">
                        <img
                          className="absolute top-0 left-0 w-full h-full opacity-0 inset-0 -z-[1]"
                          alt={`Uploaded`}
                          src={images[1]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex grow br">
        <div className="flex grow max-w-full relative mr-0.5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-l-2xl"></div>
          <img
            className="absolute top-0 left-0 w-full h-full opacity-0"
            alt={`Uploaded`}
            src={images[1]}
          />
        </div>
        <div className="flex flex-col grow max-w-full relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-r-2xl"></div>
          <img
            className="absolute top-0 left-0 w-full h-full opacity-0"
            alt={`Uploaded`}
            src={images[1]}
          />
        </div>
      </div> */}
    </div>
  );
};

export const Post = ({ postText }) => {
  return (
    <div>
      <article className="flex-col-container px-4">
        <div className=" flex grow ">
          <div className=" max-w-full flex  grow items-center">
            <div className="w-[40px]">
              <ProfilePicture />
            </div>
            <div className="flex-col-container overflow-hidden shrink-1 tablet:block hidden">
              <UserProfile />
            </div>
            <div className="ml-auto self-start ">
              <MoreButton />
            </div>
          </div>
        </div>
        <PostText text={postText} />
        <PostMedia />
      </article>
    </div>
  );
};

const ImageLayout = ({ imgs }) => {
  if (imgs.length === 4) {
    return (
      <div className="flex flex-col grow">
        <div className="flex flex-1 gap-2 mr-2">
          <ImageContainer src={imgs[0]} isGridLayout />
          <ImageContainer src={imgs[1]} isGridLayout />
        </div>
        <div className="flex  flex-1 gap-2">
          <ImageContainer src={imgs[3]} isGridLayout />
          <ImageContainer src={imgs[2]} isGridLayout />
        </div>
      </div>
    );
  }

  if (imgs.length === 3) {
    return (
      <div className="flex">
        <div className="flex flex-col flex-1 gap-2 mr-2">
          <ImageContainer src={imgs[0]} isGridLayout />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <ImageContainer src={imgs[1]} isGridLayout />
          <ImageContainer src={imgs[2]} isGridLayout />
        </div>
      </div>
    );
  }

  if (imgs.length === 2) {
    return (
      <div className="flex">
        <div className="flex flex-col flex-1 gap-2 mr-2">
          <ImageContainer src={imgs[0]} />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <ImageContainer src={imgs[1]} />
        </div>
      </div>
    );
  }

  if (imgs.length === 1) {
    return <ImageContainer src={imgs[0]} />;
  }

  return null;
};

const ImageContainer = ({ src, isGridLayout }) => {
  // const { paths, setPaths, mediaFiles } = useTweetSectionContext();

  // const handleRemoveFile = (src) => {
  //   const filesRemaining = paths.filter((file) => file !== src);
  //   const indexToRemove = paths.indexOf(src);
  //   if (indexToRemove !== -1) {
  //     mediaFiles.splice(indexToRemove, 1);
  //   }
  //   setPaths(filesRemaining);
  // };

  return (
    <div
      className={clsx("flex grow rounded-[16px] overflow-hidden relative ", {
        "aspect-ratio": isGridLayout,
      })}
    >
      <div className="z-[2] absolute w-full h-full">
        <div className="button--media-action min-w-[30px] min-h-[30px] right-1 top-1 ">
          {getIcon("Close", { fill: "white", width: 18 })}
        </div>
        <div className="button--media-action  min-w-[32px] min-h-[32px] right-1 bottom-1 px-4">
          <span className="font-cBold text-white">Edit</span>
        </div>
      </div>

      <div className="flex grow ">
        <img className="object-cover" alt={`Uploaded`} src={src} />
      </div>
    </div>
  );
};

//#0f1419
//#e7e9ea
// 4 images

/* 

        <div className="flex grow mb-0.5  max-w-full relative">
          <div className=" relative flex grow">
            <div className="absolute bottom-0  top-0 left-0 right-0 flex grow">
              <div className="bg-[url('https://www.thisiscolossal.com/wp-content/uploads/2017/04/MatRandom_12.jpg')] bg-center bg-cover  mr-0.5 rounded-tl-2xl">
                <img className=" opacity-0" alt={`Uploaded`} src={images[0]} />
              </div>
            </div>
          </div>

          <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-tr-2xl">
            <img className=" opacity-0" alt={`Uploaded`} src={images[1]} />
          </div>
        </div>
        <div className="flex grow mb-0.5  max-w-full relative">
          <div className="relative flex grow">
            <div className="absolute bottom-0  top-0 left-0 right-0 flex grow ">
              <div className="bg-[url('https://www.thisiscolossal.com/wp-content/uploads/2017/04/MatRandom_12.jpg')] bg-center bg-cover  mr-0.5 rounded-bl-2xl">
                <img className=" opacity-0" alt={`Uploaded`} src={images[0]} />
              </div>
            </div>
          </div>

          <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-br-2xl">
            <img className=" opacity-0" alt={`Uploaded`} src={images[1]} />
          </div>
        </div>

        */

// 3
//   <div className="flex grow  max-w-full relative mr-0.5">
//   <div className="flex-grow bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-l-2xl">
//     <img className=" opacity-0" alt={`Uploaded`} src={images[1]} />
//   </div>
// </div>
// <div className="flex flex-col grow  max-w-full relative">
//   <div className="mb-0.5 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-tr-2xl">
//     <img className=" opacity-0" alt={`Uploaded`} src={images[1]} />
//   </div>
//   <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-br-2xl">
//     <img className=" opacity-0" alt={`Uploaded`} src={images[1]} />
//   </div>
// </div>

//2

{
  /* <div className="h-full w-full flex relative">
<div className="overflow-hidden flex-col basis-0 grow flex mr-0.5 cursor-pointer relative">
  <div className="abolute top-0 bottom-0 right-0 left-0 flex-col-container ">
    <div className="h-full w-full max-w-full flex-col-container ">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-center bg-cover rounded-l-2xl">
        <img
          className="absolute top-0 left-0 w-full h-full opacity-0 inset-0 -z-[1]"
          alt={`Uploaded`}
          src={images[1]}
        />
      </div>
    </div>
  </div>
</div>
<div className="overflow-hidden flex-col basis-0 grow flex  cursor-pointer relative">
  <div className="abolute top-0 bottom-0 right-0 left-0 flex-col-container ">
    <div className="h-full w-full max-w-full flex-col-container ">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTLFYefo90HjqgjcUkvQT_tOVPyiJ6tmYtg&usqp=CAU')] bg-no-repeat bg-center bg-cover rounded-r-2xl">
        <img
          className="absolute top-0 left-0 w-full h-full opacity-0 inset-0 -z-[1]"
          alt={`Uploaded`}
          src={images[1]}
        />
      </div>
    </div>
  </div>
</div>
</div> */
}
