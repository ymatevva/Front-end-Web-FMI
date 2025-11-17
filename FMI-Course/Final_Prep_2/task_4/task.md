# 🧩 Задача 4: Форматиране на потребителски профил

## Условие:
Създайте функция `formatProfile(data, options)`, която форматира потребителски данни според зададени опции.

### Параметри:
- `data` — обект с потребителски данни (ако не е обект, връща празен обект `{}`)
- `options` — обект с настройки (по подразбиране празен обект)

### Опции:
- **`formatName`** — ако е `true`, форматира `firstName` и `lastName` с главна буква (по подразбиране: `true`)
- **`createUsername`** — ако е `true`, генерира `username` от първите 3 букви на `firstName` и `lastName` (всичко с малки букви)
- **`hideEmail`** — ако е `true`, скрива част от имейла (напр. `test@example.com` -> `t***@example.com`)

### Резултат:
Функцията връща **нов обект** с форматираните данни.

### Тестови случаи:
```js
  const user = { firstName: "john", lastName: "doe", email: "john.doe@email.com" };

  console.log(formatProfile(user, { createUsername: true }));
  // { firstName: "John", lastName: "Doe", email: "john.doe@email.com", username: "johdoe" }

  console.log(formatProfile(user, { hideEmail: true, formatName: false }));
  // { firstName: "john", lastName: "doe", email: "j***@email.com" }

  console.log(formatProfile("invalid data"));
  // {}

  console.log(formatProfile({ firstName: "ana", email: "ana@test.com" }));
  // { firstName: "Ana", email: "ana@test.com" } // lastName липсва, username не се генерира
```