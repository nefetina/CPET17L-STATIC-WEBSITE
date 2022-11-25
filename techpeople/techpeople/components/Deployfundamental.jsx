import styles from "./Deployfundamental.module.css";
import Link from "next/link";

const fund = () => {
    return(
        <div className= {styles.base}>
            <div className= {styles.left}>
                <h1>Deployment Fundamentals</h1>
                <p>The major building blocks of the web are HTML, CSS, and JavaScript.  We will be talking about all three languages. We can also think of web development as being split into two main categories: front end and back end.</p>
                <div className= {styles.button}>
                    <Link href="/secondwindow">BACK</Link>
                </div>
            </div>
            
            <div className= {styles.right}>
                
            </div>
        </div>
    );
};

export default fund;