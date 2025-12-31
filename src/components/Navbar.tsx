type Navbarprop = {
  name: string;
  title: string;
  navoptions: string[];
};

const Navbar = ({ name, title, navoptions }: Navbarprop) => {
  return (
    // fixed min-w-[93.5%]
    <div className="regularFont text-[#ffe9d4] m-auto flex justify-between border-b-2 p-7 pl-0 pr-0 text-sm ">
      <div className="flex gap-7 items-center">
        <div className="cursive text-[1.1rem]">{name}</div>
        <div className="uppercase">{title}</div>
      </div>
      <div className="flex gap-3">
        {navoptions.map((opt, index) => {
          return (
            <div key={index}>
              {index !== navoptions.length - 1 ? (
                <div>{opt},</div>
              ) : (
                <div>{opt}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
