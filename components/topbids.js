import Styles from '../public/styles/topbids.module.css';
const Topbids = () => {
    return (
        <>
            <span className={Styles.bgtb}></span>
            <span className={Styles.bgtb2}></span>
            <h1 className={Styles.tbids}>Top Bids</h1>
            <span className={Styles.tbcontainer}>
                <span className={Styles.tbprofile}></span>
                <p>Creator Name</p>
                <h1>Collection Name</h1>
            </span>
            <span className={Styles.contbg1}></span>
            <span className={Styles.tbcontainer1}>
                <span className={Styles.contbg}></span>

                <span className={Styles.tbprofile2}></span>
                <p>Creator Name</p>
                <h1>Collection Name</h1>
            </span>
            <span className={Styles.tbcontainer2}>
                <span className={Styles.tbprofile3}></span>
                <p>Creator Name</p>
                <h1>Collection Name</h1>
            </span>
            <span className={Styles.arrowright}></span>
            <span className={Styles.arrowleft}></span>
            <span className={Styles.arrow1}></span>
            <span className={Styles.arrow2}></span>
        </>
    );
};
export default Topbids