import Navbar from "../components/navbar";
import Styles from '../public/styles/Help.module.css';
import Displaycard from '../components/cards';
import Footer from '../components/footer';
import Header from "../components/header";
const Helppage = () => {
    return (
        <>
            <div className={Styles.backg}>
                <Header></Header>
                <div className={Styles.body}>

                    <span className={Styles.container}>
                        <span className={Styles.head}>
                            <div className={Styles.pagehead}>How can we help you?</div>
                            <div className={Styles.mainbtn}><button>Submit Request</button></div>
                        </span>
                    </span>
                    <Displaycard></Displaycard>
                    <chat className={Styles.chat}><button>Chat</button></chat>
                    <Footer></Footer>
                </div>
            </div>

        </>
    )
}
export default Helppage;