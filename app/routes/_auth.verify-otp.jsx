import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";
import { verifyOTP } from "../utils/api";
import "../styles/login/verify-otp.scss";

export default function VerifyOTP() {
    const navigate = useNavigate();

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [storedUser, setStoredUser] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const storedUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        // Access localStorage only in the client-side
        const userData = localStorage.getItem("user");
        if (userData) {
            setStoredUser(JSON.parse(userData));
        }
    }, []);

    const handleChange = (element, index) => {
        const value = element.target.value.replace(/\D/g, ""); // Allow only digits
        if (value.length <= 1) {
            const updatedOtp = [...otp];
            updatedOtp[index] = value;
            setOtp(updatedOtp);

            // Move to next input box if a value is entered
            if (value && index < 5) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (element, index) => {
        if (element.key === "Backspace" && otp[index] === "") {
            if (index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
            }
        }
    };

    const handleSubmit = async (e) => {
        setIsSubmitting(true);
        e.preventDefault();
        const OTP = otp.join("");

        try {
            // const data = {
            //     phone: storedUser.phone,
            //     verify_id: storedUser.verify_id,
            //     otp: OTP,
            // };

            const data = {
                ...storedUser,
                otp: OTP
            };

            console.log(data);
            
            const response = await verifyOTP(data);
            if (response) {
                localStorage.setItem("authToken", response.token); // Store token

                navigate("/"); 
                // if (response.user_data.name === null) {
                //     navigate("/profile"); 
                // } else {
                //     navigate("/"); // Redirect to home page
                // }
            } else {
                setIsSubmitting(false);
            }

        } catch (err) {
            // setError("Invalid OTP");
            setIsSubmitting(false);
            console.log("Invalid OTP");
        }

    };

    const handleSkipLogin = () => {
        navigate("/");
    }

    return (
        <div className="otp-page">
            <div className="logo-container">
                <img src="/logo-login.png" alt="Logo" className="logo" />
            </div>
            <div className="form-container">
                <h1 className="title">Verify OTP</h1>
                <form className="otp-form" onSubmit={handleSubmit}>
                    <div className="otp-inputs">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                id={`otp-input-${index}`}
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="otp-input"
                            />
                        ))}
                    </div>
                    <button type="submit" className="submit-button">
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
                <div className="divider">or</div>
                <button onClick={handleSkipLogin} className="skip-login">Skip Login</button>
            </div>
        </div>
    );
}
