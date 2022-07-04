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
const Bidnow = () => {
    return (
        <>
            <div className={styles.backg}>
                <div className={styles.header}>
                    <HeaderBlack></HeaderBlack>
                    <div className={styles.logobody}>
                        <span className={styles.logo}></span>
                    </div>
                </div>

                <div className={styles.bidcontainer}>
                    <div className={styles.bidimage}>
                    </div>
                    <div className={styles.bidright}>
                        <p className={styles.minbid}>Minimum Bid</p>
                        <div className={styles.amount}>
                            <h7 className={styles.amt}>0.03</h7>
                            <p className={styles.amtdollar}>($786.32)</p>
                        </div>

                        <Stack>
                            <Button variant="outlined" className={styles.bidbutton}>Bid Now</Button>
                        </Stack>
                        <div className={styles.accordianbody}>
                            <Accordion className={styles.accordian}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className={styles.arrow} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"

                                >
                                    <Typography>Description</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <p className={styles.sale} >Sale ends May 6, 2022 at 4:39pm GMT+5:30</p>
                    </div>
                </div>




                <div className={styles.buyersbody}>
                    <Accordion className={styles.buyers}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography><p className={styles.listing}>Listings</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className={styles.weth}>0.13 WETH</p>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Typography>
                                <p className={styles.weth}>0.13 WETH</p>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Typography>
                                <p className={styles.weth}>0.13 WETH</p>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Typography>
                                <p className={styles.weth}>0.13 WETH</p>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Typography>
                                <p className={styles.weth}>0.13 WETH</p>
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Typography>
                                <p className={styles.weth}>0.13 WETH</p>
                            </Typography>
                        </AccordionDetails>

                    </Accordion>
                </div>
            </div>

            <Footer></Footer>

        </>
    )
}
export default Bidnow;