
export default function Heading() {
  return (
    <>
      {/* main section */}
      <div className="border-b-4 border-black flex flex-row justify-evenly ">
        {/* section1 */}
        <div className="flex flex-col items-center justify-center ">
          <div className="flex w-full text-[.5rem] sm:text-[1rem] md:text-[1.5rem] font-bold justify-between minSec font-third">
            <p className="">Learning Something New Do Something New</p>
            <p>REG NO. 0001</p>
          </div>
            {/* section2 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-[40px] h-fit none">
              <img src="../../images/grayreact.png" alt="" />
            </div>
            <h1 className="font-primary text-[1rem] sm:text-[1.5rem] md:text-[3rem]">KNOW ME?</h1>
            <div className="w-[30px] h-fit">
              <img src="../../images/ashokstatue.png" alt="" />
            </div>
          </div>
          {/* section3 */}
          <div className="lowSub w-[95vw] flex flex-row justify-evenly border-t-4 border-black font-third font-bold text-[0.5rem] sm:text-[1rem] md:text[1.5rem]">
            <p>NO. 1st VOL. AII</p>
            <p>KOLKATA: FRIDAY MAR 12, 1947</p>
            <p>PRICE FREE OF COST</p>
          </div>
        </div>
      </div>
    </>
  )
}
