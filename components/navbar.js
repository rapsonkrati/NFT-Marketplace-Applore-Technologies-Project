import Image from "next/image";
import Icon from "../public/images/youtube.svg";
import Styles from "../public/styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <ul className={Styles.navbardiv1}>
        <li className={Styles.navbardiv1li}>
          <a>Home</a>
        </li>
        <li className={Styles.navbardiv1li}>
          <a>Explore</a>
        </li>
        <li className={Styles.navbardiv1li}>
          <a>Create</a>
        </li>
        <li className={Styles.navbardiv1li}>
          <a>Resources</a>
        </li>
      </ul>
      <div className={Styles.navbardiv2}>LOGO</div>
      <div className={Styles.navbardiv3}>
        <div><input className={Styles.searchbar} type="text"></input></div>
        <div>
          <Image src={Icon} className={Styles.Imgicon}></Image>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
