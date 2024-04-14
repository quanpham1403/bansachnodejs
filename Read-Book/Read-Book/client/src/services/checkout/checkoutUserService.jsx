import axios from 'axios';
import { URL_API ,URL_API_CHECKOUT} from '../../util/url-api';

const PostCheckoutUser = async (dataDetailUser) => {
    try {
        const response = await axios.post(`${URL_API}/${URL_API_CHECKOUT}`,dataDetailUser);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export {
    PostCheckoutUser
}