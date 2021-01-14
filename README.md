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

You also need to enable the GCP's Billing API
![](https://raw.githubusercontent.com/ferrarienz0/firebase-billing-limiter/main/assets/usage-05.png)

## Project Quotas
