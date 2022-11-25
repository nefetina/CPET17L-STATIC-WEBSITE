import styles from "./Databasetypes.module.css";
import Link from "next/link";

const types = () => {
    return (
        <div className= {styles.base}>
            <div className= {styles.left}>
                <h1>Types of Database Management Systems</h1>
                <p>1. There are several types of database management systems. Here is a list of seven common database management systems:</p>
                <p>2. Hierarchical databases</p>
                <p>3. Network databases</p>
                <p>4. Relational databases</p>
                <p>5. Object-oriented databases</p>
                <p>6. Graph databases</p>
                <p>7. ER model databases</p>
                <p>8. Document databases</p>
                <p>9. NoSQL databases</p>
                <div className= {styles.button}>
                    <Link href="/secondwindow">BACK</Link>
                </div>
            </div>
            
            <div className= {styles.right}>
                
            </div>
        </div>
    );
};

export default types;