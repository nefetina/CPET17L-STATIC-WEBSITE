import styles from "./Learn.module.css";

const third = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p>LEARN</p>
                <div className={styles.contents}>
                    <p>Computer Programming</p>
                    <p>• Database Management</p>
                    <p>• Web Development</p>
                    <p>• Deployment</p>
                    <p>• UI Designing</p>
                </div>
                <button>Explore</button>
            </div>
            <div className={styles.right}>
            </div>
        </div>
    );
};

export default third;