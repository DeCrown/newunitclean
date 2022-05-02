import avatar from "src/bdsim/lk/avatar.jpg";

export const getProfile = () => {
    return {
        'name': 'Иван Иванов',
        'email': '01010101@gmail.com',
        'phoneNumber': '8 (888) 888-88-88',
        'address': 'г.Москва, ул. Советская 16',
        'photo': avatar
    };
}