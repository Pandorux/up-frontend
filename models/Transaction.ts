import { Amount } from "./Amount";
import { Data } from "./Data";

export interface Transaction extends Data {
    attributes: TransactionAttributes;
}

export interface TransactionAttributes {
    status: string;
    rawText: string;
    description: string;
    amount: Amount;
    settledAt: Date;
    createdAt: Date;
}