const Checkout = require('../../models/checkout/checkoutModel');
const Product = require('../../models/book/BookModel');

const checkoutController = {

    getCheckoutByUserId: async (req, res) => {
        try {
            const { id } = req.params;
            const dataCheckout = await Checkout.findOne({ userId: id });

            if (!dataCheckout) {
                return res.status(404).json({ message: 'Không tìm thấy thông tin sản phẩm thanh toán người dùng này.' });
            }

            res.status(200).json(cart);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi lấy thông tin thanh toán.' });
        }
    },

        checkoutUser: async (req, res) => {
        try {
            const { userId, products, phoneNumber, address , totalPrice ,methodPayment  } = req.body;
        
            const newCheckout = new Checkout({
                userId,
                products,
                phoneNumber,
                address,
                totalPrice,
                methodPayment
            });
            await newCheckout.save();
            res.status(200).json(newCheckout);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng.' });
        }
    },

}


module.exports = checkoutController;
