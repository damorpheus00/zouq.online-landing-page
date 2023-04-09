import request from "./request";

export default {
    async joinus(name, email, customer, phone) {
        const response = await request.post("/addContact", {
            name,
            email,
            customer,
            phone,
        });
        return response;
    },
};
