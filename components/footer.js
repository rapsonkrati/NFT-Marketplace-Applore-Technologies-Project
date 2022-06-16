import Home from "../pages";
import Displaylist from "./list";
import styles from "../public/styles/Home.module.css";
import discord from "../public/images/discord.svg";
import fb from "../public/images/facebook.svg";
import insta from "../public/images/insta.svg";
import tweet from "../public/images/twitter.svg";
import yt from "../public/images/youtube.svg";
import displayicons from "./tinyicons";
const Listmain = () => {
  var list1 = [
    { name: "ALL NFTs", link: "#" },
    { name: "solana NFTs", link: "#" },
    { name: "Art", link: "#" },
    { name: "Collectibles", link: "#" },
    { name: "Domain Names", link: "#" },
    { name: "Music", link: "#" },
    { name: "Photography", link: "#" },
    { name: "Sports", link: "#" },
    { name: "Trading Cards", link: "#" },
    { name: "Utility", link: "#" },
    { name: "Virtual Worlds", link: "#" }
  ];
  var list2 = [
    { name: "Profile", link: "#" },
    { name: "Favorites", link: "#" },
    { name: "Watchlist", link: "#" },
    { name: "My Collections", link: "#" },
    { name: "Settings", link: "#" },
    { name: "Stats", link: "#" },
    { name: "Rankings", link: "#" },
    { name: "Activity", link: "#" }
  ];
  var list3 = [
    { name: "Help Center", link: "#" },
    { name: "Platform Status", link: "#" },
    { name: "Partners", link: "#" },
    { name: "Gas-Fee", link: "#" },
    { name: "Marketplace", link: "#" },
    { name: "Taxes", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Docs", link: "#" },
    { name: "Newsletter", link: "#" }
  ];
  var list4 = [
    { name: "About", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Ventures", link: "#" },
    { name: "Grants" }
  ];
  return (
    <div className={styles.footcontainer}>
      <footerup className={styles.footerup}>
        <getupdate className="updates">
          <h4 className={styles.getupdates}>Get Updates</h4>
          <input className={styles.field} type="text" value="Your e-mail"></input>
          <button className={styles.imin}>I'm in</button>
        </getupdate>
        <p className={styles.joc}>Join our Community</p>
        <icons className={styles.tinyicons}>
          {displayicons(tweet, insta, fb, discord, yt)}
        </icons>
      </footerup>
      <footerdown>
        <listcontainer className={styles.Listcontainer}>
          <desc className={styles.logodis}></desc>
          <p className={styles.desfooter}>
            Lörem ipsum sogijävis ässade. Pitas suprarade saning anticentrism,
            popp protopi men fade för laska. Del lyr fast sagire, plapodissade
            och segt. Polyvis voning inte fal foling som immersiv kvasidisorat
            om nösat, och geotonade teng bästsäljerism att gigagt preböktiga
            bebelt laning.
          </p>


          <hr className={styles.footerline}></hr>

          <h2 className={styles.marketplace}>Marketplace</h2>
          <list className={styles.Listsmarketplace}>
            {Displaylist(list1)}
          </list>

          <h2 className={styles.myaccount}>My Account</h2>
          <list className={styles.Listsaccount}>
            {Displaylist(list2)}
          </list>

          <h2 className={styles.resource}>Resource</h2>
          <list className={styles.Listsresource}>
            {Displaylist(list3)}
          </list>

          <h2 className={styles.company}>Company</h2>
          <list className={styles.Listscompany}>
            {Displaylist(list4)}
          </list>

        </listcontainer>
      </footerdown>
    </div>
  );
};
export default Listmain;
