import Image from 'next/image';
import Navbar from "../components/navbar";
import styles from '../public/styles/profile.module.css';
import Displaycard from '../components/cards';
import Footer from '../components/footer';
import HeaderBlack from "../components/headerblack";
import HeaderImage from '../public/images/profilebg.png';
import ProfilePhoto from '../public/images/profile_photo.svg';
import Eth from '../public/images/eth.svg';
import StandardImageList from '../components/profileimagefolio.js';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicMenu from '../components/buttonbox';
const Helppage = () => {
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
            <div className={styles.body}>
                <div className={styles.headerimage}>
                    <Image src={HeaderImage} />
                </div>
                <div className={styles.profilephoto}>
                    <Image src={ProfilePhoto} />
                </div>
                <div className={styles.username}>
                    <h7>Username</h7>
                </div>

                <div className={styles.ethidbody}>
                    <div className={styles.ethid}>
                        <Image src={Eth} className={styles.ethimg} />
                        <h2 className={styles.ethid}>0x5c0bEfe9C3323</h2>
                    </div>
                </div>


                <div className={styles.searchlinebody}>
                    <div className={styles.textbox}>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                                height: 50,
                                backgroundColor: '#323A42',
                                color: '#C1C1C1',
                                border: '0px solid #343434',
                                borderRadius: '5px'
                            }}
                            className={styles.searchbox}
                        >
                            <TextField fullWidth label="Search by name" id="Search by name" />
                        </Box>
                    </div>

                    <div className={styles.textbox1}>
                        <BasicMenu></BasicMenu>
                    </div>
                    <div className={styles.textbox2}>
                        <BasicMenu></BasicMenu>
                    </div>

                </div>


            </div>


            <div className={styles.imagefoliobody}>
                <StandardImageList></StandardImageList>
            </div>
            {/* Body Closed */}
            <Footer></Footer>

        </>
    )
}
export default Helppage;