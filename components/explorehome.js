import Image from "next/image";
import Styles from "../public/styles/explorehome.module.css";
import homelogo from "../public/images/homelogo.png";
import Exploretemp from "./exploretemp";
const Explorehome = () => {
    return (
        <>
            <div className={Styles.exploremain}>
                <h1>
                    Explore
                </h1>
                <span className={Styles.blockchain}>Blockchain<span></span></span>
                <span className={Styles.categories}>Categories<span></span></span>
                <span className={Styles.collection}>Collection<span></span></span>
            </div>
            <Exploretemp></Exploretemp>
            {/* <div className={Styles.contbody}>

            </div>
                <span className={Styles.box1}><img></img>COLLECTION NAME </span>
                <span className={Styles.box2}>COLLECTION NAME</span>
                <span className={Styles.box3}>COLLECTION NAME</span>
                <span className={Styles.box4}>COLLECTION NAME</span>
                        <div className={Styles.contentbox}>
                <p className={Styles.contentbox1}>by Creator name</p>
                <p className={Styles.contentbox2}>by Creator name</p>
                <p className={Styles.contentbox3}>by Creator name</p>
                <p className={Styles.contentbox4}>by Creator name</p>
            </div>

            <div className={Styles.contbody2}>
                <span className={Styles.box1}><img></img>COLLECTION NAME </span>
                <span className={Styles.box2}>COLLECTION NAME</span>
                <span className={Styles.box3}>COLLECTION NAME</span>
                <span className={Styles.box4}>COLLECTION NAME</span>
            </div> */}

        </>
    );
};

export default Explorehome;
