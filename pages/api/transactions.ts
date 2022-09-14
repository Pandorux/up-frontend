import axios from "axios";
import { Transaction } from "../../models/Transaction";

export default async () => {
    const url = 'https://api.up.com.au/api/v1/transactions';

    await axios
        .get<Transaction[]>(url, {
            headers: {
                Authorization: ''
            }
        })
        .then(res => {
            console.log(res.data);
            console.log(res.status);
        })
        .catch(err => {
            console.log('err', err);
        });
}