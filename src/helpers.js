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