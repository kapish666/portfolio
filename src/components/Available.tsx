import { TiStarburst } from "react-icons/ti";

type AvailableProp = {
  name: string;
  isAvailable: boolean;
};

const Available = ({ name, isAvailable }: AvailableProp) => {
  return (
    <div className="flex absolute right-70 top-35">
      <div className="">
        <TiStarburst size={40} />
      </div>
      <div className="flex items-center gap-2 text-[#ffe9d4]">
        <div className="cursive text-5xl">{name}</div>
        <div className="regularFont w-28 leading-none">
          {isAvailable ? (
            <div>available for work</div>
          ) : (
            <div>is not available for work</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Available;
