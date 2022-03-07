import i1 from './audio/Aagumu_Prabhu.mp3'
import i2 from './audio/Bhajore_Bhajore.mp3'
import i3 from './audio/Gopala_Naa_Sarvam.mp3'
import i4 from './audio/Govardhana_Giridhari.mp3'
import './pages.css'
const Blogs = () =>
{
    return(<div className="blogs"><h1>SRI KRISHNA BHAKTI KSHETRAM</h1>
  
  
  <h2>VIEDO SONGS</h2>
  <iframe width="420" height="315"
  src="https://www.youtube.com/embed/j341zdbIRf0"></iframe>
  <iframe width="420" height="315"
  src="https://www.youtube.com/embed/YlHYgco8XlM"></iframe>
  <iframe width="420" height="315"
  src="https://www.youtube.com/embed/iPvjYXt5xx0"></iframe>
  
  <h3>SONGS</h3>
  <audio controls>  
  <source src={i1} type="audio/mp3"/>  
   Your browser does not support the html audio tag.  
  </audio> 
  <audio controls>  
  <source src={i2} type="audio/mp3"/>  
   Your browser does not support the html audio tag.  
  </audio> 
  <audio controls>  
  <source src={i3} type="audio/mp3"/>  
   Your browser does not support the html audio tag.  
  </audio> 
  <audio controls>  
  <source src={i4} type="audio/mp3"/>  
   Your browser does not support the html audio tag.  
  </audio> 
  



  <h4>CARTOONS</h4>
  <iframe width="420" height="315"
  src="https://www.youtube.com/embed/COkL7HEhkAk"></iframe>
  <iframe width="420" height="315"
  src="https://www.youtube.com/embed/MNf8ozuvc9k"></iframe>
  <iframe width="420" height="315"
  src="https://www.youtube.com/embed/p9mCA1beVR8"></iframe>
  
  </div>);
}
export default Blogs;