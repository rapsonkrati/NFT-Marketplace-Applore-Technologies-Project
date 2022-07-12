import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../public/styles/tabpanel.module.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '90%' }} className={styles.body}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="Owner" className={styles.box}>
                    <Tab label="Owner" {...a11yProps(0)} className={styles.tab} />
                    <Tab label="Details" {...a11yProps(1)} className={styles.tab} />
                    <Tab label="History" {...a11yProps(2)} className={styles.tab} />
                    <Tab label="Reviews" {...a11yProps(3)} className={styles.tab} />

                </Tabs>
            </Box>


            <TabPanel value={value} index={0} className={styles.tabpanel}>
                <div className={styles.reviewbody}>
                    <div className={styles.username}>
                        <h6 className={styles.usernameheading}>29/29 on sale for 0.033 ETH each</h6>
                    </div>
                </div>
                
            </TabPanel>
            <TabPanel value={value} index={0} className={styles.tabpanel}>
                               <div className={styles.reviewbody}>
                    <div className={styles.username}>
                        <h6 className={styles.usernameheading}>29/29 on sale for 0.033 ETH each</h6>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={0} className={styles.tabpanel}>
                                <div className={styles.reviewbody}>
                    <div className={styles.username}>
                        <h6 className={styles.usernameheading}>29/29 on sale for 0.033 ETH each</h6>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={0} className={styles.tabpanel}>
                                <div className={styles.reviewbody}>
                    <div className={styles.username}>
                        <h6 className={styles.usernameheading}>29/29 on sale for 0.033 ETH each</h6>
                    </div>
                    
                </div>
            </TabPanel>



            <TabPanel value={value} index={1} className={styles.tabpanel}>

                Our NFT Profit review found that this trading
                robot offers a way to buy and sell NFTs without
                knowing anything about the digital art market.

            </TabPanel>
            <TabPanel value={value} index={1} className={styles.tabpanel}>
                Our NFT Profit review found that this trading
                robot offers a way to buy and sell NFTs without
                knowing anything about the digital art market.
            </TabPanel>
            <TabPanel value={value} index={1} className={styles.tabpanel}>
                Our NFT Profit review found that this trading
                robot offers a way to buy and sell NFTs without
                knowing anything about the digital art market.
            </TabPanel>
            <TabPanel value={value} index={1} className={styles.tabpanel}>
                Our NFT Profit review found that this trading
                robot offers a way to buy and sell NFTs without
                knowing anything about the digital art market.
            </TabPanel>


            <TabPanel value={value} index={2} className={styles.tabpanel}>
                Our NFT Profit review found that this trading
                robot offers a way to buy and sell NFTs without
                knowing anything about the digital art market.
            </TabPanel>
            <TabPanel value={value} index={2} className={styles.tabpanel}>
                Our NFT Profit review found that this trading
                robot offers a way to buy and sell NFTs without
                knowing anything about the digital art market.
            </TabPanel>
            <TabPanel value={value} index={2} className={styles.tabpanel}>
                Our NFT Profit review found that this trading
                robot offers a way to buy and sell NFTs without
                knowing anything about the digital art market.
            </TabPanel>
            <TabPanel value={value} index={2} className={styles.tabpanel}>
                Our NFT Profit review found that this trading
                robot offers a way to buy and sell NFTs without
                knowing anything about the digital art market.
            </TabPanel>



            <TabPanel value={value} index={3} className={styles.tabpanel}>
                <div className={styles.reviewbody}>
                    <div className={styles.username}>
                        <h6 className={styles.usernameheading}>Username</h6>
                    </div>
                    Our NFT Profit review found that this trading
                    robot offers a way to buy and sell NFTs without
                    knowing anything about the digital art market.
                </div>
            </TabPanel>
            <TabPanel value={value} index={3} className={styles.tabpanel}>
                <div className={styles.reviewbody}>
                    <div className={styles.username}>
                        <h6 className={styles.usernameheading}>Username</h6>
                    </div>
                    Our NFT Profit review found that this trading
                    robot offers a way to buy and sell NFTs without
                    knowing anything about the digital art market.
                </div>
            </TabPanel>
            <TabPanel value={value} index={3} className={styles.tabpanel}>
                <div className={styles.reviewbody}>
                    <div className={styles.username}>
                        <h6 className={styles.usernameheading}>Username</h6>
                    </div>
                    Our NFT Profit review found that this trading
                    robot offers a way to buy and sell NFTs without
                    knowing anything about the digital art market.
                </div>
            </TabPanel>
            <TabPanel value={value} index={3} className={styles.tabpanel}>
                <div className={styles.reviewbody}>
                    <div className={styles.username}>
                        <h6 className={styles.usernameheading}>Username</h6>
                    </div>
                    Our NFT Profit review found that this trading
                    robot offers a way to buy and sell NFTs without
                    knowing anything about the digital art market.
                </div>
            </TabPanel>

        </Box>

    );
}