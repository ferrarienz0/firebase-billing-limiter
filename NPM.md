# firebase-billing-limiter

Automatically disable billing for firebase projects that surpass a certain amount

# Install

Run `npm i firebase-billing-limiter` or `yarn add firebase-billing-limiter`

# Configuration

To see the configuration needed to be able to run this package please go to the projeto [repo](https://github.com/ferrarienz0/firebase-billing-limiter#readme)

# Usage

```typescript
import BillingLimiter from "firebase-billing-limiter";

exports.BillingLimiter = BillingLimiter({
  disableProjectAmount: 10.0, // The amount that will trigger the disabling (in your project billing currency).
  topicId: "billing", // The topicid created on the quotas.
});
```
