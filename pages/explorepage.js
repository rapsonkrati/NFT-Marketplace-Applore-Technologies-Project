import styles from "../public/styles/explore.module.css";

import Header from "../components/header";
import Explorehome from "../components/explorehome";
function Explore() {
    return (
        <>
            <div >
                <Header className={styles.header}></Header>
            </div>
            <Explorehome></Explorehome>

        </>
    );
};
export default Explore