import Footer from "./components/Footer";
import Popup from "./components/Popup";
import Body from "./components/body";
import Heading from "./components/heading";

export default function App() {
  const func = () => {
    document.querySelector('.blur').classList.remove('blur');
    document.querySelector('.popup').classList.add('hidden');
  }
  return (
    <>
      <Popup eff={func} />
      <div className="blur lg:blur-none">
        <Heading />
        <Body />
        <Footer />
      </div>
    </>

  )
}
