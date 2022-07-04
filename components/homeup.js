import Image from "next/image";
import homelogo from "../public/images/homelogo.png";
import Link from 'next/link';
import Header from "../components/header";
import Styles from "../public/styles/homeup.module.css";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Homeup = () => {
    return (

        <>
        <div className={Styles.bodycontainer}>
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
                        <h1 className={Styles.headmain}>Explore, buy and sell amazing fine art, collectables and NFTs at NFTSuit.</h1>
                        <p className={Styles.para}> We are India's first NFT buy-sell marketplace where you can buy and sell awesome NFTs from our impressive collection of premium sellers.</p>
                    </div>

                    <div className={Styles.button}>
                        <Stack spacing={5} direction="row">
                            <Button variant="outlined" href="/explorepage" className={Styles.explore}>Explore</Button>
                            <Button variant="outlined" className={Styles.create}>Create</Button>
                        </Stack>
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
            </div>

        </>
    );
};

export default Homeup;



{/* <div className={Styles.maincontainer}>
    <Header></Header>
    <div className={Styles.bodycontainer}>
        <h1 className={Styles.headmain}>Explore, buy and sell amazing fine art, collectables and NFTs at NFTSuit.</h1>
        <div className={Styles.homelogocontainer}>
            <homeimage className={Styles.homelogo}>
                <Image src={homelogo} />
            </homeimage>
        </div>
    </div>





</div> */}