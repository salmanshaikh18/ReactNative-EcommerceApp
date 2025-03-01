import {navigate} from '@navigation/NavigationUtil';
import {BASE_URL} from '@store/config';
import axios from 'axios';
import RazorpayCheckout from 'react-native-razorpay';

export const createTransaction = async (amount: number, userId: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/order/transaction`, {
      userId: userId,
      amount: amount * 100,
    });
    console.log("response of createTrasaction: ", res)
    return res.data;
  } catch (error) {
    console.error("error inside create transaction: ", error)
    return null;
  }
};

export const createOrder = async (
  key: string,
  amount: number,
  order_id: string,
  cart: any,
  userId: string,
  address: string,
) => {
  try {
    let options = {
      description: 'Ecommerce Shopping',
      image:
        'https://www.indiafilings.com/learn/wp-content/uploads/2024/01/How-to-Set-Up-and-Register-an-E-commerce-Company-in-India-.jpg',
      currency: 'INR',
      key: key,
      amount: amount,
      name: 'Ecommerce-App',
      order_id: order_id,
      theme: {
        color: '#53a20e',
      },
    };

    RazorpayCheckout.open(options)
      .then(async (data) => {
        console.log("data inside razorpaycheckout: ", data)
        const today = new Date();
        const sevenDaysFromNow = new Date();
        sevenDaysFromNow.setDate(today.getDate() + 7);

        const res = await axios.post(`${BASE_URL}/order/create-order`, {
          razorpay_order_id: data.razorpay_order_id,
          razorpay_payment_id: data.razorpay_payment_id,
          razorpay_signature: data.razorpay_signature,
          userId: userId,
          cartItems: cart,
          deliveryDate: sevenDaysFromNow,
          address: address,
        });

        console.log("response of create order: ", res)
        navigate('PaymentSuccess', {
          price: amount / 100,
          address: address,
        });
      })
      .catch((error: any) => {
        console.log('Error inside RazorpayCheckout: ', error);
        return {type: 'Error', message: error?.description};
      });
  } catch (error) {
    console.error('Error while creating order: ', error);
    return {type: 'error', message: 'Error'};
  }
};
