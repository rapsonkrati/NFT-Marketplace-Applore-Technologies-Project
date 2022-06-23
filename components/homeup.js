import Image from "next/image";
import homelogo from "../public/images/homelogo.png";
import Link from 'next/link';
import Header from "../components/header";
import Styles from "../public/styles/homeup.module.css";
const Homeup = () => {
    return (

        <>
            <div style={{
                backgroundImage: "url(./images/bghome.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
                className={Styles.containermain}>
                <Header></Header>

                <homeimage className={Styles.homelogo}>
                    <Image src={homelogo} />
                </homeimage>
                <div>
                    <div>
                        <h1 className={Styles.headmain}>Discover, find, and sell extraordinary NFTs</h1>
                        <p className={Styles.para}> Lörem ipsum krov sysungen. Tisans antektig, och doll. Vare teranykon i spår. Yska anamatisk fonat utan pedat. Kuling ada</p>
                    </div>

                    <div className={Styles.button}>
                        <span className={Styles.explore} ><a href="/explorepage"></a>Explore</span>
                        <span className={Styles.create}>Create</span>
                    </div>
                    <div className={Styles.achivement1cont}>
                        <span className={Styles.achivement1}>$34 billion</span>
                        
                        <span className={Styles.achivement2}>876+</span>
                        
                        <div className={Styles.achivement3}><span>42 million</span></div>

                    </div>

                    <div>
                        <div className={Styles.achcontpara}>
                            <p className={Styles.achivement1p}>24h trading volume on Company name</p>
                            <p className={Styles.achivement2p}>Cryptocurrencies listed</p>
                            <p className={Styles.achivement3p}>Registered users who trust company name</p>
                        </div>
                    </div>
                    <div >

                    </div>

                </div>
            </div>

        </>
    );
};

export default Homeup;



      // <homeimage className={Styles.toplogo}></homeimage>



      // <about >

    
      //   

      //   <div className={Styles.achivement3}><span>42 million</span></div>
      //   
      // </about>
