import axios from 'axios';

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`https://example.com/${id}`);
    return response.data;
  } catch (error) {
    // Обробляємо помилку або прокидаємо зрозуміле повідомлення далі
    throw new Error(`Не вдалося завантажити користувача: ${error.message}`);
  }
};
