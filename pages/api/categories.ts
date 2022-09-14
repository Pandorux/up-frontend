import axios from "axios";
import { Category } from "../../models/Category";

export default async () => {
    const url = 'https://api.up.com.au/api/v1/categories';

    await axios
        .get<Category[]>(url, {
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