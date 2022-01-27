var response = fetch('/secret').then(function(response) {
    return response.json();
  }).then(function(responseJson) {
    var clientSecret = responseJson.client_secret;
    // Call stripe.confirmCardPayment() with the client secret.
  });

  // Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = Stripe('pk_test_OVthqeUy3jeSH9IEpEDhfLKu');
var elements = stripe.elements();