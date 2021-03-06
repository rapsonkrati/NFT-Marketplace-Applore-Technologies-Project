import Home from "../pages";
import Displaylist from "./list";
import styles from "../public/styles/footer.module.css";
import discord from "../public/images/discord_black.svg";
import fb from "../public/images/facebook_black.svg";
import insta from "../public/images/insta_black.svg";
import tweet from "../public/images/twitter_black.svg";
import yt from "../public/images/youtube_black.svg";
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
    { name: "Virtual Worlds", link: "#" },
  ];
  var list2 = [
    { name: "Profile", link: "/profile" },
    { name: "Favorites", link: "#" },
    { name: "Watchlist", link: "#" },
    { name: "My Collections", link: "#" },
    { name: "Settings", link: "#" },
    { name: "Stats", link: "#" },
    { name: "Rankings", link: "#" },
    { name: "Activity", link: "#" },
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
    { name: "Newsletter", link: "#" },
  ];
  var list4 = [
    { name: "About", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Ventures", link: "#" },
    { name: "Grants" },
  ];
  return (
    <>
      <div className={styles.footcontainer}>
        <div className={styles.text1}>
          <text className={styles.gupdates}>Get updates</text>
          <text className={styles.joc}>Join Our Community</text>
        </div>

        <div className={styles.inputline}>
          <input
            className={styles.field}
            type="text"
            value="Your e-mail"
          ></input>
          <button className={styles.imin}>I'm in</button>
          <icons className={styles.tinyicons}>
            {displayicons(tweet, insta, fb, discord, yt)}
          </icons>
        </div>

        <hr className={styles.footerline}></hr>

        <div className={styles.footerlogo}>
          <span className={styles.logo}></span>
        </div>

        <div className={styles.thirdline}>
          <p>
            We are India's first NFT buy-sell marketplace where you can buy and
            sell awesome & exclusive NFTs from our impressive collection of
            premium sellers. The best part of NFTSuit is that it has no
            transaction fees.
          </p>
        </div>

        <div className={styles.listcontainer}>
          <div className={styles.meds}>
            <div className={styles.listcontainer1}>
              <h7 className={styles.listtitle}>Marketplace</h7>
              <list className={styles.list}>{Displaylist(list1)}</list>
            </div>

            <div className={styles.listcontainer1}>
              <h7 className={styles.listtitle}>My Account</h7>
              <list className={styles.list}>{Displaylist(list2)}</list>
            </div>
          </div>
          <div className={styles.meds}>
            <div className={styles.listcontainer1}>
              <h7 className={styles.listtitle}>Resources</h7>
              <list className={styles.list}>{Displaylist(list3)}</list>
            </div>

            <div className={styles.listcontainer1}>
              <h7 className={styles.listtitle}>Company</h7>
              <list className={styles.list}>{Displaylist(list4)}</list>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Listmain;

