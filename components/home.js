import Image from "next/image";
import Styles from "../public/styles/Home.module.css";
import homelogo from "../public/images/homelogo.png";
const Mainscreen = () => {
  return (
    <>
      <div className={Styles.bgghome}></div>
      <homeimage className={Styles.toplogo}></homeimage>
        <div className={Styles.navcon}>
          <ul>
            <li>
              <a className={Styles.hometop} href="#">Home</a>
            </li>
            <li>
              <a className={Styles.exploretop} href="#">Explore</a>
            </li>
            <li>
              <a className={Styles.createtop} href="#">Create</a>
            </li>
            <li>
              <a className={Styles.resourcestop} href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div></div>
        <div className={Styles.section1}>
          <headline className={Styles.section1i}>
            <h2 className={Styles.headmain}>
              Discover, find, and sell extraordinary NFTs
            </h2>
            <p className={Styles.contentd}>
              Lörem ipsum krov sysungen. Tisans antektig, och doll. Vare
              teranykon i spår. Yska anamatisk fonat utan pedat. Kuling ada.
            </p>
            <links >
                <button className={Styles.link1} href="#">Explore</button>
                <button className={Styles.link2} href="#">Create</button>
            </links>
          </headline>
          <homeimage className={Styles.homelogo}>
            <Image src={homelogo} />
          </homeimage>
        </div>
      <about >
        <div className={Styles.achivement1}><span>$34 billion</span></div>
        <p className={Styles.achivement1p}>24h trading on comapny volume</p>

        <div className={Styles.achivement2}><span>876+</span></div>
        <p className={Styles.achivement2p}>Cryptocurrencies listed</p>

        <div className={Styles.achivement3}><span>42 million</span></div>
        <p className={Styles.achivement3p}>Registered users who trust company name</p>

      </about>
    </>
  );
};

export default Mainscreen;
