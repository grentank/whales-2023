const QueryDB = require('../queries');

describe('Тесты', () => {
  describe('Метод allLocations', () => {
    test('возвращает массив нужной длины', async () => {
      const locations = await QueryDB.allLocations();
      expect(Array.isArray(locations)).toBe(true);
      expect(locations.length).toBe(10);
    });
    test('массив содержит нужные адреса', async () => {
      const locations = await QueryDB.allLocations();
      expect(locations).toContain('ул. Пушкина, д. 15');
      expect(locations).toContain('пер. Ростова, д. 18');
      expect(locations).toContain('пр-т Мира, д. 108');
    });
  });

  describe('Метод parcelsByLocation', () => {
    test('возвращает количество посылок в постамате по локации', async () => {
      const location = 'ул. Ленина, д. 10';
      const amount = await QueryDB.parcelsByLocation(location);
      expect(amount).toBe(3);
    });
    test('корректно работает для разных данных', async () => {
      const location1 = 'ул. Кирова, д. 20';
      const locker1amount = await QueryDB.parcelsByLocation(location1);
      expect(locker1amount).toBe(4);
      const location2 = 'ул. Гагарина, д. 5';
      const locker2amount = await QueryDB.parcelsByLocation(location2);
      expect(locker2amount).toBe(9);
    });
  });

  describe('Метод recipientByItemName', () => {
    test('возвращает первое имя получателя по названию отправляемого предмета', async () => {
      const name = 'Лоснящийся Пластиковый Портмоне';
      const recipient = await QueryDB.recipientByItemName(name);
      expect(recipient).toBe('Балашов Д. Л.');
    });
    test('корректно работает для разных данных', async () => {
      const name1 = 'Большой Кожанный Автомобиль';
      const recipient1 = await QueryDB.recipientByItemName(name1);
      expect(recipient1).toBe('Васильева Е. А.');
      const name2 = 'Великолепный Резиновый Кулон';
      const recipient2 = await QueryDB.recipientByItemName(name2);
      expect(recipient2).toBe('Куликова А. Г.');
    });
  });

  describe('Метод accessCodeByItemId', () => {
    test('возвращает код доступа по id предмета, который лежит в посылке данного постамата', async () => {
      const id = 144;
      const accessCode = await QueryDB.accessCodeByItemId(id);
      expect(accessCode).toBe('q3pz0ia1');
    });
    test('корректно работает для разных данных', async () => {
      const id1 = 87;
      const accessCode1 = await QueryDB.accessCodeByItemId(id1);
      expect(accessCode1).toBe('4g2yqgky');
      const id2 = 178;
      const accessCode2 = await QueryDB.accessCodeByItemId(id2);
      expect(accessCode2).toBe('rb7s94i4');
    });
  });

  describe('Метод totalWeightByLocation', () => {
    test('возвращает сумму весов всех предметов в постамате по адресу', async () => {
      const location = 'ул. Шаболовка, д. 69/32';
      const totalWeight = await QueryDB.totalWeightByLocation(location);
      expect(totalWeight).toBe(81);
    });
    test('корректно работает для разных данных', async () => {
      const location = 'ул. Радонежского, д. 21';
      const totalWeight = await QueryDB.totalWeightByLocation(location);
      expect(totalWeight).toBe(262);
    });
    test('корректно работает для разных данных 2', async () => {
      const location = 'ул. Гагарина, д. 5';
      const totalWeight = await QueryDB.totalWeightByLocation(location);
      expect(totalWeight).toBe(137);
    });
  });
});
