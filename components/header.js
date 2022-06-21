import Image from "next/image";
import Styles from "../public/styles/Home.module.css";
import Link from 'next/link';
const Header = () => {
    return (


        <div className={Styles.navcon}>
            <ul>
                <li>
                    <a className={Styles.hometop} href="/">Home</a>
                </li>
                <li>
                    <a className={Styles.exploretop} href="/explorepage">Explore</a>
                </li>
                <li>
                    <a className={Styles.createtop} href="/">Create</a>
                </li>
                <li>
                    <a className={Styles.resourcestop} href="/">Resources</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;