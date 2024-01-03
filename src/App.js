import logo from './logo.svg';
import './App.css';
import {styled} from 'styled-components'
import {Data} from './data'
import ContentSlider from './ContentSlider'
function App() {
  const setLine=(id)=>{
    if(id=='ab'){
      document.getElementById(id).style.borderBottom="5px solid darkviolet"
      document.getElementById('rev').style.borderBottom="none"
      document.getElementById('ins').style.borderBottom="none"
    }
    if(id=='rev'){
      document.getElementById(id).style.borderBottom="5px solid darkviolet"
      document.getElementById('ab').style.borderBottom="none"
      document.getElementById('ins').style.borderBottom="none"
    }
    if(id=='ins'){
      document.getElementById(id).style.borderBottom="5px solid darkviolet"
      document.getElementById('rev').style.borderBottom="none"
      document.getElementById('ab').style.borderBottom="none"
    }
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev"><img src='https://cdn-icons-png.flaticon.com/128/2985/2985161.png'/></button> ,
    nextArrow: <button className="slick-next"><img src='https://cdn-icons-png.flaticon.com/128/5436/5436598.png'/></button>,
  };
  const testiomonials=[
    {text:Data[0].testimonial.text,
      reviewer_name:Data[0].testimonial.reviewer_name,
      reviewer_designation:Data[0].testimonial.reviewer_designation
    },
    {text:Data[0].testimonial.text,
      reviewer_name:Data[0].testimonial.reviewer_name,
      reviewer_designation:Data[0].testimonial.reviewer_designation
    }
  ]
  return (
    <Main className="App">
      <Container>
        <div className='data'>
          <div className='instructor'>{Data[0].instructor.name}</div>
          <div className='title'>{Data[0].course.title}</div>
        </div>
      </Container>
      <Nav>
        <a id='ab' href="#about" onClick={()=>{setLine('ab')}}>ABOUT</a>
        <a id='ins' href='#instructor' onClick={()=>{setLine('ins')}}>INSTRUCTOR</a>
        <a id='rev' href='#reviews' onClick={()=>{setLine('rev')}}>REVIEWS</a>
      </Nav>
      <Second>
        <div className='one'>
          <AboutCourse id="about">
            <h1>About the course</h1>
            <div dangerouslySetInnerHTML={{__html:Data[0].about_instructor.html_content}}></div>
          </AboutCourse>
          <Expect>
            <h1>What to expect from the course</h1>
            <div className='expect' dangerouslySetInnerHTML={{__html:Data[0].course.what_to_expect.html_content}}></div>
          </Expect>
          <Topics>
            <h1>Key topics covered</h1>
            <div className='topics' dangerouslySetInnerHTML={{__html:Data[0].course.key_topics.html_content}}></div>
          </Topics>
        </div>
        <div className='two'>
          <CourseFee> 
            <h2>Course fees</h2>
            <h1 dangerouslySetInnerHTML={{__html:Data[0].course.fee.amount}}></h1>
            <b>What's included:</b>
            <ul>
              <li>{Data[0].course.inclusions.on_demand_videos} on-demand videos</li>
              <li>{Data[0].course.inclusions.live_qa_sessions?<p>Live Stream sessions available</p>:<p></p>}</li>
              <li>{Data[0].course.inclusions.whatsapp_community?<p>An active whatsapp whatsapp community</p>:<p></p>}</li>
              <button>Register today</button>
            </ul>
          </CourseFee>
        </div>
      </Second>
      <About id='instructor'>
        <h1>About the Instructor</h1>
        <div className='aboutmain'>
          <div className='image'>
            <img src='https://th.bing.com/th/id/OIP.TtelB83VuuH1ij7nFv0a7wHaII?pid=ImgDet&w=201&h=220&c=7&dpr=1.4'/>
          </div>
          <div className='data'>
            <div dangerouslySetInnerHTML={{__html:Data[0].about_instructor.html_content}}></div>
            <div className='socialmedia'>
              {Data[0].instructor.social_media.facebook?<b className='face'><img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png'/>facebook</b>:<p></p>}
              {Data[0].instructor.social_media.twitter?<b className='face'><img src='https://cdn-icons-png.flaticon.com/128/5968/5968830.png'/>twitter</b>:<p></p>}
              {Data[0].instructor.social_media.youtube?<b className='face'><img src='https://cdn-icons-png.flaticon.com/128/1384/1384060.png'/>Youtube</b>:<p></p>}
              {Data[0].instructor.social_media.instagram?<b className='face'><img src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png'/>Instagram</b>:<p></p>}
            </div>
          </div>
        </div>
      </About>
      <Testimonial id="reviews">
        <ContentSlider/>
      </Testimonial>  
    </Main>
  );
}

export default App;
const Container=styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://cdn.wionews.com/sites/default/files/inline-images/Nityanand%20Charan%20Das.jpg");
  color: black;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-blend-mode: darken;
  .data{
    top: 60%;
    position: absolute;
    color: white;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    height: auto;
    width: 30%;
    padding: 5%;
  }
  .instructor{
    font-size: 1em;
  }
  .title{
    font-size: 2em;
  }
  @media screen and (max-width:768px) {
    .data{
      position: relative;
      justify-content: center;
      align-items: center;
      display: flex;
      height: auto;
      width: 100%;
      margin-bottom: 200px;
      flex-direction: column;
      font-size: 10px;
      padding: 10px;
    }
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://cdn.wionews.com/sites/default/files/inline-images/Nityanand%20Charan%20Das.jpg");
    background-size: contain;
    background-repeat:no-repeat;
  }
`
const Nav=styled.div`
  width: 30%;
  padding: 5%;
  text-align: left;
  display: flex;
  height: 10px;
  justify-content: space-between;
  color: darkviolet;
  a{
    text-decoration: none;
    font-weight: bold;
    padding: 10px;
    height: 20px;
    width: auto;
    justify-content: center;
    align-items: center;
  }
  a:hover{
    height: 20px;
    border: 1px solid darkviolet;
    transition: 0.5s ease-in-out;
  }
  @media screen  and (max-width:768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:10%;
    width: 100%;
  }
`
const AboutCourse=styled.div`
  height: auto;
  width: auto;
  text-align: left;
  @media screen and (max-width:768px) {
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
`
const CourseFee=styled.div`
  height: auto;
  width: 50%;
  border: 1px solid black;
  background-color:lightgrey;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 10px;
  button{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:darkviolet;
    border-radius: 20px 20px 20px 20px;
    font-size: 1.2em;
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
  }
  @media screen and (max-width:768px) {
      align-items: center;
      justify-content: center;
      margin-top: 20px;
  }
`
const Second=styled.div`
  padding: 5%;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  .one{
    width: 50%;
  }
  .two{
    width: 50%;
    position: absolute;
    top: 80%;
    left: 60%;
  }
  @media screen and (max-width:768px){
    display: flex;
    flex-direction: column;
    height: max-content;
    width: 100%;
    align-items: center;
    justify-content: center;
    .one{
      width: 100%;
    }
    .two{
      width: 100%;
      position: relative;
      justify-content: center;
      align-items: center;
      margin-right: 50%;
      button{
        font-size: 1em;
        padding: 10px;
        width: 100%;
      }
    }
  } 
`
const Main=styled.div`
  padding: 130px;
`
const Expect=styled.div`
  padding: 0;
  text-align: left;
  .expect li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    text-align:left;
    box-shadow: 1px 1px solid black;
}
.expect li::before {
    content: ''; 
    width: 20px; 
    height: 20px; 
    margin-right: 10px; 
    background: url('https://cdn-icons-png.flaticon.com/128/447/447147.png') no-repeat;
    background-size: contain;
}
@media screen and (max-width:768px){
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
`
const Topics=styled.div`
  text-align: left;
    .topics li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    text-align:left;
}
.topics li::before {
    content: ''; 
    width: 30px; 
    height: 30px; 
    margin-right: 10px; 
    background: url('https://cdn-icons-png.flaticon.com/128/447/447147.png') no-repeat;
    background-size: contain;
}
@media screen and (max-width:768px){
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`
const About=styled.div`
  height: 100%;
  width: 100%;
  text-align: left;
  .face img{
    height:20px;
    width: 20px;
    margin-right: 10px;
  }
  .face{
    display:flex;
    align-items: center;
  }
  .socialmedia{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: space-between;
  }
  .image img{
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
  .data{
    width: 60%;
    margin-left: auto;
  }
  .image{
    height: auto;
    width:20%;
  }
  .aboutmain{
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width:768px) {
    display: flex;
    flex-direction:column;
    h1{
      justify-content: center;
      display: flex;
    }
    .data{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .aboutmain{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .socialmedia{
      display: flex;
      flex-direction: column;
      justify-content: center;
      ul li{
        margin-top: 20px;
      }
    }
    .image{
      height: auto;
      width:auto;
      align-items: center;
      justify-content: center;
    }
    .image img{
    border-radius: 50%;
    height: auto;
    width:auto;
  }
  .instrcutor{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
`
const Testimonial=styled.div`
  background-color: lightgrey;
  margin-top: 40px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:768px){
    width: 100%;
    padding: 0;
    margin-top:50px;
    justify-content: center;
    display: flex;
  }
`
