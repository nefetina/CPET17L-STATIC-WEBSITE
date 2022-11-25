import styles from "./Webtypes.module.css";
import Link from "next/link";

const uiweb = () => {
    return (
        <div className= {styles.base}>
            <div className= {styles.left}>
                <h1>Types of Web Development</h1>
                <p>• Front-end web development </p>
                <p>• Back-end web development </p>
                <p>• Full-stack web development</p>
                <p>• Web designer</p>
                <p>• Web programmer</p>
                <p>• Content developer</p>
                <p>• Webmaster</p>
                <div className= {styles.button}>
                    <Link href="/secondwindow">BACK</Link>
                </div>
            </div>
            
            <div className= {styles.right}>
                
            </div>
        </div>
    );
};

export default uiweb;