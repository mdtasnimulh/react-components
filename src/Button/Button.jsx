import styles from './Button.module.css'

function Button() {

    // bellow is inline css styling
    const styles = {
        marginTop: "50px",
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        // below styling is define using module css styling
        // <button className={styles.button}>Click Me</button>
        <button style={styles}>Click Me</button>
    );
}

export default Button;

// there are three css styling components in react styling. External CSS, Module Css, Inline Css