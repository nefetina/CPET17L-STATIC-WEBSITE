import styles from "./Database.module.css";

const data = () => {
    return (
        <div className= {styles.base}>
            <div className= {styles.left}>
                
            </div>
            <div className= {styles.right}>
                <h1>What is Database Management?</h1>
                <p>A database management system (DBMS) is system software for creating and managing databases. A DBMS makes it possible for end users to create, protect, read, update and delete data in a database. The most prevalent type of data management platform, the DBMS essentially serves as an interface between databases and users or application programs, ensuring that data is consistently organized and remains easily accessible.</p>
            </div>
        </div>
    );
};

export default data;