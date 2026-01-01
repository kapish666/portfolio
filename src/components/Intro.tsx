import Button from "./Button";

const Intro = () => {
  return (
    <div className="flex items-center justify-between mt-65 mb-10" >
      <div className="flex flex-col gap-0 relative">
        <div className="cursive mt-10 text-4xl absolute ml-2">Creative</div>
        <div className="text-[10rem] leading-none tracking-[-10px] big mt-14  uppercase pt-0">
          <div className="flex items-end gap-5">
            <div style={{ letterSpacing: '-0.6rem' }}  className="big text-[#ffe9d4]">Designer</div>
            <div className="cursive text-4xl">&</div>
          </div>
          <div style={{ letterSpacing: '-0.6rem' }}  className="big text-[#ffe9d4]">Developer</div>
        </div>
      </div>
      <div className="regularFont text-3xl w-xl flex flex-wrap max-w-[600px]  justify-end  ">
        <span className="text-[#ffe9d4] font-medium uppercase">
          &emsp;&emsp;&emsp; I am a developer and UX/UI designer based in Italy.
          I have many years of experience in consulting in all areas of digital.
          I love minimal and brutalist design. I love nature, pizza and art.
        </span>
        <Button color="#ffe9d4" text={"Contact me"}/>
      </div>
    </div>
  );
};

export default Intro;
