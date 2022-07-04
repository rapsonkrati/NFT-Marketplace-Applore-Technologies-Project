import styles from "../public/styles/helpfaq.module.css";
import Footer from '../components/footer';
import Header from "../components/header";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Accordian from "../components/accordion";
const Helpfaq = () => {
    return (
        <>
            <div className={styles.backg}>
                <Header></Header>
                <div className={styles.accordiancontainer}>
                    <Accordian></Accordian>
                </div>
                <chat className={styles.chat}><button>Chat</button></chat>


                <Footer></Footer>
            </div>

        </>
    )
}
export default Helpfaq;
