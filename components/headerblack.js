import Image from "next/image";
import Styles from "../public/styles/headerblack.module.css";
import Link from 'next/link';
const HeaderBlack = () => {
    return (


        <div className={Styles.navcon}>

            <div className={Styles.hometop}>
                <a href="/">Home</a>
            </div>

            <div className={Styles.exploretop}>
                <a href="/explorepage">Explore</a>
            </div>

            <div className={Styles.createtop}>
                <a href="/">Create</a>
            </div>

            <div className={Styles.resourcestop} >
                <a href="/">Resources</a>
            </div>
        </div>
    );
};

export default HeaderBlack;