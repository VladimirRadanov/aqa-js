import axios from 'axios';
import { getUserById } from './userService';

// 1. Замокуємо весь модуль axios
jest.mock('axios');

describe('getUserById', () => {
  
  // Очищуємо історію викликів моків перед кожним тестом, щоб вони не впливали один на одного
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // --- СЦЕНАРІЙ 1: УСПІШНИЙ ЗАПИТ ---
  test('має повертати дані користувача при успішному HTTP-запиті (200 OK)', async () => {
    // Імітуємо структуру успішної відповіді від Axios (об'єкт з полем data)
    const mockUserData = { id: 42, name: 'Олексій', role: 'admin' };
    axios.get.mockResolvedValue({ data: mockUserData });

    // Викликаємо нашу функцію
    const result = await getUserById(42);

    // Перевіряємо:
    // 1. Що Axios викликався саме з правильним URL
    expect(axios.get).toHaveBeenCalledWith('https://example.com/42');
    // 2. Що функція повернула саме ті дані, які ми замокали
    expect(result).toEqual(mockUserData);
  });

  // --- СЦЕНАРІЙ 2: НЕВДАЛИЙ ЗАПИТ (ПОМИЛКА МЕРЕЖІ / 404 / 500) ---
  test('має коректно обробляти помилку, якщо HTTP-запит завершився невдачею', async () => {
    // Імітуємо відхилення промісу (помилку запиту)
    const errorMessage = 'Network Error';
    axios.get.mockRejectedValue(new Error(errorMessage));

    // Перевіряємо, що наша функція перехопила помилку Axios 
    // і прокинула власну кастомну помилку, як закладено в її логіці (try/catch)
    await expect(getUserById(42)).rejects.toThrow('Не вдалося завантажити користувача: Network Error');

    // Переконуємося, що спроба запиту все одно відбулася
    expect(axios.get).toHaveBeenCalledWith('https://example.com/42');
  });
});
