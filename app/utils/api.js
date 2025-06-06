// const API_BASE_URL = "https://mspotmicros.appcloudconsole.com/micros/web_src"; // Replace with your API URL
// const API_BASE_URL = "http://188.245.165.80/micros/index.php/web_src";;
// const API_BASE_URL = "http://ecommerce.welkinwitssolutions.com/lrg/micros/web_src";
// const API_BASE_URL = "https://ecommerceservice.appcloudconsole.com/lrg/micros/web_src";
// const API_BASE_URL = "https://ecommerceservice.appcloudconsole.com/LRG/web_src";
const API_BASE_URL = "https://ecommerceservice.appcloudconsole.com/LRG";

// Generic function to make API requests
export async function apiRequest(endpoint, method = "GET", body = null, headers = {}, requireAuth = true) {
    try {
        let authHeaders = {};

        if (requireAuth) {
            const authToken = localStorage.getItem("authToken");
            if (authToken) {
                authHeaders["X-Auth-Token"] = authToken;
            }
        }
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...authHeaders,
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

function isResponseStatusOk(response) {
    return response?.status?.code === 200;
}

// Send OTP to phone number
export async function sendOTP(phoneNumber) {
    const response = await apiRequest("/micros/web_src/api/user/otp/login", "POST", { mobile: phoneNumber }, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
    // return await apiRequest("/micros/web_src/api/user/otp/login", "POST", { phoneNumber });
}

// Verify OTP and get token
export async function verifyOTP(data) {
    const response = await apiRequest("/micros/web_src/api/user/otp/login/verify_factor", "POST", data, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export async function setupProfile(data) {
    const response = await apiRequest("/micros/web_src/api/user/initital_profile_setup", "POST", data, {}, true);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export async function getTopSliderData() {
    const response = await apiRequest("/micros/web_src/api/app/display/top_sliders", "GET", null, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export async function getCategoryCarousel() {
    const response = await apiRequest("/micros/web_src/api/app/display/categories", "GET", null, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export async function getSubCategory(id) {
    const response = await apiRequest(`/micros/web_src/api/app/display/sub_categories?category_id=${id}`, "GET", null, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export async function getBrandData() {
    const response = await apiRequest("/micros/web_src/api/app/display/brands", "GET", null, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

// // Example API functions
// export async function getUser(userId) {
//     return await apiRequest(`/users/${userId}`);
// }

export const getCartData = async () => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/my_cart", "GET", null, {}, true);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const getAddressData = async () => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/my_address_book", "GET", null, {}, true);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const addAddressData = async (data) => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/add_address_book", "POST", data, {}, true);
    if (isResponseStatusOk(response)) {
        return response.status;
    } else {
        return false;
    }
}

export const editAddressData = async (data) => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/edit_address_book", "POST", data, {}, true);
    if (isResponseStatusOk(response)) {
        return response.status;
    } else {
        return false;
    }
}

export const deleteAddressData = async (data) => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/delete_address_book", "POST", data, {}, true);
    if (isResponseStatusOk(response)) {
        return response.status;
    } else {
        return false;
    }
}

export const setDefaultAddress = async (data) => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/set_default_address", "POST", data, {}, true);
    if (isResponseStatusOk(response)) {
        return response.status;
    } else {
        return false;
    }
}

export const deleteFromCart = async (data) => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/remove_from_cart", "POST", data, {}, true);
    if (isResponseStatusOk(response)) {
        return response;
    } else {
        return false;
    }
}

export const updateCartQty = async (data) => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/update_cart", "POST", data, {}, true);
    if (isResponseStatusOk(response)) {
        return response;
    } else {
        return false;
    }
}

export const createNewOrder = async (data) => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/order/create_new", "POST", data, {}, true);
    if (isResponseStatusOk(response)) {
        return response;
    } else {
        return false;
    }
}

export const getOrderData = async () => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/orders/my_orders", "GET", null, {}, true);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const getOrderDetailData = async (orderId, itemId) => {
    const response = await apiRequest(`/micros/web_src/api/app/user/account/orders/order/${orderId}/${itemId}`, "GET", null, {}, true);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const getProductList = async (id) => {
    const response = await apiRequest(`/micros/web_src/api/products/category/${id}`, "GET", null, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const getProductDetails = async (id) => {
    const response = await apiRequest(`/micros/web_src/api/products/get/${id}`, "GET", null, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const getProfileData = async () => {
    const response = await apiRequest("/micros/web_src/api/user/profile", "GET", null, {}, true);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const saveProfileData = async (data) => {
    const response = await apiRequest("/micros/web_src/api/user/profile", "POST", data, {}, true);
    if (isResponseStatusOk(response)) {
        return response;
    } else {
        return false;
    }
}

export const getAddressFromPin = async (data) => {
    const response = await apiRequest(`/micros/web_src/api/app/user/account/validate_pincode/${data}`, "GET", null, {}, true);
    if (isResponseStatusOk(response)) {
        return response;
    } else {
        return false;
    }
}

export const addProductToCart = async (data) => {
    const response = await apiRequest("/micros/web_src/api/app/user/account/add_to_cart", "POST", data, {}, true);
    if (isResponseStatusOk(response)) {
        return response;
    } else {
        return false;
    }
}

export const getProductsForHome = async (brandId) => {
    const response = await apiRequest(`/micros/web_src/api/products/brand/${brandId}`, "GET", null, {}, true);
    if (isResponseStatusOk(response)) {
        return response;
    } else {
        return false;
    }
}

export const getMegaSalesBanners = async () => {
    const response = await apiRequest("/micros/web_src/api/app/display/special_offers", "GET", null, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const getLimitedSalesData = async () => {
    const response = await apiRequest("/micros/web_src/api/app/display/mega_sales", "GET", null, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const getHomeSectionList = async () => {
    const response = await apiRequest("/micros/web_src/api/products/get_featured_items", "GET", null, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const getHomeSectionProductList = async (secId) => {
    const response = await apiRequest(`/micros/web_src/api/products/get_featured_items_by_id/${secId}`, "GET", null, {}, false);
    if (isResponseStatusOk(response)) {
        return response.data;
    } else {
        return false;
    }
}

export const fetchSuggestions = async (query) => {
    if (!query || query.trim() === "") return [];

    try {
        const response = await apiRequest(`/micros/web_src/api/products/search?q=${encodeURIComponent(query)}`, "GET", null, {}, false);
        if (isResponseStatusOk(response)) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching suggestions:", error);
        return [];
    }
};


export const fetchCountryCodes = async () => {
    try {
        const response = await apiRequest("/core/localization.php", "GET", null, {}, false);
        if (isResponseStatusOk(response)) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching country codes:", error);
        return [];
    }
}

export const fetchFooterData = async () => {
    try {
        const response = await apiRequest("/micros/web_src/api/app/display/footer_section", "GET", null, {}, false);
        if (isResponseStatusOk(response)) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching footer data:", error);
        return [];
    }
}

export const cancelOrder = async (data) => {
    try {
        const response = await apiRequest("/micros/web_src/api/app/user/account/orders/order_cancel", "POST", data, {}, true);
        if (isResponseStatusOk(response)) {
            return response.status;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error canceling order:", error);
        return [];
    }
}