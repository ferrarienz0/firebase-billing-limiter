export default interface BillingLimiterParams {
  /**
   * The max amount in your project's currency your project can reach
   * before getting it's billing disabled
   */
  disableProjectAmount: number;

  /**
   * The topic name created in the quota settings on GCP
   * console.
   */
  topicId: string;
}
