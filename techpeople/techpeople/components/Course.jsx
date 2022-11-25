import styles from "./Course.module.css";
import Link from "next/link";

const Course = () => {
    return (
        <div className={styles.secondlayer}>
          <div className={styles.box}>
            <p>
              COURSES OFFERED 
            </p>
        
          </div>
          <div className={styles.cards}>
            <div className={styles.card1}>
              <img src = "/image/Rectangle56.png" />
              <div className={styles.container}>
                <h4><b>UI Designing</b></h4>
                <p>The process designers use to build intertace or computerized devices.</p>
                <div className={styles.button}>
                    <button><Link href="/uidesign">ABOUT</Link></button>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <img src = "/image/deploy.png" />
              <div className={styles.container}>
                <h4><b>Deployment</b></h4>
                <p>Is an extensible client-server tool for syncing content and configuration to IIS.</p>
                <div className={styles.button}>
                    <button><Link href="/deploy">ABOUT</Link></button>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <img src = "/image/database.png" />
              <div className={styles.container}>
                <h4><b>Database Creation</b></h4>
                <p>It is the designing, creating a database or data model, and analyzing requirements and their intents as raw data.</p>
                <div className={styles.button}>
                    <button><Link href="/database">ABOUT</Link></button>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <img src = "/image/webdev.png" />
              <div className={styles.container}>
                <h4><b>Web Development</b></h4>
                <p>This refers in general to the tasks associated with developing websites for hosting via intranet or internet.</p>
                <div className={styles.button}>
                    <button><Link href="/webdev">ABOUT</Link></button>
                </div>
              </div>
            </div>
          
            
        
        
          </div>    
      
        
    </div>
    );
};

export default Course;