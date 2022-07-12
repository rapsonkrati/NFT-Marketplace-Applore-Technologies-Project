import Image from 'next/image';
import styles from "../public/styles/bidnow.module.css";
import Footer from '../components/footer';
import HeaderBlack from "../components/headerblack";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import discord from "../public/images/discord.svg";
import fb from "../public/images/facebook.svg";
import insta from "../public/images/insta.svg";
import tweet from "../public/images/twitter.svg";
import yt from "../public/images/youtube.svg";
import displayicons from "../components/tinyicons";
import LabTabs from "../components/bidnowtab";
import BasicModal from '../components/popuppayment';
import Eth from '../public/images/eth.svg';
import List from '../public/images/listting.svg';
import Creator from '../public/images/creator.svg';
const Bidnow = () => {
    return (
        <>


            {/* Header of the page */}
            <div className={styles.header}>
                <HeaderBlack></HeaderBlack>
                <div className={styles.logobody}>
                    <span className={styles.logo}></span>
                </div>
            </div>
            {/* Header of the page Closed */}
            {/* Body */}
            <div className={styles.backg}>
                {/* Container body left */}
                <div className={styles.flexchild}>
                    <div className={styles.bidimage}> </div>
                    <div className={styles.iconline}>
                        <Image src={Creator} />
                        <h7 className={styles.iconlineusername}>Bartholomew</h7>
                    </div>
                    <div className={styles.iconline}>
                        <icons className={styles.tinyicons}>
                            {displayicons(tweet, insta, fb, discord, yt)}
                        </icons>
                    </div>


                    <div className={styles.buyersbody}>
                        <Accordion className={styles.buyers}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    <div className={styles.listingbody}>
                                        <div className={styles.listingimg}>
                                            <Image src={List} ></Image>
                                        </div>
                                        <div className={styles.listingimg}>
                                            <h7 className={styles.listing}>Listings</h7>
                                        </div>
                                    </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className={styles.ethimgbody}>
                                        <div className={styles.ethimg}>
                                            <Image src={Eth} ></Image>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.weth}>0.13 WETH</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>about 24 hours</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>Username</h7>
                                        </div>
                                    </div>

                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>
                                    <div className={styles.ethimgbody}>
                                        <div className={styles.ethimg}>
                                            <Image src={Eth} ></Image>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.weth}>0.13 WETH</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>about 24 hours</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>Username</h7>
                                        </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>
                                    <div className={styles.ethimgbody}>
                                        <div className={styles.ethimg}>
                                            <Image src={Eth} ></Image>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.weth}>0.13 WETH</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>about 24 hours</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>Username</h7>
                                        </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>
                                    <div className={styles.ethimgbody}>
                                        <div className={styles.ethimg}>
                                            <Image src={Eth} ></Image>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.weth}>0.13 WETH</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>about 24 hours</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>Username</h7>
                                        </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>
                                    <div className={styles.ethimgbody}>
                                        <div className={styles.ethimg}>
                                            <Image src={Eth} ></Image>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.weth}>0.13 <h7 className={styles.wethtext}>WETH</h7></h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>about 24 hours</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>Username</h7>
                                        </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>
                                    <div className={styles.ethimgbody}>
                                        <div className={styles.ethimg}>
                                            <Image src={Eth} ></Image>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.weth}>0.13 WETH</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>about 24 hours</h7>
                                        </div>
                                        <div className={styles.ethimg}>
                                            <h7 className={styles.listinglight}>Username</h7>
                                        </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                    </div>
                </div>
                {/* Container body left closed */}
                {/* Container body right */}
                <div className={styles.flexchild}>
                    <div className={styles.bidright}>
                        <p className={styles.minbid}>Minimum Bid</p>
                        <div className={styles.amount}>
                            <h7 className={styles.amt}>0.03</h7>
                            <p className={styles.amtdollar}>($786.32)</p>
                        </div>
                    </div>
                    <Stack>
                        <div className={styles.bidnowbody}>
                            <BasicModal></BasicModal>
                        </div>
                    </Stack>
                    <div className={styles.accordianbody}>
                        <Accordion className={styles.accordian}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className={styles.arrow} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"

                            >
                                <Typography><h1 className={styles.descrheading}>Description </h1></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <h1 className={styles.descr}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </h1>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <p className={styles.sale} >Sale ends May 6, 2022 at 4:39pm GMT+5:30</p>
                    {/* <div className={styles.timerbody}>
                        <div>
                        <h7 className={styles.timertext}>23</h7>
                        </div>
                    </div> */}
                    <div className={styles.reviews}>
                        <LabTabs></LabTabs>
                    </div>
                </div>
                {/* Container body right Closed*/}
            </div>
            {/* Body Closed*/}
            <Footer></Footer>



        </>
    )
}
export default Bidnow;







