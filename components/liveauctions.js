import Styles from '../public/styles/Live.module.css';
const LiveAuction = () => {
    return (
        <>
            <header>
                <h1 className={Styles.liveauction}>Live Auctions</h1>
            </header>
            <span className={Styles.endingsoon}>
                <select>
                    <option>Ending Soon</option>
                </select>
            </span>
            <span className={Styles.cardsauction}>
                <div className={Styles.cardimg1}></div>
                <h3 className={Styles.artname}>Pastel artwork</h3>
                <p className={Styles.owner}>
                    Owner
                </p>
                <p className={Styles.username}>
                    Username
                </p>
                <span className={Styles.cardimg1_1}></span>
                <span className={Styles.cardimg1_2}></span>
                <p className={Styles.creator}>Creator</p>
                <p className={Styles.username2}>Username</p>
                <span className={Styles.bid}>
                    <p className={Styles.bidamt}>Highest bid</p>
                    <span className={Styles.amt}>400</span>
                    <span className={Styles.eth}></span>
                </span>
            </span>


            <span className={Styles.cardsauction2}>
                <div className={Styles.cardimg2}></div>
                <h3 className={Styles.artname}>Pastel artwork</h3>
                <p className={Styles.owner}>
                    Owner
                </p>
                <p className={Styles.username}>
                    Username
                </p>
                <span className={Styles.cardimg2_1}></span>
                <span className={Styles.cardimg2_2}></span>
                <p className={Styles.creator}>Creator</p>
                <p className={Styles.username2}>Username</p>
                <span className={Styles.bid}>
                    <p className={Styles.bidamt}>Highest bid</p>
                    <span className={Styles.amt}>400</span>
                    <span className={Styles.eth}></span>
                </span>
            </span>


            <span className={Styles.cardsauction3}>
                <div className={Styles.cardimg3}></div>
                <h3 className={Styles.artname}>Pastel artwork</h3>
                <p className={Styles.owner}>
                    Owner
                </p>
                <p className={Styles.username}>
                    Username
                </p>
                <span className={Styles.cardimg3_1}></span>
                <span className={Styles.cardimg2_2}></span>
                <p className={Styles.creator}>Creator</p>
                <p className={Styles.username2}>Username</p>
                <span className={Styles.bid}>
                    <p className={Styles.bidamt}>Highest bid</p>
                    <span className={Styles.amt}>400</span>
                    <span className={Styles.eth}></span>
                </span>
            </span>


            <span className={Styles.cardsauction4}>
                <div className={Styles.cardimg4}></div>
                <h3 className={Styles.artname}>Pastel artwork</h3>
                <p className={Styles.owner}>
                    Owner
                </p>
                <p className={Styles.username}>
                    Username
                </p>
                <span className={Styles.cardimg4_1}></span>
                <span className={Styles.cardimg4_2}></span>
                <p className={Styles.creator}>Creator</p>
                <p className={Styles.username2}>Username</p>
                <span className={Styles.bid}>
                    <p className={Styles.bidamt}>Highest bid</p>
                    <span className={Styles.amt}>400</span>
                    <span className={Styles.eth}></span>
                </span>

            </span>


            <span className={Styles.cardsauction5}>
                <div className={Styles.cardimg5}></div>
                <h3 className={Styles.artname}>Pastel artwork</h3>
                <p className={Styles.owner}>
                    Owner
                </p>
                <p className={Styles.username}>
                    Username
                </p>
                <span className={Styles.cardimg5_1}></span>
                <span className={Styles.cardimg5_2}></span>
                <p className={Styles.creator}>Creator</p>
                <p className={Styles.username2}>Username</p>
                <span className={Styles.bid}>
                    <p className={Styles.bidamt}>Highest bid</p>
                    <span className={Styles.amt}>400</span>
                    <span className={Styles.eth}></span>
                </span>
            </span>
        </>
    );
};
export default LiveAuction