var Cashbox = {
  amount: 0,
  operationHistory: [],
  validation: function ( //Валидация на вводимые данные
    enteredData) {
    if (
      typeof enteredData.amount !== 'number' ||
      typeof enteredData.info !== 'string'
    ) {
      console.log("Вы неправильно ввели данные, перепроверьте их и введите заново");
    }
  },
  addPayment: function (payment) {
    this.validation(payment);
    if (payment.amount <= 0) { //если платёж отрицателен или равен 0, возвращать сообщение об этом
      return "Amount not affected"
    }
  },
  refundPayment: function (refund) {
    this.validation(refund);
    if (this.amount - refund.amount <= 0) {
      return "Cashbox amount not affected (warning)";
    }
  },
  recordPayment: function (enteredData, operation) { //функция для отображения даты платежа
    var currentDate = new Date();
    var paymentDate = {
      day: overallDate.getDate(),
      month: overallDate.getMonth() + 1,
      year: overallDate.getFullYear(),
      hours: overallDate.getHours(),
      minutes: overallDate.getMinutes(),
    };
    this.operationHistory.push({ //запушим данные в наш массив
      amount: enteredData.amount,
      info: enteredData.info,
      operation: operation,
      date: `${paymentDate.day}.${paymentDate.month}.${paymentDate.year} ${paymentDate.hours}:${paymentDate.minutes}`,
    });
  },
  showHistory: function () {
    this.operationHistory.forEach(function (item, i) { //перебираем элементы массива и их индексы, которые в дальнейшем увеличим на один
      console.log(
        `${i + 1}. ${item.date} - ${item.operation} ${item.amount //вывод данных, как по заданию
        } руб, операция: ${item.info}`
      );
    });
    // 1. 21.03.2021 18:45 - платеж на 200 руб, операция: Оплата штрафа
    // 2. 22.04.2021 10:20 - возврат 10 руб, операция: Оплата ЖКХ
  },
};

cashbox.addPayment({ amount: -10, info: 'Оплата штрафа' }); // show error (console), amount not affected
cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' }); // cashbox amount = 10

cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' }); // cashbox amount = 0
cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' }); // cashbox amount not affected (warning)
