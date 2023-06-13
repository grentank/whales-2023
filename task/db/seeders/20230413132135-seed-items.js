/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Items',
      [
        {
          name: 'Маленький Гранитный Куртка', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 5, parcelId: 37, fragile: true,
        },
        {
          name: 'Маленький Неодимовый Автомобиль', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 5, parcelId: 3, fragile: true,
        },
        {
          name: 'Свободный Стальной Портмоне', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 3, parcelId: 29, fragile: true,
        },
        {
          name: 'Интеллектуальный Деревянный Шарф', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 7, parcelId: 12, fragile: false,
        },
        {
          name: 'Потрясающий Хлопковый Портмоне', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 6, parcelId: 33, fragile: false,
        },
        {
          name: 'Эргономичный Бетонный Автомобиль', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 2, parcelId: 13, fragile: true,
        },
        {
          name: 'Практичный Натуральный Майка', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 10, parcelId: 36, fragile: false,
        },
        {
          name: 'Лоснящийся Гранитный Стул', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 2, parcelId: 1, fragile: false,
        },
        {
          name: 'Потрясающий Кожанный Носки', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 4, parcelId: 38, fragile: false,
        },
        {
          name: 'Великолепный Бетонный Кепка', description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', weight: 4, parcelId: 15, fragile: false,
        },
        {
          name: 'Большой Натуральный Плащ', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 8, parcelId: 18, fragile: false,
        },
        {
          name: 'Интеллектуальный Бетонный Стул', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 10, parcelId: 36, fragile: true,
        },
        {
          name: 'Практичный Хлопковый Кепка', description: 'The Football Is Good For Training And Recreational Purposes', weight: 7, parcelId: 18, fragile: false,
        },
        {
          name: 'Интеллектуальный Меховой Клатч', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 9, parcelId: 29, fragile: true,
        },
        {
          name: 'Великолепный Кожанный Кулон', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 3, parcelId: 49, fragile: true,
        },
        {
          name: 'Грубый Резиновый Носки', description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', weight: 4, parcelId: 30, fragile: true,
        },
        {
          name: 'Практичный Резиновый Ремень', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 4, parcelId: 47, fragile: false,
        },
        {
          name: 'Интеллектуальный Неодимовый Кулон', description: 'The Football Is Good For Training And Recreational Purposes', weight: 7, parcelId: 1, fragile: false,
        },
        {
          name: 'Практичный Пластиковый Клатч', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 2, parcelId: 36, fragile: true,
        },
        {
          name: 'Фантастический Меховой Ботинок', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 5, parcelId: 13, fragile: true,
        },
        {
          name: 'Великолепный Деревянный Автомобиль', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 8, parcelId: 24, fragile: false,
        },
        {
          name: 'Фантастический Хлопковый Компьютер', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 9, parcelId: 48, fragile: false,
        },
        {
          name: 'Потрясающий Резиновый Кулон', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 7, parcelId: 20, fragile: false,
        },
        {
          name: 'Лоснящийся Пластиковый Портмоне', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 10, parcelId: 17, fragile: false,
        },
        {
          name: 'Грубый Меховой Свитер', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 9, parcelId: 8, fragile: true,
        },
        {
          name: 'Потрясающий Пластиковый Шарф', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 10, parcelId: 1, fragile: true,
        },
        {
          name: 'Невероятный Резиновый Компьютер', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 8, parcelId: 16, fragile: true,
        },
        {
          name: 'Интеллектуальный Гранитный Кулон', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 4, parcelId: 45, fragile: false,
        },
        {
          name: 'Фантастический Натуральный Стол', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 4, parcelId: 23, fragile: true,
        },
        {
          name: 'Маленький Гранитный Ножницы', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 2, parcelId: 9, fragile: true,
        },
        {
          name: 'Свободный Меховой Свитер', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 5, parcelId: 46, fragile: false,
        },
        {
          name: 'Невероятный Неодимовый Кепка', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 3, parcelId: 3, fragile: false,
        },
        {
          name: 'Грубый Стальной Компьютер', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 10, parcelId: 23, fragile: false,
        },
        {
          name: 'Великолепный Гранитный Куртка', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 1, parcelId: 16, fragile: true,
        },
        {
          name: 'Свободный Меховой Автомобиль', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 1, parcelId: 3, fragile: true,
        },
        {
          name: 'Великолепный Резиновый Стол', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 1, parcelId: 18, fragile: false,
        },
        {
          name: 'Эргономичный Неодимовый Клатч', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 3, parcelId: 43, fragile: true,
        },
        {
          name: 'Великолепный Кожанный Свитер', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 7, parcelId: 30, fragile: true,
        },
        {
          name: 'Большой Натуральный Майка', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 4, parcelId: 17, fragile: false,
        },
        {
          name: 'Великолепный Деревянный Майка', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 10, parcelId: 8, fragile: false,
        },
        {
          name: 'Великолепный Меховой Носки', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 7, parcelId: 25, fragile: true,
        },
        {
          name: 'Лоснящийся Резиновый Ремень', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 3, parcelId: 42, fragile: true,
        },
        {
          name: 'Большой Бетонный Сабо', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 10, parcelId: 1, fragile: true,
        },
        {
          name: 'Невероятный Гранитный Компьютер', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 1, parcelId: 15, fragile: true,
        },
        {
          name: 'Большой Бетонный Сабо', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 3, parcelId: 49, fragile: true,
        },
        {
          name: 'Маленький Натуральный Плащ', description: 'The Football Is Good For Training And Recreational Purposes', weight: 3, parcelId: 24, fragile: true,
        },
        {
          name: 'Фантастический Натуральный Ножницы', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 7, parcelId: 49, fragile: true,
        },
        {
          name: 'Потрясающий Бетонный Свитер', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 4, parcelId: 20, fragile: true,
        },
        {
          name: 'Эргономичный Деревянный Плащ', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 10, parcelId: 46, fragile: false,
        },
        {
          name: 'Фантастический Хлопковый Берет', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 1, parcelId: 9, fragile: true,
        },
        {
          name: 'Свободный Меховой Шарф', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 5, parcelId: 25, fragile: false,
        },
        {
          name: 'Большой Кожанный Автомобиль', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 2, parcelId: 12, fragile: false,
        },
        {
          name: 'Маленький Стальной Клатч', description: 'The Football Is Good For Training And Recreational Purposes', weight: 6, parcelId: 28, fragile: true,
        },
        {
          name: 'Лоснящийся Натуральный Кошелек', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 3, parcelId: 5, fragile: false,
        },
        {
          name: 'Свободный Пластиковый Портмоне', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 3, parcelId: 46, fragile: false,
        },
        {
          name: 'Свободный Резиновый Клатч', description: 'The Football Is Good For Training And Recreational Purposes', weight: 4, parcelId: 30, fragile: true,
        },
        {
          name: 'Свободный Пластиковый Автомобиль', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 7, parcelId: 24, fragile: false,
        },
        {
          name: 'Практичный Бетонный Кулон', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 2, parcelId: 30, fragile: true,
        },
        {
          name: 'Невероятный Бетонный Стул', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 6, parcelId: 24, fragile: false,
        },
        {
          name: 'Эргономичный Деревянный Компьютер', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 3, parcelId: 43, fragile: true,
        },
        {
          name: 'Невероятный Гранитный Стол', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 5, parcelId: 35, fragile: false,
        },
        {
          name: 'Интеллектуальный Меховой Свитер', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 8, parcelId: 25, fragile: false,
        },
        {
          name: 'Эргономичный Бетонный Плащ', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 1, parcelId: 41, fragile: false,
        },
        {
          name: 'Интеллектуальный Пластиковый Ножницы', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 1, parcelId: 23, fragile: true,
        },
        {
          name: 'Маленький Резиновый Ботинок', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 1, parcelId: 19, fragile: false,
        },
        {
          name: 'Фантастический Хлопковый Автомобиль', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 8, parcelId: 47, fragile: true,
        },
        {
          name: 'Эргономичный Бетонный Берет', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 10, parcelId: 37, fragile: true,
        },
        {
          name: 'Невероятный Натуральный Плащ', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 2, parcelId: 34, fragile: true,
        },
        {
          name: 'Фантастический Резиновый Клатч', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 4, parcelId: 4, fragile: true,
        },
        {
          name: 'Большой Неодимовый Носки', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 5, parcelId: 13, fragile: true,
        },
        {
          name: 'Большой Пластиковый Свитер', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 2, parcelId: 43, fragile: true,
        },
        {
          name: 'Свободный Бетонный Майка', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 5, parcelId: 31, fragile: true,
        },
        {
          name: 'Интеллектуальный Хлопковый Кепка', description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', weight: 9, parcelId: 13, fragile: true,
        },
        {
          name: 'Свободный Меховой Компьютер', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 8, parcelId: 25, fragile: false,
        },
        {
          name: 'Фантастический Гранитный Портмоне', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 4, parcelId: 42, fragile: true,
        },
        {
          name: 'Маленький Неодимовый Свитер', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 7, parcelId: 34, fragile: false,
        },
        {
          name: 'Грубый Стальной Шарф', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 4, parcelId: 11, fragile: false,
        },
        {
          name: 'Фантастический Неодимовый Стул', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 8, parcelId: 49, fragile: false,
        },
        {
          name: 'Практичный Кожанный Ножницы', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 8, parcelId: 31, fragile: false,
        },
        {
          name: 'Фантастический Хлопковый Стол', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 5, parcelId: 5, fragile: true,
        },
        {
          name: 'Фантастический Гранитный Ремень', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 6, parcelId: 40, fragile: true,
        },
        {
          name: 'Маленький Бетонный Стол', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 8, parcelId: 48, fragile: false,
        },
        {
          name: 'Лоснящийся Резиновый Куртка', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 9, parcelId: 45, fragile: false,
        },
        {
          name: 'Маленький Гранитный Кулон', description: 'The Football Is Good For Training And Recreational Purposes', weight: 10, parcelId: 28, fragile: false,
        },
        {
          name: 'Свободный Бетонный Компьютер', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 7, parcelId: 20, fragile: true,
        },
        {
          name: 'Лоснящийся Неодимовый Сабо', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 1, parcelId: 48, fragile: true,
        },
        {
          name: 'Большой Гранитный Свитер', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 5, parcelId: 32, fragile: false,
        },
        {
          name: 'Потрясающий Меховой Стул', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 2, parcelId: 41, fragile: true,
        },
        {
          name: 'Фантастический Неодимовый Свитер', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 7, parcelId: 13, fragile: true,
        },
        {
          name: 'Свободный Бетонный Стул', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 5, parcelId: 21, fragile: false,
        },
        {
          name: 'Практичный Меховой Ботинок', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 9, parcelId: 1, fragile: false,
        },
        {
          name: 'Эргономичный Натуральный Стул', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 2, parcelId: 28, fragile: true,
        },
        {
          name: 'Свободный Кожанный Компьютер', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 10, parcelId: 22, fragile: false,
        },
        {
          name: 'Лоснящийся Стальной Ремень', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 8, parcelId: 43, fragile: false,
        },
        {
          name: 'Эргономичный Меховой Клатч', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 4, parcelId: 14, fragile: true,
        },
        {
          name: 'Интеллектуальный Кожанный Портмоне', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 10, parcelId: 12, fragile: true,
        },
        {
          name: 'Потрясающий Резиновый Берет', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 2, parcelId: 14, fragile: true,
        },
        {
          name: 'Лоснящийся Меховой Кулон', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 8, parcelId: 43, fragile: false,
        },
        {
          name: 'Практичный Кожанный Носки', description: 'The Football Is Good For Training And Recreational Purposes', weight: 3, parcelId: 31, fragile: true,
        },
        {
          name: 'Большой Хлопковый Ботинок', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 5, parcelId: 32, fragile: false,
        },
        {
          name: 'Большой Резиновый Берет', description: 'The Football Is Good For Training And Recreational Purposes', weight: 3, parcelId: 18, fragile: false,
        },
        {
          name: 'Потрясающий Неодимовый Стол', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 10, parcelId: 33, fragile: false,
        },
        {
          name: 'Великолепный Гранитный Майка', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 4, parcelId: 30, fragile: true,
        },
        {
          name: 'Эргономичный Пластиковый Сабо', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 1, parcelId: 32, fragile: true,
        },
        {
          name: 'Потрясающий Кожанный Берет', description: 'The Football Is Good For Training And Recreational Purposes', weight: 2, parcelId: 13, fragile: true,
        },
        {
          name: 'Потрясающий Хлопковый Ботинок', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 8, parcelId: 1, fragile: false,
        },
        {
          name: 'Грубый Меховой Берет', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 9, parcelId: 28, fragile: true,
        },
        {
          name: 'Интеллектуальный Стальной Куртка', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 5, parcelId: 28, fragile: false,
        },
        {
          name: 'Практичный Деревянный Автомобиль', description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', weight: 10, parcelId: 3, fragile: true,
        },
        {
          name: 'Великолепный Неодимовый Ножницы', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 7, parcelId: 13, fragile: true,
        },
        {
          name: 'Невероятный Неодимовый Плащ', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 4, parcelId: 13, fragile: true,
        },
        {
          name: 'Великолепный Резиновый Кулон', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 5, parcelId: 49, fragile: false,
        },
        {
          name: 'Фантастический Резиновый Ремень', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 10, parcelId: 2, fragile: true,
        },
        {
          name: 'Практичный Деревянный Сабо', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 5, parcelId: 9, fragile: true,
        },
        {
          name: 'Потрясающий Гранитный Шарф', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 2, parcelId: 13, fragile: true,
        },
        {
          name: 'Великолепный Пластиковый Майка', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 1, parcelId: 38, fragile: false,
        },
        {
          name: 'Фантастический Меховой Шарф', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 6, parcelId: 35, fragile: true,
        },
        {
          name: 'Свободный Кожанный Свитер', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 7, parcelId: 24, fragile: false,
        },
        {
          name: 'Маленький Гранитный Шарф', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 6, parcelId: 6, fragile: true,
        },
        {
          name: 'Интеллектуальный Гранитный Носки', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 9, parcelId: 39, fragile: false,
        },
        {
          name: 'Большой Деревянный Стул', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 1, parcelId: 9, fragile: true,
        },
        {
          name: 'Интеллектуальный Бетонный Автомобиль', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 5, parcelId: 5, fragile: true,
        },
        {
          name: 'Фантастический Неодимовый Плащ', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 8, parcelId: 34, fragile: false,
        },
        {
          name: 'Фантастический Натуральный Портмоне', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 2, parcelId: 23, fragile: false,
        },
        {
          name: 'Великолепный Гранитный Ремень', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 7, parcelId: 50, fragile: true,
        },
        {
          name: 'Невероятный Натуральный Свитер', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 8, parcelId: 15, fragile: true,
        },
        {
          name: 'Великолепный Кожанный Свитер', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 3, parcelId: 18, fragile: true,
        },
        {
          name: 'Практичный Гранитный Плащ', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 4, parcelId: 16, fragile: true,
        },
        {
          name: 'Лоснящийся Меховой Ремень', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 8, parcelId: 18, fragile: true,
        },
        {
          name: 'Свободный Деревянный Майка', description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', weight: 3, parcelId: 14, fragile: false,
        },
        {
          name: 'Великолепный Деревянный Плащ', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 9, parcelId: 42, fragile: true,
        },
        {
          name: 'Большой Стальной Ножницы', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 6, parcelId: 43, fragile: false,
        },
        {
          name: 'Эргономичный Натуральный Стул', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 4, parcelId: 12, fragile: false,
        },
        {
          name: 'Великолепный Меховой Портмоне', description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', weight: 2, parcelId: 50, fragile: true,
        },
        {
          name: 'Практичный Резиновый Кулон', description: 'The Football Is Good For Training And Recreational Purposes', weight: 1, parcelId: 50, fragile: true,
        },
        {
          name: 'Лоснящийся Меховой Ботинок', description: 'The Football Is Good For Training And Recreational Purposes', weight: 9, parcelId: 32, fragile: true,
        },
        {
          name: 'Интеллектуальный Пластиковый Ремень', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 7, parcelId: 9, fragile: false,
        },
        {
          name: 'Большой Стальной Сабо', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 7, parcelId: 43, fragile: true,
        },
        {
          name: 'Лоснящийся Гранитный Сабо', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 7, parcelId: 19, fragile: false,
        },
        {
          name: 'Великолепный Резиновый Носки', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 1, parcelId: 39, fragile: false,
        },
        {
          name: 'Эргономичный Меховой Кошелек', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 6, parcelId: 36, fragile: false,
        },
        {
          name: 'Грубый Меховой Носки', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 5, parcelId: 14, fragile: false,
        },
        {
          name: 'Большой Кожанный Ножницы', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 1, parcelId: 8, fragile: true,
        },
        {
          name: 'Маленький Неодимовый Носки', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 4, parcelId: 30, fragile: false,
        },
        {
          name: 'Интеллектуальный Меховой Куртка', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 4, parcelId: 15, fragile: false,
        },
        {
          name: 'Фантастический Меховой Ремень', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 8, parcelId: 49, fragile: true,
        },
        {
          name: 'Большой Деревянный Стул', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 2, parcelId: 26, fragile: true,
        },
        {
          name: 'Грубый Стальной Свитер', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 3, parcelId: 28, fragile: true,
        },
        {
          name: 'Эргономичный Натуральный Сабо', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 9, parcelId: 32, fragile: true,
        },
        {
          name: 'Великолепный Хлопковый Клатч', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 1, parcelId: 17, fragile: true,
        },
        {
          name: 'Фантастический Меховой Компьютер', description: 'The Football Is Good For Training And Recreational Purposes', weight: 6, parcelId: 12, fragile: false,
        },
        {
          name: 'Невероятный Пластиковый Ремень', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 1, parcelId: 32, fragile: false,
        },
        {
          name: 'Великолепный Гранитный Стул', description: 'The Football Is Good For Training And Recreational Purposes', weight: 1, parcelId: 15, fragile: false,
        },
        {
          name: 'Большой Хлопковый Кошелек', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 2, parcelId: 18, fragile: true,
        },
        {
          name: 'Интеллектуальный Кожанный Кошелек', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 5, parcelId: 38, fragile: false,
        },
        {
          name: 'Интеллектуальный Хлопковый Автомобиль', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 1, parcelId: 35, fragile: false,
        },
        {
          name: 'Свободный Натуральный Ботинок', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 8, parcelId: 26, fragile: false,
        },
        {
          name: 'Великолепный Бетонный Стол', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 10, parcelId: 32, fragile: true,
        },
        {
          name: 'Грубый Стальной Стул', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 4, parcelId: 14, fragile: false,
        },
        {
          name: 'Интеллектуальный Деревянный Берет', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 9, parcelId: 49, fragile: false,
        },
        {
          name: 'Интеллектуальный Кожанный Носки', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 10, parcelId: 46, fragile: true,
        },
        {
          name: 'Маленький Стальной Свитер', description: 'The Football Is Good For Training And Recreational Purposes', weight: 3, parcelId: 12, fragile: false,
        },
        {
          name: 'Свободный Деревянный Ножницы', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 4, parcelId: 31, fragile: false,
        },
        {
          name: 'Практичный Деревянный Майка', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 9, parcelId: 17, fragile: false,
        },
        {
          name: 'Практичный Стальной Автомобиль', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 5, parcelId: 47, fragile: false,
        },
        {
          name: 'Эргономичный Бетонный Компьютер', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 2, parcelId: 34, fragile: true,
        },
        {
          name: 'Грубый Стальной Стул', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 5, parcelId: 37, fragile: false,
        },
        {
          name: 'Эргономичный Бетонный Берет', description: 'The Football Is Good For Training And Recreational Purposes', weight: 9, parcelId: 10, fragile: false,
        },
        {
          name: 'Великолепный Гранитный Кулон', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 4, parcelId: 7, fragile: false,
        },
        {
          name: 'Великолепный Деревянный Ножницы', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 7, parcelId: 36, fragile: true,
        },
        {
          name: 'Великолепный Бетонный Сабо', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 1, parcelId: 11, fragile: true,
        },
        {
          name: 'Великолепный Неодимовый Клатч', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 8, parcelId: 26, fragile: false,
        },
        {
          name: 'Лоснящийся Стальной Ножницы', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 3, parcelId: 27, fragile: true,
        },
        {
          name: 'Грубый Неодимовый Сабо', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 4, parcelId: 16, fragile: true,
        },
        {
          name: 'Невероятный Деревянный Свитер', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 1, parcelId: 35, fragile: false,
        },
        {
          name: 'Фантастический Хлопковый Свитер', description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', weight: 5, parcelId: 47, fragile: false,
        },
        {
          name: 'Лоснящийся Бетонный Ножницы', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 7, parcelId: 23, fragile: true,
        },
        {
          name: 'Грубый Резиновый Сабо', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 1, parcelId: 45, fragile: true,
        },
        {
          name: 'Свободный Пластиковый Стол', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', weight: 3, parcelId: 2, fragile: true,
        },
        {
          name: 'Грубый Кожанный Кулон', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 4, parcelId: 35, fragile: true,
        },
        {
          name: 'Свободный Кожанный Клатч', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 5, parcelId: 37, fragile: true,
        },
        {
          name: 'Невероятный Бетонный Кулон', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 6, parcelId: 15, fragile: true,
        },
        {
          name: 'Потрясающий Хлопковый Портмоне', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 5, parcelId: 4, fragile: false,
        },
        {
          name: 'Свободный Меховой Ремень', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 3, parcelId: 8, fragile: false,
        },
        {
          name: 'Свободный Неодимовый Портмоне', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 4, parcelId: 38, fragile: true,
        },
        {
          name: 'Невероятный Натуральный Сабо', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 1, parcelId: 34, fragile: false,
        },
        {
          name: 'Интеллектуальный Гранитный Куртка', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 8, parcelId: 49, fragile: true,
        },
        {
          name: 'Невероятный Кожанный Ножницы', description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', weight: 4, parcelId: 30, fragile: true,
        },
        {
          name: 'Эргономичный Стальной Куртка', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 8, parcelId: 31, fragile: false,
        },
        {
          name: 'Великолепный Неодимовый Майка', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 7, parcelId: 6, fragile: true,
        },
        {
          name: 'Лоснящийся Стальной Ножницы', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 1, parcelId: 44, fragile: false,
        },
        {
          name: 'Лоснящийся Неодимовый Шарф', description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', weight: 1, parcelId: 41, fragile: false,
        },
        {
          name: 'Интеллектуальный Гранитный Стул', description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', weight: 4, parcelId: 11, fragile: false,
        },
        {
          name: 'Эргономичный Бетонный Кулон', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 10, parcelId: 43, fragile: true,
        },
        {
          name: 'Практичный Меховой Автомобиль', description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', weight: 6, parcelId: 23, fragile: false,
        },
        {
          name: 'Свободный Неодимовый Сабо', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 9, parcelId: 38, fragile: false,
        },
        {
          name: 'Интеллектуальный Неодимовый Портмоне', description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', weight: 7, parcelId: 27, fragile: false,
        },
        {
          name: 'Грубый Неодимовый Кулон', description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", weight: 5, parcelId: 4, fragile: true,
        },
        {
          name: 'Фантастический Деревянный Майка', description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', weight: 7, parcelId: 45, fragile: true,
        },
        {
          name: 'Лоснящийся Натуральный Кулон', description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', weight: 5, parcelId: 8, fragile: true,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
