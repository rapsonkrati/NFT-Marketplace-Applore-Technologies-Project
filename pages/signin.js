import Styles from '../public/styles/signin.module.css'

const alrt=()=>{
    alert('aledfdfrt'); 
}
const Signup=()=>{
    const alertd=()=>{
        alert("hey");
    }
    return (
        <div className={Styles.container}>
      <div className={Styles.signin}>
          <heading><h1>Sign in</h1></heading>
          <disc className={Styles.para}><p>Lörem ipsum krov sysungen. Tisans antektig, och doll. Vare teranykon i spår. Yska anamatisk fonat utan pedat. Kuling ada. 
What is a wallet ?</p></disc>
        <btn className={Styles.btncon}><button className={Styles.metabtn} onClick={alrt}>Sign in with meta mask</button></btn>
        <btn className={Styles.btncon}><button className={Styles.metabtn}>Sign in with Coinbase</button></btn>
      </div>
      </div>
    );
  }

  export default Signup;