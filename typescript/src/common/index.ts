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
import { listPayoutsV1 } from "./payouts";
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
  getTransactionV2_1,
  listTransactionsV2_1,
  refundTransaction,
} from "./transactions";
import type { Tool } from "./types";

export const registerTools = (reg: (t: Tool) => void) => {
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
  reg(listTransactionsV2_1);
  reg(listPayoutsV1);
  reg(listTransactionsV2_1);
  reg(listPayoutsV1);
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
