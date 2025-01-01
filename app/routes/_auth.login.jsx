import { useState } from "react";
import { Form, useNavigation, useNavigate } from "@remix-run/react";
import "../styles/login/login.scss";

export default function Login() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setPhoneNumber(value);

        console.log(phoneNumber);
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Button clicked: ", phoneNumber);
    };

    const handleSkipLogin = () => {
        navigate("/");
    }

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
                            <span className="country-code">+91</span>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={handleInputChange}
                                maxLength={10}
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
