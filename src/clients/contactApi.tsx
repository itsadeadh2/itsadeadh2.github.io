import BaseAPI from './http'

export default class ContactApi extends BaseAPI {

    requestContactInfo = async (email: string) => {
        try {
            await this.http.post('/contacts/', {
                email: email
            })
            return true;
        } catch (error) {
            return false;
        }
    }
}