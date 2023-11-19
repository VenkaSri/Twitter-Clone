import clsx from "clsx";

const MediaContainer = ({ src, borderRadius }) => {
  return (
    <>
      <div className="overflow-hidden flex-col basis-0 grow flex mr-0.5 cursor-pointer relative">
        <div className="abolute top-0 bottom-0 right-0 left-0 flex flex-col ">
          <div className="h-full w-full max-w-full flex flex-col">
            <div
              style={{ backgroundImage: `url(${src})` }}
              className={`absolute top-0 left-0 w-full h-full bg-center bg-cover ${borderRadius}`}
            >
              <img
                className="absolute top-0 left-0 w-full h-full opacity-0 inset-0 -z-[1]"
                alt={`Uploaded`}
                src={src}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MediaWrapper = ({ children, isFlexCol }) => {
  return (
    <div className="mt-3 flex grow ">
      <div className="flex flex-col w-full">
        <div className="overflow-hidden  relative">
          <div className="w-full aspect-video"></div>
          <div className="h-full w-full absolute top-0 bottom-0 left-0">
            <div
              className={clsx(
                "h-full w-full",
                isFlexCol ? "flex flex-col" : "flex"
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PostMedia = ({ media }) => {
  const numberOfFiles = media.length;
  switch (numberOfFiles) {
    case 1:
      return <Single files={media} />;
    case 2:
      return <OneByTwo files={media} />;
    case 3:
      return <TLayout files={media} />;
    case 4:
      return <TwoByTwo files={media} isFlexCol />;
    default:
      break;
  }
};

const TwoByTwo = ({ files, isFlexCol }) => {
  return (
    <MediaWrapper isFlexCol>
      <div className="flex relative basis-0 grow mb-0.5 ">
        <MediaContainer src={files[0]} borderRadius={"rounded-tl-2xl"} />
        <MediaContainer src={files[1]} borderRadius={"rounded-tr-2xl"} />
      </div>
      <div className="flex relative basis-0 grow mb-0.5 ">
        <MediaContainer src={files[2]} borderRadius={"rounded-bl-2xl"} />
        <MediaContainer src={files[3]} borderRadius={"rounded-br-2xl"} />
      </div>
    </MediaWrapper>
  );
};

const TLayout = ({ files }) => {
  return (
    <MediaWrapper>
      <div className="flex relative basis-0 grow mb-0.5 ">
        <MediaContainer src={files[0]} borderRadius={"rounded-l-2xl"} />
      </div>
      <div className="flex flex-col relative basis-0 grow mb-0.5 ">
        <MediaContainer src={files[1]} borderRadius={"rounded-tr-2xl"} />
        <MediaContainer src={files[2]} borderRadius={"rounded-br-2xl"} />
      </div>
    </MediaWrapper>
  );
};

const OneByTwo = ({ files }) => {
  return (
    <MediaWrapper>
      <div className="flex relative basis-0 grow mb-0.5 ">
        <MediaContainer src={files[0]} borderRadius={"rounded-l-2xl"} />
      </div>
      <div className="flex flex-col relative basis-0 grow mb-0.5 ">
        <MediaContainer src={files[1]} borderRadius={"rounded-r-2xl"} />
      </div>
    </MediaWrapper>
  );
};

const Single = ({ files }) => {
  return (
    <div className="h-full w-full max-w-full flex flex-col relative mb-0.5 mt-4">
      <div
        style={{ backgroundImage: `url(${files[0]})` }}
        className={`top-0 left-0 w-full h-full bg-center bg-cover rounded-2xl`}
      >
        <img
          className=" top-0 left-0 w-full h-full opacity-0 inset-0 -z-[1]"
          alt={`Uploaded`}
          src={files[0]}
        />
      </div>
    </div>
  );
};
