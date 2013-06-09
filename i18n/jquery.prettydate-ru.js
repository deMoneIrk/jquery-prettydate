$.prettyDate.messages = (function() {

	var FuncSource = function(one, two, five) {
		this.one = one;
		this.two = two;
		this.five = five;
	};

	FuncSource.prototype = {
		replace: function(regexp, amt) {
			var p = amt % 100;

			if (p >= 5 && p <= 20) {
				return this.five.replace(regexp, amt);
			} else {
				p = p % 10;
				if (p == 1) {
					return this.one.replace(regexp, amt);
				} else if (p >= 2 && p <= 4) {
					return this.two.replace(regexp, amt);
				} else {
					return this.five.replace(regexp, amt);
				}
			}
		}
	};

	return {
		now: 'Только что',
		minute: 'Минуту назад',
		minutes: $.prettyDate.template(new FuncSource('{0} минуту назад', '{0} минуты назад', '{0} минут назад')),
		hour: 'Час назад',
		hours: $.prettyDate.template(new FuncSource('{0} час назад', '{0} часа назад', '{0} часов назад')),
		yesterday: 'Вчера',
		dayBeforeYesterday: 'Позавчера',
		days: $.prettyDate.template(new FuncSource('{0} день назад', '{0} дня назад', '{0} дней назад')),
		week: 'Неделю назад',
		weeks: $.prettyDate.template(new FuncSource('{0} неделю назад', '{0} недели назад', '{0} недель назад')),
		month: 'Месяц назад',
		months: $.prettyDate.template(new FuncSource('{0} месяц назад', '{0} месяца назад', '{0} месяцев назад')),
		year: 'Год назад',
		years: $.prettyDate.template(new FuncSource('{0} год назад', '{0} года назад', '{0} лет назад'))
	};
})();
