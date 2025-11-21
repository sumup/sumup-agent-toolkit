export { VERSION } from "./const";

import {
  createCheckout,
  deactivateCheckout,
  getCheckout,
  getPaymentMethods,
  listCheckouts,
  processCheckout,
} from "./checkouts";
import {
  createCustomer,
  deactivatePaymentInstrument,
  getCustomer,
  listPaymentInstruments,
  updateCustomer,
} from "./customers";
import {
  createMerchantMember,
  deleteMerchantMember,
  getMerchantMember,
  listMerchantMembers,
  updateMerchantMember,
} from "./members";
import { listMemberships } from "./memberships";
import {
  getAccount,
  getDoingBusinessAs,
  getMerchantProfile,
  getPersonalProfile,
} from "./merchant";
import { getMerchant, getPerson, listPersons } from "./merchants";
import { listPayouts, listPayoutsV1 } from "./payouts";
import {
  createReader,
  createReaderCheckout,
  createReaderTerminate,
  deleteReader,
  getReader,
  listReaders,
  updateReader,
} from "./readers";
import { getReceipt } from "./receipts";
import {
  createMerchantRole,
  deleteMerchantRole,
  getMerchantRole,
  listMerchantRoles,
  updateMerchantRole,
} from "./roles";
import {
  compatGetOperator,
  createSubAccount,
  deactivateSubAccount,
  listSubAccounts,
  updateSubAccount,
} from "./subaccounts";
import {
  getTransaction,
  getTransactionV2_1,
  listTransactions,
  listTransactionsV2_1,
  refundTransaction,
} from "./transactions";

export const tools = [
  getPaymentMethods,
  createCheckout,
  listCheckouts,
  getCheckout,
  processCheckout,
  deactivateCheckout,
  createCustomer,
  getCustomer,
  updateCustomer,
  listPaymentInstruments,
  deactivatePaymentInstrument,
  refundTransaction,
  getTransactionV2_1,
  getTransaction,
  listTransactionsV2_1,
  listTransactions,
  listPayoutsV1,
  listPayouts,
  getReceipt,
  getAccount,
  getPersonalProfile,
  getMerchantProfile,
  getDoingBusinessAs,
  listSubAccounts,
  createSubAccount,
  compatGetOperator,
  updateSubAccount,
  deactivateSubAccount,
  listMerchantMembers,
  createMerchantMember,
  getMerchantMember,
  updateMerchantMember,
  deleteMerchantMember,
  listMemberships,
  listMerchantRoles,
  createMerchantRole,
  getMerchantRole,
  deleteMerchantRole,
  updateMerchantRole,
  getMerchant,
  listPersons,
  getPerson,
  listReaders,
  createReader,
  getReader,
  deleteReader,
  updateReader,
  createReaderCheckout,
  createReaderTerminate,
];
