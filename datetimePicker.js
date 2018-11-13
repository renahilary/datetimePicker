$(function(){
	//返回某月日期的数据
	var datepicker = {};


	datepicker.getMonthData = function(year,month){
		var ret = [];
		if(!year || !month){
			//没有入参默认返回本月数据
			var today = new Date();
			year = today.getFullYear();
			month = today.getMonth() +1;  //月份从0开始到11
		}

		// 本月第一天
		var firstDay = new Date(year, month-1,1);
		// 本月第一天是周几，0-6对应周日-周六
		var firstDayWeekday = firstDay.getDay();
		if(firstDayWeekday == 0) firstDayWeekday =7;

		//上个月的最后一天的Date对象
		var lastDayOfLastMonth = new Date(year, month-1, 0);
		//上个月的最后一天的Str
		var lastDateOfLastMonth = lastDayOfLastMonth.getDate();
		//上个月的最后一天是周几
		var preMonthDayCount = firstDayWeekday - 1;
		
		// 本月最后一天的Date对象
		var lastDay = new Date(year, month, 0);
		// 本月最后一天的日期Str
		var lastDate = lastDay.getDate();

		for(var i =0; i<7*6; i++){
			var date = i - preMonthDayCount +1;
			var showDate = date;
			var thisMonth = month;
			// 上一月
			if(date <= 0){
				thisMonth = month - 1;
				showDate = lastDateOfLastMonth +date;
			}else if(date > lastDate){
				thisMonth = month +1;
				showDate = showDate -lastDate;
			}

			if(thisMonth == 0 ) thisMonth =12;
			if(thisMonth == 13) thisMonth= 1;
			ret.push({
				month: thisMonth ,
				date: date,
				showDate: showDate
			});
			
		}
		return ret;
	};
	window.datepicker = datepicker;

})
	
