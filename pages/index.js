import styles from "../public/styles/Home.module.css";
import Listmain from "../components/footer";
import Work from "../components/work";
import Mainscreen from "../components/home";
import Seller from "../components/tseller";
import LiveAuction from "../components/liveauctions";
import Topcollection from "../components/tcollection";
import Topcollectors from "../components/topcollectors";
import Topbids from "../components/topbids";
import Explorehome from "../components/explorehome";
import Footer from '../components/footer';
function Home() {
  return (
    <div className={styles.container}>
      <Mainscreen></Mainscreen>
      <Work></Work>
      <Seller></Seller>
      <LiveAuction></LiveAuction>
      <Topcollection></Topcollection>
      <Topcollectors></Topcollectors>
      <Topbids></Topbids>
      <Explorehome></Explorehome>
      <div className={styles.footermain}>
        <Footer></Footer>
      </div>
      </div>

  );
}
export default Home
