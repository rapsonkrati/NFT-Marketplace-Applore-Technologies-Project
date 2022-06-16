import Styles from '../public/styles/Help.module.css';
import Navbar from '../components/navbar';

const displayradiobtn=()=>{
    return(
        <ul>
            <li><input type="radio" id="html" name="fav_language" value="HTML"/><label for="html">HTML</label></li>
            <li><input type="radio" id="css" name="fav_language" value="CSS"/><label for="css">CSS</label></li>
            <li><input type="radio" id="javascript" name="fav_language" value="JavaScript"/><label for="javascript">JavaScript</label></li>
        </ul>
    )
}
const submit=()=>{
    return(
        <div>
        <Navbar></Navbar>
            <div className={Styles.subbuttoncon}>
            <div>{displayradiobtn}</div>
            <div></div>
            </div>
            
        </div>
    )

}
export default submit;