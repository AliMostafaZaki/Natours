/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51MwZceLjQ5Y347eIB1SSCodWkJ20bwuN6HY5lIukJi0jJjdilJNvFIUaO8y9u7RCgTIjHBfUqlQBPJm99OynSKJd00Mtpes3Jm'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
