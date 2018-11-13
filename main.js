(function(){
	var datepicker = window.datepicker;

	datepicker.buildUi = function(year, month){

		var monthData = datepicker.getMonthData(year, month);

		var html = '<div class="header">' +
						'<a class="prev-btn">&lt;</a>' +
						'<a class="next-btn">&gt;</a>' +
						'<span class="seleted">2018-11</span>' +
					'</div>' +
					'<div class="datetime-body">' +
						'<table class="datetime-table">' +
							'<tr>' +
								'<th>日</th>' +
								'<th>一</th>' +
								'<th>二</th>' +
								'<th>三</th>' +
								'<th>四</th>' +
								'<th>五</th>' +
								'<th>六</th>' +
							'</tr>' +
							'<tr>' +
								'<td>29</td>' +
								'<td>30</td>' +
								'<td>31</td>' +
								'<td>1</td>' +
								'<td>2</td>' +
								'<td>3</td>' +
								'<td>4</td>' +
							'</tr>' +
							'<tr>' +
								'<td>5</td>' +
								'<td>6</td>' +
								'<td>7</td>' +
								'<td>8</td>' +
								'<td>9</td>' +
								'<td>10</td>' +
								'<td>11</td>' +
							'</tr>' +
							'<tr>' +
								'<td>12</td>' +
								'<td>13</td>' +
								'<td>14</td>' +
								'<td>15</td>' +
								'<td>16</td>' +
								'<td>17</td>' +
								'<td>18</td>' +
							'</tr>' +
							'<tr>' +
								'<td>19</td>' +
								'<td>20</td>' +
								'<td>21</td>' +
								'<td>22</td>' +
								'<td>23</td>' +
								'<td>24</td>' +
								'<td>25</td>' +
							'</tr>' +
							'<tr>' +
								'<td>26</td>' +
								'<td>27</td>' +
								'<td>28</td>' +
								'<td>29</td>' +
								'<td>30</td>' +
								'<td>31</td>' +
								'<td>1</td>' +
							'</tr>' +
						'</table>' +
					'</div>';
	}
})();