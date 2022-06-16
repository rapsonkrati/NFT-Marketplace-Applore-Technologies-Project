import Styles from '../public/styles/Help.module.css'
const Card=(title,desc)=>{
    return(
        <div className={Styles.cardflex}> 
            <div className={Styles.card}>
                <div className={Styles.cardtitle}>{title}</div>
                <div className={Styles.carddesc}><p>{desc}</p></div>
                <div></div>
            </div>
        </div>
    )
}
const Displaycard=()=>{
    return(
        <div className={Styles.cardcon}>
            {Card("Buying","Learn how to buy an NFT, understand gas fee and see what’s gas fee at website name")}
            {Card("Buying","Learn how to buy an NFT, understand gas fee and see what’s gas fee at website name")}
            {Card("Buying","Learn how to buy an NFT, understand gas fee and see what’s gas fee at website name")}
            {Card("Buying","Learn how to buy an NFT, understand gas fee and see what’s gas fee at website name")}
            {Card("Buying","Learn how to buy an NFT, understand gas fee and see what’s gas fee at website name")}
            {Card("Buying","Learn how to buy an NFT, understand gas fee and see what’s gas fee at website name")}
            {Card("Buying","Learn how to buy an NFT, understand gas fee and see what’s gas fee at website name")}
            {Card("Buying","Learn how to buy an NFT, understand gas fee and see what’s gas fee at website name")}
        </div>
    )
}

export default Displaycard;