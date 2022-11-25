import styles from "./About.module.css";

const Info = () => {
    return(
        <div className= {styles.base}>
            <div className= {styles.container}>
            <p>“Before software can be reusable it first has to be usable.”</p>
            <p>-Ralph Johnson</p>
            </div>
        </div>
    );
};


export default Info;