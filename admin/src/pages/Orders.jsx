import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAll = async () => {
    if (!token) {
      return;
    }

    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      );
      console.log(response.data);

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAll();
    }
  }, [token]);
  

  return (
    <div>
      <h3>Order page</h3>
      <div>
        {orders.length === 0 ? (
          <p>No orders available.</p>
        ) : (
          orders.map((order, index) => (
            <div key={index}>
              <img src={assets.parcel_icon} alt='' />
              <div>
                <div>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return (
                        <p key={index}>
                          {item.name} x {item.quantity} <span>{item.size}</span>
                        </p>
                      );
                    } else {
                      return (
                        <p key={index}>
                          {item.name} x {item.quantity} <span>{item.size},</span>
                        </p>
                      );
                    }
                  })}
                </div>

                <p>{order.address.firstName + ' ' + order.address.lastName}</p>
                <div>
                  <p>{order.address.street + ','} </p>
                  <p>
                    {order.address.city +
                      ',' +
                      order.address.state +
                      ',' +
                      order.address.country +
                      ',' +
                      order.address.zipcode}{' '}
                  </p>
                </div>
                <p>{order.address.phone}</p>
              </div>

              <div>
                <p>Items: {order.items.length}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
