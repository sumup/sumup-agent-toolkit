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
  reg(compatGetOperator);
  reg(createCheckout);
  reg(createCustomer);
  reg(createMerchantMember);
  reg(createMerchantRole);
  reg(createReader);
  reg(createReaderCheckout);
  reg(createReaderTerminate);
  reg(createSubAccount);
  reg(deactivateCheckout);
  reg(deactivatePaymentInstrument);
  reg(deactivateSubAccount);
  reg(deleteMerchantMember);
  reg(deleteMerchantRole);
  reg(deleteReader);
  reg(getAccount);
  reg(getCheckout);
  reg(getCustomer);
  reg(getDoingBusinessAs);
  reg(getMerchant);
  reg(getMerchantMember);
  reg(getMerchantProfile);
  reg(getMerchantRole);
  reg(getPaymentMethods);
  reg(getPerson);
  reg(getPersonalProfile);
  reg(getReader);
  reg(getReceipt);
  reg(getTransactionV2_1);
  reg(listCheckouts);
  reg(listMemberships);
  reg(listMerchantMembers);
  reg(listMerchantRoles);
  reg(listPaymentInstruments);
  reg(listPayoutsV1);
  reg(listPersons);
  reg(listReaders);
  reg(listSubAccounts);
  reg(listTransactionsV2_1);
  reg(refundTransaction);
  reg(updateCustomer);
  reg(updateMerchantMember);
  reg(updateMerchantRole);
  reg(updateReader);
  reg(updateSubAccount);
};
