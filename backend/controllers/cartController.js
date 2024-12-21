import userModel from "../models/userModel.js"


// add products
const addToCart = async (req, res) => {
    try {
        // Get info from request body
        const { userId, itemId, size, quantity } = req.body;

        // Fetch user data
        const userData = await userModel.findById(userId);

        // Initialize cartData if it doesn't exist
        let cartData = userData.cartData || {};

        // Update the cartData object
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += quantity;
            } else {
                cartData[itemId][size] = quantity;
            }
        } else {
            cartData[itemId] = { [size]: quantity };
        }

        // Save the updated cartData back to the user document
        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};


// update products
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;

        if (!userId || !itemId || !size || quantity === undefined) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const userData = await userModel.findById(userId);

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        if (!cartData[itemId] || !cartData[itemId][size]) {
            return res.status(400).json({ success: false, message: "Item not found in cart" });
        }

        // Update the quantity
        cartData[itemId][size] = quantity;

        // If quantity is 0, remove the item
        if (quantity <= 0) {
            delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Cart updated successfully" });
    } catch (error) {
        console.error("Error in updateCart:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};



// get current cart data
const getCurrCart = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        const userData = await userModel.findById(userId);

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        res.json({ success: true, cartData });
    } catch (error) {
        console.error("Error in getCurrCart:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};



export { addToCart, updateCart, getCurrCart }