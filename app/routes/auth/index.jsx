import { useState } from "react";
import { Form, useNavigation } from "@remix-run/react";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // Allow only digits
        setPhoneNumber(value);
    };

    return (
        <div className="row">
            <div className="col-4 container">
                <img src="/logo-login.png" alt="" className={styles.logoLogin}/>
            </div>
            <div className="col-8 container">
                <h1 style={styles.title}>Login</h1>

                <p style={styles.description}>Enter your phone number to receive an OTP</p>

                <Form method="post" style={styles.form}>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handleInputChange}
                        maxLength={10}
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.button} disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send OTP"}
                    </button>
                </Form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "400px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "24px",
        marginBottom: "10px",
    },
    description: {
        fontSize: "14px",
        color: "#555",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        outline: "none",
        textAlign: "center",
    },
    button: {
        padding: "10px",
        fontSize: "16px",
        color: "white",
        backgroundColor: "#007BFF",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    logoLogin: {
        maxWidth: "50%",
    }
};
