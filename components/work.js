import Styles from '../public/styles/Home.module.css';
const work = () => {
    return (
        <>
            <heading>
                <h4 className={Styles.abouttitle}>Start Selling Your NFTs</h4>
            </heading>
            <span className={Styles.ornamentleft}></span>
            <span className={Styles.ornamentright}></span>
            <span className={Styles.ornamentbr}></span>
            <button className={Styles.wallet}><span className={Styles.iconwalllet}></span></button>
            <button className={Styles.connectw}><p className={Styles.connectwt}>Connect Wallet</p>
                <p className={Styles.connectwalletp}>First setup the wallet of your choice. Connect your wallet to NFTSuit by clicking the wallet icon in the top right area. Find out which wallets we currently support.</p>
            </button>
            <button className={Styles.down}><span className={Styles.downicon}></span></button>
            <button className={Styles.ntfmbtn}><p className={Styles.ntfmbtnhead}>Upload Your NFTs</p>
                <p className={Styles.ntfmbtnp}>Upload the artwork or files (jpg, jpeg, png, GIFs, Video files) that you want to put up on sale. Add title, description, attributes, stats and exclusive content for the buyer.</p>
            </button>
            <button className={Styles.bag}><span className={Styles.iconbag}></span></button>
            <button className={Styles.collectsnft}><p className={Styles.collectsnfthead}>Put them up for Sale</p>
                <p className={Styles.collectsnftp}>You can select from auctions, fixed-price listings, and declining-price listings. You decide how you'd like to sell your NFTs, and NFTSuit will assist you sell them.</p>
            </button>
            <span className={Styles.homearrow}></span>
            <span className={Styles.homearrow2}></span>
            <p className={Styles.topseller}>Top Sellers in</p>
            <span className={Styles.dropdown}>
                <select>
                    <option>24 Hour</option>
                    <option>3 Days</option>
                    <option>5 Days</option>
                    <option>7 Days</option>
                    <option>1 Month</option>
                </select>
            </span>

        </>
    );
};
export default work