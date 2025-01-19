const API_BASE_URL = "http://mspotmicros.appcloudconsole.com"; // Replace with your API URL

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
    const response = await apiRequest("/micros/web_src/api/user/otp/login", "POST", { phoneNumber });
    if (response.status.code === 200) {
        return response.data;
    } else {
        return false;
    }
    // return await apiRequest("/micros/web_src/api/user/otp/login", "POST", { phoneNumber });
}

// Verify OTP and get token
export async function verifyOTP(data) {
    return await apiRequest("/auth/verify-otp", "POST", data);
}

// Example API functions
export async function getUser(userId) {
    return await apiRequest(`/users/${userId}`);
}

export async function createUser(userData) {
    return await apiRequest("/users", "POST", userData);
}

export async function updateUser(userId, updatedData) {
    return await apiRequest(`/users/${userId}`, "PUT", updatedData);
}

export async function deleteUser(userId) {
    return await apiRequest(`/users/${userId}`, "DELETE");
}
