/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K; // Тип ключа
  value: V; // Тип значення
}

// Пара ключ-значення: рядок і число
const pair1: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

// Пара ключ-значення: число і булевий тип
const pair2: KeyValuePair<number, boolean> = {
  key: 1,
  value: true,
};

// Пара ключ-значення: об'єкт і масив рядків
const pair3: KeyValuePair<{ id: number }, string[]> = {
  key: { id: 42 },
  value: ["Alice", "Bob"],
};

export {};
