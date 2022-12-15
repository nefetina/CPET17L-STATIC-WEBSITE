import styles from "./Footer.module.css";

const footer = () => {
    return (
        <div className = {styles.container}>
                <div className={styles.content1}>
                    <div> 
                        <div className={styles.contents}>
                            <div className = {styles.social}>
                                <p>FOLLOW US</p>
                                <div className= {styles.follow}>
                                    <picture>
                                        <img src = "/image/fb.png" className={styles.pics} alt="none"/>
                                        <img src = "/image/ig.png"  className={styles.pics} alt="none"/>
                                        <img src = "/image/tweet.png" className={styles.pics} alt="none"/>
                                    </picture>
                                </div>
                            </div>
                            <div className = {styles.contact}>
                                <p>CONTACT US</p>
                                <div className= {styles.phone}>
                                    <picture>
                                        <img src = "/image/phone.png" className= {styles.icon} alt="none"/><p>09651234512</p>
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className = {styles.one}>
                                <p>POWERED BY: TechPeople</p>
                                <p className = {styles.foot}>This website is for educational purposes only</p>
                        </div>
                    </div>
                        
                        
                    
                </div>
                
        </div>
    );


};

export default footer;