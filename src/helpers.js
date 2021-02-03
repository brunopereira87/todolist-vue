export const getToken = () => {
  const token = window.localStorage.getItem('token');
  return token;
};

export const setToken = (token) => window.localStorage.setItem('token', token);
export const removeToken = () => window.localStorage.removeItem('token');

export const TEMPLATES_MAP = {
  required: `Campo obrigatório`,
  email: 'Digite um email válido',
  minLength: 'Este campo deve ter pelo menos {{min}} caracteres',
  maxLength: 'Este campo não pode ter mais que {{max}} caracteres',
} 

export const categoriesIconsList = [
  "fas fa-at",
  "fas fa-baby-carriage",
  "fas fa-baby",
  "fas fa-biking",
  "fas fa-book",
  "fas fa-book-reader",
  "fas fa-business-time",
  "fas fa-camera-retro",
  "fas fa-cart-arrow-down",
  "fas fa-dog",
  "fas fa-futbol",
  "fas fa-gamepad",
  "fas fa-heart",
  "fas fa-laptop",
  "fas fa-money-bill",
  "fas fa-paint-brush",
  "fas fa-pen",
  "fas fa-phone",
  "fas fa-school",
  "fas fa-shopping-cart",
  "fas fa-swimmer",
  "fas fa-umbrella-beach",
  "fas fa-broom",
  "fas fa-shower",
  "fas fa-toilet",
  "fas fa-bath",
  "fas fa-trash-alt",
  "fas fa-seedling",
  "fas fa-hammer",
  "fas fa-guitar"
]

export const getErrorMessage = (err) => {
  if(err.response) return err.response.data.error;
  else if(err.request) return err.request;
  return err.message;
}