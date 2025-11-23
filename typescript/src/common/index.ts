export { VERSION } from "./const";

import {
  createCheckout,
  deactivateCheckout,
  getCheckout,
  getPaymentMethods,
  listCheckouts,
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
import type { ToolDefinition } from "./types";

export const tools = [
  getPaymentMethods,
  createCheckout,
  listCheckouts,
  getCheckout,
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

export {
  getPaymentMethods,
  createCheckout,
  listCheckouts,
  getCheckout,
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
};

export const registerTools = (reg: (t: ToolDefinition) => void) => {
  reg(getPaymentMethods);
  reg(createCheckout);
  reg(listCheckouts);
  reg(getCheckout);
  reg(deactivateCheckout);
  reg(createCustomer);
  reg(getCustomer);
  reg(updateCustomer);
  reg(listPaymentInstruments);
  reg(deactivatePaymentInstrument);
  reg(refundTransaction);
  reg(getTransactionV2_1);
  reg(getTransaction);
  reg(listTransactionsV2_1);
  reg(listTransactions);
  reg(listPayoutsV1);
  reg(listPayouts);
  reg(getReceipt);
  reg(getAccount);
  reg(getPersonalProfile);
  reg(getMerchantProfile);
  reg(getDoingBusinessAs);
  reg(listSubAccounts);
  reg(createSubAccount);
  reg(compatGetOperator);
  reg(updateSubAccount);
  reg(deactivateSubAccount);
  reg(listMerchantMembers);
  reg(createMerchantMember);
  reg(getMerchantMember);
  reg(updateMerchantMember);
  reg(deleteMerchantMember);
  reg(listMemberships);
  reg(listMerchantRoles);
  reg(createMerchantRole);
  reg(getMerchantRole);
  reg(deleteMerchantRole);
  reg(updateMerchantRole);
  reg(getMerchant);
  reg(listPersons);
  reg(getPerson);
  reg(listReaders);
  reg(createReader);
  reg(getReader);
  reg(deleteReader);
  reg(updateReader);
  reg(createReaderCheckout);
  reg(createReaderTerminate);
};
