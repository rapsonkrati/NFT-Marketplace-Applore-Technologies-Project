import styles from "../public/styles/Home.module.css";
import Listmain from "../components/footer";
import Work from "../components/work";
import Mainscreen from "../components/home";
import Seller from "../components/tseller";
import LiveAuction from "../components/liveauctions";
import Topcollection from "../components/tcollection";
import Topcollectors from "../components/topcollectors";
import Topbids from "../components/topbids";
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
      <footer className={styles.footer}><Listmain /></footer></div>

  );
}
export default Home
