import { useState, useEffect } from "react";
import { Form, useNavigation, useNavigate } from "@remix-run/react";
import { sendOTP, fetchCountryCodes } from "../utils/api";
// import Loader from "react-loader-spinner";
import "../styles/login/login.scss";

export default function Login() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [authToken, setAuthToken] = useState(false);
    const [countryCodes, setCountryCodes] = useState([]);
    const [selectedCountryCode, setSelectedCountryCode] = useState("+974");
    const [maxLength, setMaxLength] = useState(14);

    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthAndFetchCountryCodes = async () => {
            const isVerified = localStorage.getItem("authToken");

            if (isVerified && isVerified !== "") {
                setAuthToken(true);
                navigate("/");
            } else {
                try {
                    const resData = await fetchCountryCodes();
                    setCountryCodes(resData);

                    if (resData.length > 0) {
                        setSelectedCountryCode(resData[0].code);
                    } else {
                        setCountryCodes([{ code: "+974", name: "Qatar" }]);
                    }

                    setAuthToken(false);
                } catch (error) {
                    console.error("Failed to fetch country codes:", error);
                }
            }
        };

        checkAuthAndFetchCountryCodes();
    }, []);

    // const navigation = useNavigation();
    // const isSubmitting = navigation.state === "submitting";

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setPhoneNumber(value);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const resp = await sendOTP(phoneNumber);
            if (resp) {
                // let resp = {
                //     verify_id: "d6v5g6e5g6rg56rgr6g5"
                // }
                const userData = {
                    mobile: phoneNumber,
                    verify_id: resp.verify_id
                };
                localStorage.setItem("user", JSON.stringify(userData));
                navigate("/verify-otp", { replace: true });
            } else {
                setIsSubmitting(false);
            }

        } catch (err) {
            setIsSubmitting(false);
            console.log("Failed to send OTP: ", err);
        }

    };

    const handleSkipLogin = () => {
        navigate("/");
    }

    // useEffect(() => {
    //     // Replace with your actual API call to fetch country codes
    //     async function fetchCountryCodes() {
    //         try {
    //             // Example API response: [{ code: "+91", name: "India" }, ...]
    //             const response = await fetch("/api/country-codes");
    //             const data = await response.json();
    //             setCountryCodes(data);
    //             if (data.length > 0) setSelectedCountryCode(data[0].code);
    //         } catch (err) {
    //             setCountryCodes([{ code: "+91", name: "India" }]);
    //         }
    //     }
    //     fetchCountryCodes();
    // }, []);

    const handleCountryCodeChange = (e) => {
        setSelectedCountryCode(e.target.value);
    };

    return (
        <div className="row">
            <div className="col-6 container1">
                <div className="icon-container">
                    <img src="/logo-login.png" alt="" className="logoLogin" />
                </div>
            </div>
            <div className="col-6 container2">
                <div className="form-container">
                    <div className="title-discription-container">
                        <h1 className="title">Login/Signup</h1>
                        <p className="description">Enter your phone number to login</p>
                    </div>
                    <Form method="post" className="form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <select
                                className="country-code"
                                value={selectedCountryCode}
                                onChange={handleCountryCodeChange}
                                required
                            >
                                {countryCodes.map((c) => (
                                    <option key={c.code} value={c.code}>
                                        {c.name} ({c.code})
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={handleInputChange}
                                maxLength={maxLength}
                                className="input"
                                required
                            />
                        </div>
                        <button type="submit" className="button" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Login/Signup"}
                        </button>
                    </Form>
                    <div className="divider">or</div>
                    <button onClick={handleSkipLogin} className="skip-button">Skip Login</button>
                </div>
            </div>
        </div>
    );
}
