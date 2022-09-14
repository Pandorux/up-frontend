import axios from "axios";
import { Account } from "../../models/Account";

export default async () => {
    const url = 'https://api.up.com.au/api/v1/accounts';

    await axios
        .get<Account[]>(url, {
            headers: {
                Authorization: `${process.env.UP_AUTH}`
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