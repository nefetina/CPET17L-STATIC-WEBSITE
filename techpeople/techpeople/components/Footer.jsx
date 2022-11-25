import styles from "./Footer.module.css";

const footer = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.one}>
                <p>POWERED BY: TechPeople</p>
                <p>This website is for educational purposes only</p>
            </div>
            <div className = {styles.three}>
                
                <div className = {styles.contact}>
                    <p>CONTACT US</p>
                    <div className= {styles.phone}>
                        <img src = "/image/phone.png" />
                        <p>09651234512</p>
                    </div>
                </div>
                
                <div className = {styles.social}>
                    <p>FOLLOW US</p>
                    <div className= {styles.follow}>
                        <img src = "/image/fb.png" />
                        <img src = "/image/ig.png" />
                        <img src = "/image/tweet.png" />
                    </div>
                </div>
            </div>

        </div>
    );


};

export default footer;