/* eslint-disable import/no-unresolved */
import * as functions from "firebase-functions";

import { disableBilling } from "./BillingAPI";

import { BillingPubSubResponse, BillingLimiterParams } from "@ts";

export default function createBillingCallback({
  disableProjectAmount,
  topic,
}: BillingLimiterParams) {
  return functions.pubsub
    .topic(topic)
    .onPublish(
      async (message: functions.pubsub.Message, _: functions.EventContext) => {
        let data!: BillingPubSubResponse;

        try {
          data = message.json;
        } catch (error) {
          console.error("PubSub message was not a JSON", error);
        }

        data &&
          console.info(
            `Successfully received PubSub Billing for ${data.budgetDisplayName}`
          );

        if (data.costAmount >= disableProjectAmount) {
          console.log(`Trying to disable billing...: cost ${data.costAmount}`);
          await disableBilling();
        }

        return null;
      }
    );
}
