import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { AiOutlineAim } from 'react-icons/ai'
import { ImGoogle2 } from 'react-icons/im'

export default function Body() {
  const clickLink1 = () => {
    window.open('https://pauldebangan1970.github.io/formaValidationV2');
  }
  const clickLink2 = () => {
    window.open('https://pauldebangan1970.github.io/text-analyzar/');
  }
  const clickLink3 = () => {
    window.open('https://data-structure-skill.netlify.app/');
  }
  const clickLink4 = () => {
    window.open('https://pauldebangan1970.github.io/GuessTheNum/');
  }
  const githubLink = () => {
    window.open('https://github.com/pauldebangan1970');
  }
  const linkedinLink = () => {
    window.open('https://www.linkedin.com/in/debangan-paul-chowdhury');
  }
  const gmailLink = () => {
    window.open('https://www.google.com/search?q=debangan+paul+chowdhury&sxsrf=AB5stBiX7sXwDCs6Q3kEGkV28rQC7vWiIA%3A1688544074413&ei=SiOlZP3tGKO6seMP7aijoA4&ved=0ahUKEwj9uvjtjPf_AhUjXWwGHW3UCOQQ4dUDCBA&uact=5&oq=debangan+paul+chowdhury&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQogQyBQgAEKIEMgUIABCiBDIFCAAQogQyBQgAEKIEOggIABCiBBCwA0oECEEYAVD2Llj2LmCzMWgCcAB4AIABwAGIAcABkgEDMC4xmAEAoAEBwAEByAEE&sclient=gws-wiz-serp');
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full text-center text-[0.5rem] sm:text-[1rem] tracking-widest bg-[#000] text-[white]">
          <marquee><h1 className="font-bold uppercase">HELLO, I AM A WEB DEVOLOPER. Code is poetry, and the web is our canvas. Every line of code is an opportunity to create something amazing. Your imagination is the only limit to what you can achieve in web development.</h1> </marquee>
        </div>
        <div>
          <div className="text-center py-2">
            <h1 className="font-bold font-secondary text-[1rem] sm:text-[1rem] md:text-[1.5rem] tracking-wide"><span className="underline decoration-dotted">Unleashing the Power of Creation</span>: Shaping a Transformed World and Crafting our Future</h1>
          </div>
          <div id="sec" className="flex flex-col lg:flex-row ">
            <div className="flex flex-row justify-center">
              <div id="noticeBox" className="justify-evenly w-[40vw] lg:w-[20vw] flex flex-col border-4 rounded-md border-black">
                <div className="notice text-center bg-black text-white">
                  <p className="text-bold text-[0.5rem] sm:text-[1rem] md:text-[1.5rem] font-secondary">WELCOME TO 2nd <span className="underline">GENERATION</span></p>
                </div>
                <div id="img" className="">
                  <img src="../../images/showproc.jpg" alt="" />
                </div>
                <div className='text-center font-bold font-secondary'>
                  <p>PROJECTS</p>
                </div>
                <div id="links" className="grid bg-black text-white grid-row-4 md:grid-cols-2 md:text-center font-bold text-[0.5rem] md:text-[1rem] font-third tracking-widest text-left justify-center">
                  <div className="underline py-1 md:py-2" onClick={clickLink1}>Skill-X</div>
                  <div className="underline py-1 md:py-2" onClick={clickLink2}>TextUtils</div>
                  <div className="underline py-1 md:py-2" onClick={clickLink3}>DataStructure</div>
                  <div className="underline py-1 md:py-2" onClick={clickLink4}>GuessTheNum</div>
                </div>
              </div>
              <div className="w-[50vw] lg:w-[20vw] flex flex-col justify-evenly pt-4 font-bold  text-center text-[1rem] sm:text-[1.5rem] font-secondary">
                <p className="underline">DEBANGAN CREATED THESE WEBSITES ON 21st CENTURY.</p>
                <p className="underline">EACH OF THEM CONTAIN BASIC FACILITIES.</p>
                <p className="underline">SOURCE CAN BE ACCESS FROM GITHUB REPOS.</p>
                <p className="underline">LINK PROVIDED BELOW.</p>
              </div>
            </div>
            <div className="border-4 border-r-0 border-black rounded-md my-4 lg:my-0 flex flex-col lg:flex-row items-center">
              <div className='flex flex-col items-center'>
                <p className="uppercase font-bold font-secondary tracking-widest text-center underline">FIRST THING COMES FIRST...</p>
                <div className="w-[60vw] lg:w-[30vw]">
                  <img src="../../images/resume.jpg" alt="" />
                </div>
              </div>
              <div className="flex flex-col text-center font-bold font-secondary">
                <div className='bg-black text-white'>
                  <h1>FRENZIED ENTHUSIASM IN TECHNOLOGIES</h1>
                  <div className='flex justify-center items-center'>
                    <AiOutlineAim />
                    <h1 className='underline'>BELIEVE IN WORK</h1>
                  </div>
                </div>
                <div id='text-box' className="text-justify p-4 font-serif">
                  <p>In the tech world, there are two types of individuals. The first type is focused on earning money and securing a good job, often specializing in a particular technology and remaining dedicated to it. The second type of person is driven by curiosity and a desire to understand various technologies. They strive to explore different systems in-depth, gaining comprehensive knowledge of how things are created and truly function.  </p>
                  <div className='flex'>
                    <p>This second type of individual seeks to comprehend the intricacies and nuances of different technologies, diving deep into the inner workings of software, hardware, and other technical domains. They invest their time and effort in learning new concepts, experimenting with cutting-edge tools, and grasping the fundamental principles that shape our digital world. Their motivation lies in the joy of discovery, the satisfaction of expanding their knowledge, and the ability to adapt to ever-evolving technological landscapes.</p>
                    <div id="link" className='flex flex-col p-2 pr-0 justify-center sticky right-0'>
                      <p className='font-third'>VIEW</p>
                      <FaGithubSquare style={{ width: 40, height: 40 }} onClick={githubLink} />
                      <FaLinkedin style={{ width: 40, height: 40 }} onClick={linkedinLink} />
                      <ImGoogle2 style={{ width: 40, height: 35 }} onClick={gmailLink} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
