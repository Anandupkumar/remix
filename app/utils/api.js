// const API_BASE_URL = "https://mspotmicros.appcloudconsole.com/micros/web_src"; // Replace with your API URL
const API_BASE_URL = "http://188.245.165.80/micros/index.php/web_src";
// const API_BASE_URL = "http://ecommerce.welkinwitssolutions.com/lrg/micros/web_src";
// http://188.245.165.80/micros/index.php/web_src

// Generic function to make API requests
export async function apiRequest(endpoint, method = "GET", body = null, headers = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*",
                ...headers, // Merge additional headers
            },
            body: body ? JSON.stringify(body) : null,
        });

        // Handle non-OK responses
        if (!response.ok) {
            throw new Error(`API error: ${response.status} - ${response.statusText}`);
        }

        return await response.json(); // Parse JSON response
    } catch (error) {
        console.error("API Request Failed:", error);
        throw error; // Rethrow to handle in the component
    }
}

// Send OTP to phone number
export async function sendOTP(phoneNumber) {
    const response = await apiRequest("/api/user/otp/login", "POST", { mobile: phoneNumber });
    if (response?.status?.code === 200) {
        return response.data;
    } else {
        return false;
    }
    // return await apiRequest("/micros/web_src/api/user/otp/login", "POST", { phoneNumber });
}

// Verify OTP and get token
export async function verifyOTP(data) {
    const response = await apiRequest("/api/user/otp/login/verify_factor", "POST", data);
    if (response?.status?.code === 200) {
        return response.data;
    } else {
        return false;
    }
}

export async function setupProfile(data) {
    const response = await apiRequest("/api/user/initital_profile_setup", "POST", data);
    if (response?.status?.code === 200) {
        return response.data;
    } else {
        return false;
    }
}

export async function getTopSliderData() {
    const response = await apiRequest("/api/app/display/top_sliders", "GET");
    if (response?.status?.code === 200) {
        return response.data;
    } else {
        return false;
    }
}

export async function getCategoryCarousel() {
    const response = await apiRequest("/api/app/display/categories", "GET");
    if (response?.status?.code === 200) {
        return response.data;
    } else {
        return false;
    }
}

// Example API functions
export async function getUser(userId) {
    return await apiRequest(`/users/${userId}`);
}


