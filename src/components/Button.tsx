const Button = ({
  text,
  color,
  fill,
}: {
  text: string;
  color?: string;
  fill?: string;
}) => {
  return (
    <div
      className={`regularFont border-2 w-fit uppercase font-medium px-5 py-3 text-[1.7rem] rounded-full leading-none`}
       style={{
        color: color,
        backgroundColor: fill,
      }}
    >
      <div className="flex items-center">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Button;
