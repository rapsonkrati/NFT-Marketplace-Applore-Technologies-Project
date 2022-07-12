import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "../public/styles/popuppayment.module.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 650,
    fontFamily: 'Montserrat',
    borderRadius: '20px',
    bgcolor: 'black',
    border: '0.1px solid #FFFF',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="outlined" className={styles.bidbutton}>Bid Now</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <h7 className={styles.heading}> Place a Bid </h7>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <h1 className={styles.content}> You are about to place a bid Golden Mutant
                            Monkey #114 General from GoldenMonkum </h1>
                    </Typography>
                    <div className={styles.ethidbody}>
                        <div className={styles.firstline}>
                            <div className={styles.ethimg}></div>
                            <h2 className={styles.ethid}>97BUHIEIF3WOIOIMIJ</h2>
                        </div>
                        <h2 className={styles.eth}>Ethereum</h2>
                    </div>
                    <input
                        className={styles.field}
                        type="text"
                        value="2"
                    ></input>
                    <p className={styles.biddingbalance}>Your Bidding Balance</p>
                    <p className={styles.biddingbalance}>Your balance</p>
                    <p className={styles.biddingbalance}>Service fee</p>
                    <p className={styles.biddingbalance}>You will pay</p>
                    <Button variant="outlined" className={styles.paycard}> Add funds with </Button>
                    <div className={styles.visa}></div>

                    <Button variant="outlined" onClick={handleClose} className={styles.placebidbutton}>Place Bid</Button>

                </Box>
            </Modal>
        </div>
    );
}
