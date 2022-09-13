import { Amount } from "./Amount";
import { Data } from "./Data";

export interface Account extends Data {
    attributes: AccountAttributes;
    createdAt: Date;
}

export interface AccountAttributes {
    displayName: string;
    accountType: string;
    ownershipType: string;
    balance: Amount;
}