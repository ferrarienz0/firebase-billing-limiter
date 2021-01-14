export default interface BillingLimiterParams {
  /**
   * The max amount in dollars your project can reach
   * before getting it's billing disabled
   */
  disableProjectAmount: number;

  /**
   * The topic name created in the quota settings on GCP
   * console.
   */
  topic: string;
}
