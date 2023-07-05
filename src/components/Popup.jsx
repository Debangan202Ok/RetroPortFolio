import PropTypes from 'prop-types'


export default function Popup({eff}) {
  return (
    <>
        <div className="popup lg:hidden flex backdrop-blur-3xl flex-col w-[80vw] bg-white rounded-md border-2 border-black shadow-lg fixed z-10 left-10 top-[40%]">
            <div className="flex flex-row font-secondary bg-black text-white">
                <div className="w-[65%] pl-2">
                    <h1>READ THIS</h1>
                </div>
                <div className="w-[35%] text-right pr-2">
                    &#169;
                </div>
            </div>
            <div className="flex text-justify font-third justify-center">
                <p className="border-2 w-[95%] my-4 p-2">For getting better user experience i recommand you to access this via laptop or desktop</p>
            </div>
            <div className="flex justify-end text-center font-secondary bg-black text-white py-1 pr-2">
                <span className="block px-4 border-2 rounded-md" onClick={eff}>OKAY</span>
            </div>
        </div>
    </>
  )
}
Popup.propTypes = {
    eff: PropTypes.func.isRequired
}