import { useEffect, useState } from "react";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Newsletter } from "../Newsletter";
import { Testimonial } from "../Testimonial";

type PagesList = { url: string, id: string}[]

type PageContent = { type: string, [key:string]: string }[]

const headers = { Authorization: 'Basic ' + btoa('adchitects:jsrulezzz'), "Content-Type": 'application/json' }
export const Homepage = () => {
  const [pagesList, setPagesList] = useState<PagesList>([]);
  const [homepageContent, setHomepageContent] = useState<PageContent>([]);
  const [message, setMessage] = useState('')
  const [problem, setProblem] = useState(false)

  useEffect(() => {
    fetch('https://adchitects-cms.herokuapp.com/pages', {method: 'GET', headers}).then(res => res.json()).then(data => setPagesList(data as PagesList));
  }, []);

  useEffect(() => {
    const id = pagesList.find(page => page.url === '/')?.id;
    id && fetch(`https://adchitects-cms.herokuapp.com/page/${id}`, {method: 'GET', headers}).then(res => res.json()).then(data => setHomepageContent(data.sections as PageContent));
  }, [pagesList])

  const heroSectionData = homepageContent.find(section => section.type === 'hero');
  const testimonialSectionData = homepageContent.find(section => section.type === 'testimonial');

  const sendNewsletterRequest = async (email: string) => {
    const response = await fetch('https://adchitects-cms.herokuapp.com/newsletter', { method: 'POST', headers , body: JSON.stringify({ email })})

    if( response.status < 200 || response.status > 299 ) {
      setProblem(true)
    }
    const body = await response.json();

    setMessage(body.message)
  }

  return (
    <>
      {pagesList && <Header headerLinks={pagesList.filter(page => page.url !== '/')}/>}
      {heroSectionData?.text && heroSectionData?.img && <Hero text={heroSectionData.text} img={heroSectionData.img} />}
      {testimonialSectionData?.text && testimonialSectionData?.author && <Testimonial text={testimonialSectionData.text} author={testimonialSectionData.author}/>}
      <Newsletter send={sendNewsletterRequest} problem={problem} message={message}/>
    </>
  );
}
