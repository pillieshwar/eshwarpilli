import moneyFlow from "./money-flow.webp";
import trends from "./trends.webp";
import volumeMix from "./volume-mix.webp";
import feeComposition from "./fee-composition.webp";

// DPay analytics dashboard screenshots, in the order they're shown.
export const dpayScreens = {
  moneyFlow: {
    src: moneyFlow,
    caption:
      "Where the money goes: gross billing split into doctor payouts, expenses, and hospital retention",
  },
  trends: {
    src: trends,
    caption:
      "Daily revenue, doctor payout, and hospital retention, with the doctor cost ratio",
  },
  volumeMix: {
    src: volumeMix,
    caption:
      "Patient visits per day, cash vs TPA payer mix, and surgical vs medical revenue",
  },
  feeComposition: {
    src: feeComposition,
    caption: "Billing, doctor payout, and expenses broken down by fee category",
  },
};

export const dpayGallery = [
  dpayScreens.moneyFlow,
  dpayScreens.trends,
  dpayScreens.volumeMix,
  dpayScreens.feeComposition,
];
