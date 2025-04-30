export const addStartingZero = (value) => (value < 10 ? `0${value}` : value);
export const isAuth = () => !!localStorage.getItem('token');
