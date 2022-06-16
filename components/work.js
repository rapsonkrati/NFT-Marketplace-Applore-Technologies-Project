import Styles from '../public/styles/Home.module.css';
const work = () => {
    return (
        <>
            <heading>
                <h4 className={Styles.abouttitle}>How do we work?</h4>
            </heading>
            <span className={Styles.ornamentleft}></span>
            <span className={Styles.ornamentright}></span>
            <span className={Styles.ornamentbr}></span>
            <button className={Styles.wallet}><span className={Styles.iconwalllet}></span></button>
            <button className={Styles.connectw}><p className={Styles.connectwt}>Connect Wallet</p>
                <p className={Styles.connectwalletp}>Lörem ipsum säpojogg prenade vasöras. Ryjåbel fålig triledes. Terafäliga.</p>
            </button>
            <button className={Styles.down}><span className={Styles.downicon}></span></button>
            <button className={Styles.ntfmbtn}><p className={Styles.ntfmbtnhead}>NFT Marketplace</p>
                <p className={Styles.ntfmbtnp}>Lörem ipsum säpojogg prenade vasöras. Ryjåbel fålig triledes. Terafäliga.</p>
            </button>
            <button className={Styles.bag}><span className={Styles.iconbag}></span></button>
            <button className={Styles.collectsnft}><p className={Styles.collectsnfthead}>Collect & Sell NFTs</p>
                <p className={Styles.collectsnftp}>Lörem ipsum säpojogg prenade vasöras. Ryjåbel fålig triledes. Terafäliga.</p>
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