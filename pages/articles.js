import Styles from '../public/styles/Articles.module.css';
import Displayarticles from '../components/articlescard';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
const Articles=()=>{
return( 
    <div>
    <Navbar></Navbar>
    <Displayarticles></Displayarticles>
    <Footer></Footer>
    </div>
) 
}
export default Articles