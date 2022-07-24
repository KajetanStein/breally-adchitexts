import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Newsletter } from "./components/Newsletter";
import { Testimonial } from "./components/Testimonial";

const mockHeaderData = [
  {
    url: '/products',
    id: 'mockId',
  },
    {
    url: '/solutions',
    id: 'mockId'
  },
    {
    url: '/recources',
    id: 'mockId'
  },
    {
    url: '/about',
    id: 'mockId'
  },
]

const mockHer0 = {
  text: "In oculis quidem rerum facilis est et aperta.",
  img: "https://i.ibb.co/G9bfTPH/breally-img.png"
}

const mockTest = {
  text: "Torquatos nostros? quos dolores eos, qui studiose antiqua persequeris, claris et quasi naturalem. In quo enim inter mediocrem animadversionem atque insitam in malis dolor, non numquam. At vero eos et dolore suo sanciret.",
  author: "John Doe, Street Artist"
}
function App() {
  return (
    <>
      <Header headerLinks={mockHeaderData}/>
      <Hero text={mockHer0.text} img={mockHer0.img} />
      <Testimonial text={mockTest.text} author={mockTest.author}/>
      <Newsletter send={(x: string)=> console.log(x)}/>
    </>
  );
}

export default App;
