import {
  ActivityIndicator,
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAppSelector} from '@store/reduxHooks';
import {selectCartItems, selectTotalCartPrice} from '../api/slice';
import LoginModal from '@modules/account/molecules/LoginModal';
import {createOrder, createTransaction} from '../api/paymentGateway';

const PlaceOrderButton = () => {
  const user = useAppSelector(state => state.account.user) as any;
  const carts = useAppSelector(selectCartItems);
  const price = useAppSelector(selectTotalCartPrice);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    setLoading(true);
    const data = await createTransaction(price, user?._id);

    console.log("data: ", data)

    if (data.success) {
      const order = await createOrder(
        data?.key,
        data?.amount,
        data?.order_id,
        carts,
        user?._id,
        user?.address,
      );
      console.log("order: ", order)
      setLoading(false);
      if (order?.type === "error") {
        Alert.alert("Something went wrong while creating your order :(")
      }
    } else {
      setLoading(false);
      Alert.alert('Paymnet Failed :(');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.strikePrice}>Rs. {price + 1200}</Text>
          <Text style={styles.price}>
            Rs. {price}
            <Text style={{fontSize: RFValue(10)}}> </Text>
          </Text>
        </View>

        <TouchableOpacity
          disabled={loading}
          style={styles.button}
          onPress={() => {
            if (user) {
              handlePlaceOrder();
            } else {
              setIsVisible(true);
            }
          }}>
          {loading ? (
            <ActivityIndicator color="black" size="small" />
          ) : (
            <Text style={styles.btnText}>Place Order</Text>
          )}
        </TouchableOpacity>
      </View>

      {isVisible && (
        <LoginModal onClose={() => setIsVisible(false)} visible={isVisible} />
      )}
    </>
  );
};

export default PlaceOrderButton;

const styles = StyleSheet.create({
  strikePrice: {
    fontSize: RFValue(11),
    color: '#888',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: RFValue(16),
    color: '#000',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#FFC201',
    padding: 10,
    borderRadius: 6,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btnText: {
    color: '#222',
    fontWeight: '600',
    fontSize: RFValue(13),
  },
  container: {
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 2,
    borderColor: '#F0F2F5',
    width: '100%',
    padding: 15,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
