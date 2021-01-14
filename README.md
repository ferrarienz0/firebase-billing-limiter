# firebase-billing-limiter

Automatically disable billing for firebase projects that surpass a certain amount

# Install

Run `npm i firebase-billing-limiter` or `yarn add firebase-billing-limiter`

# Configuration

## Billing Member Role

Access your [GCP console](https://console.cloud.google.com/), in the Billing tab it's necessary to go to "Account Management".
Make sure that the **selected billing account is the billing used on the Firebase project you want to use this package**.

![](https://raw.githubusercontent.com/ferrarienz0/firebase-billing-limiter/main/assets/usage-01.png)

Next, it's necessary to give a member role to your cloud function's service account. The next image shows the location of the
service account.

![](https://raw.githubusercontent.com/ferrarienz0/firebase-billing-limiter/main/assets/usage-02.png)
![](https://raw.githubusercontent.com/ferrarienz0/firebase-billing-limiter/main/assets/usage-03.png)
![](https://raw.githubusercontent.com/ferrarienz0/firebase-billing-limiter/main/assets/usage-04.png)

## Billing API

You also need to enable the GCP's Cloud Billing API
![](https://raw.githubusercontent.com/ferrarienz0/firebase-billing-limiter/main/assets/usage-05.png)

## Project Quotas

Finally, it's necessary to set some billing usage quotas, **The billing will only be disabled, if the value you set for a quota it's the same as provided on the `disableProjectAmount` property**. Also, it's necessary to create a topic on this budget. **Make sure the quota is assigned to the desired project only**. The Topic ID will later be passed as a property `topicId`.
![](https://raw.githubusercontent.com/ferrarienz0/firebase-billing-limiter/main/assets/usage-06.png)

In the image's case, I can assign `5, 9 or 10` to the disableProjectAmount property.

# Usage

On the `index.[ts|js]` add the following cloud function:

```typescript
import BillingLimiter from "firebase-billing-limiter";

exports.BillingLimiter = BillingLimiter({
  disableProjectAmount: 10.0, // The amount that will trigger the disabling (in your project billing currency).
  topicId: "billing", // The topicid created on the quotas.
});
```
