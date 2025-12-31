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
      className={`${color && `text-[${color}]`} ${
        fill && `bg-[${fill}]`
      } regularFont border-2 w-fit font-bold  uppercase px-2 py-2 text-[1.7rem] rounded-full`}
    >
      <div className="flex items-center font-medium">
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
};

export default Button;
