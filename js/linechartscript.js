// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================




var realDW = $(document).width(), // @int --> real document width
	chartInstanceTeam,
	chartInstanceLogistic,
	chartInstanceSupport,
	chartInstanceDocument,
	chartInstanceCooperation
	; // @string ---------------------> side of legend position in charts
$(document).ready(function () {
	// add charts
	setSize();
	generateCharts();
	$(window).on('resize', function () {
		setTimeout(function () {
			checkMedia($(document).width(), getmediaPeriod(realDW));
		}, 50);
	})
});
const images = [' ', './../img/star5.svg', './../img/star4.svg', './../img/star3.svg', './../img/star2.svg', './../img/star1.svg'];
(function()
{
    var ShadowLineElement = Chart.elements.Line.extend({
        draw: function()
        {
            var ctx = this._chart.ctx;
            var originalStroke = ctx.stroke;
            ctx.stroke = function()
            {
                ctx.save();
                ctx.shadowColor = '#BDDA1C';
                ctx.shadowBlur = 4;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                originalStroke.apply(this, arguments);
                ctx.restore();
            };
            Chart.elements.Line.prototype.draw.apply(this, arguments);
            ctx.stroke = originalStroke;
        }
    });
    Chart.defaults.ShadowLineGreen = Chart.defaults.line;
    Chart.controllers.ShadowLineGreen = Chart.controllers.line.extend({
        datasetElementType: ShadowLineElement
    });
})();


(function()
{
    var ShadowLineElement = Chart.elements.Line.extend({
        draw: function()
        {
            var ctx = this._chart.ctx;
            var originalStroke = ctx.stroke;
            ctx.stroke = function()
            {
                ctx.save();
                ctx.shadowColor = '#006B9F';
                ctx.shadowBlur = 4;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                originalStroke.apply(this, arguments);
                ctx.restore();
            };
            Chart.elements.Line.prototype.draw.apply(this, arguments);
            ctx.stroke = originalStroke;
        }
    });
    Chart.defaults.ShadowLineBlue = Chart.defaults.line;
    Chart.controllers.ShadowLineBlue = Chart.controllers.line.extend({
        datasetElementType: ShadowLineElement
    });
})();


(function()
{
    var ShadowLineElement = Chart.elements.Line.extend({
        draw: function()
        {
            var ctx = this._chart.ctx;
            var originalStroke = ctx.stroke;
            ctx.stroke = function()
            {
                ctx.save();
                ctx.shadowColor = '#006B9F';
                ctx.shadowBlur = 4;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                originalStroke.apply(this, arguments);
                ctx.restore();
            };
            Chart.elements.Line.prototype.draw.apply(this, arguments);
            ctx.stroke = originalStroke;
        }
    });
    Chart.defaults.ShadowLineLightBlue = Chart.defaults.line;
    Chart.controllers.ShadowLineLightBlue = Chart.controllers.line.extend({
        datasetElementType: ShadowLineElement
    });
})();


(function()
{
    var ShadowLineElement = Chart.elements.Line.extend({
        draw: function()
        {
            var ctx = this._chart.ctx;
            var originalStroke = ctx.stroke;
            ctx.stroke = function()
            {
                ctx.save();
                ctx.shadowColor = '#009F3F';
                ctx.shadowBlur = 4;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                originalStroke.apply(this, arguments);
                ctx.restore();
            };
            Chart.elements.Line.prototype.draw.apply(this, arguments);
            ctx.stroke = originalStroke;
        }
    });
    Chart.defaults.ShadowLineDarkGreen = Chart.defaults.line;
    Chart.controllers.ShadowLineDarkGreen = Chart.controllers.line.extend({
        datasetElementType: ShadowLineElement
    });
})();


(function()
{
    var ShadowLineElement = Chart.elements.Line.extend({
        draw: function()
        {
            var ctx = this._chart.ctx;
            var originalStroke = ctx.stroke;
            ctx.stroke = function()
            {
                ctx.save();
                ctx.shadowColor = '#005E94';
                ctx.shadowBlur = 4;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                originalStroke.apply(this, arguments);
                ctx.restore();
            };
            Chart.elements.Line.prototype.draw.apply(this, arguments);
            ctx.stroke = originalStroke;
        }
    });
    Chart.defaults.ShadowLineDarkBlue = Chart.defaults.line;
    Chart.controllers.ShadowLineDarkBlue = Chart.controllers.line.extend({
        datasetElementType: ShadowLineElement
    });
})();

//teamPercent
var teamDataCountPerc = new Array(teamDataCount.length);
if(teamDataCount) {
	var sum = 0;
	for (let i = 0; i < teamDataCount.length; i++) {
		sum = sum + teamDataCount[i];
	}
	for (let i = 0; i < teamDataCount.length; i++) {
		teamDataCountPerc[i] = Math.round((100*teamDataCount[i]) / sum);
	}
}

//logisticPercent
var logisticDataCountPerc = new Array(logisticDataCount.length);
if(logisticDataCount) {
	var sum = 0;
	for (let i = 0; i < logisticDataCount.length; i++) {
		sum = sum + logisticDataCount[i];
	}
	for (let i = 0; i < logisticDataCount.length; i++) {
		logisticDataCountPerc[i] = Math.round((100*logisticDataCount[i]) / sum);
	}
}

//supportPercent
var supportDataCountPerc = new Array(supportDataCount.length);
if(supportDataCount) {
	var sum = 0;
	for (let i = 0; i < supportDataCount.length; i++) {
		sum = sum + supportDataCount[i];
	}
	for (let i = 0; i < supportDataCount.length; i++) {
		supportDataCountPerc[i] = Math.round((100*supportDataCount[i]) / sum);
	}
}

//documentPercent
var documentDataCountPerc = new Array(documentDataCount.length);
if(documentDataCount) {
	var sum = 0;
	for (let i = 0; i < documentDataCount.length; i++) {
		sum = sum + documentDataCount[i];
	}
	for (let i = 0; i < documentDataCount.length; i++) {
		documentDataCountPerc[i] = Math.round((100*documentDataCount[i]) / sum);
	}
}

//cooperationPercent
var cooperationDataCountPerc = new Array(cooperationDataCount.length);
if(cooperationDataCount) {
	var sum = 0;
	for (let i = 0; i < cooperationDataCount.length; i++) {
		sum = sum + cooperationDataCount[i];
	}
	for (let i = 0; i < cooperationDataCount.length; i++) {
		cooperationDataCountPerc[i] = Math.round((100*cooperationDataCount[i]) / sum);
	}
}

//options team Chart
var optionsTeam = {
	responsive: true,
	maintainAspectRatio: true,
	cutoutPercentage: 70,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: '#D5D3D3',
				lineWidth: 1
			},
			ticks: {
                fontSize: 8
            }
		}],
		yAxes: [{
            barPercentage: 1.0,
            weight: 100,
			gridLines: {
				color: '#D5D3D3',
				lineWidth: 1
            },
            ticks: {
				min: 1,
				max: 6,
				stepSize: 1,
				callback: function(value, index, values) {
					return '               ';
				}
			}
		}],
	},
	elements: {
		line: {
			tension: 0.4,
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: '#BDDA1C',
		titleFontColor: '#000',
		caretSize: 10,
		cornerRadius: 10,
		xPadding: 10,
		yPadding: 10,
		yAlign: 'bottom',
		xAlign: 'center',
		enabled: false,
		custom: function(tooltipModel) {
			// Tooltip Element
			var tooltipEl = document.getElementById('chartjs-tooltip');
			// Create element on first render
			if (!tooltipEl) {
				tooltipEl = document.createElement('div');
				tooltipEl.id = 'chartjs-tooltip';
				tooltipEl.innerHTML = '<table></table>';
				document.body.appendChild(tooltipEl);
			}
			// Hide if no tooltip
			if (tooltipModel.opacity === 0) {
				tooltipEl.style.opacity = 0;
				return;
			}

			// Set caret Position
			tooltipEl.classList.remove('above', 'below', 'no-transform');
			if (tooltipModel.yAlign) {
				tooltipEl.classList.add(tooltipModel.yAlign);
			} else {
				tooltipEl.classList.add('no-transform');
			}

			function getBody(bodyItem) {
				return bodyItem.lines;
			}

			// Set Text
			if (tooltipModel.body) {
				var titleLines = tooltipModel.title || [];
				var bodyLines = tooltipModel.body.map(getBody);	
				var innerHtml = '<thead>';
				innerHtml += '</thead><tbody>';
				bodyLines.forEach(function(body, i) {
					var index = tooltipModel.dataPoints[0].index;
					innerHtml +='<tr><td><div style="background-image:url(./../img/tooltip-bg1.svg); background-repeat: no-repeat; background-size: contain; background-position: center;">';
					innerHtml += '<div style="padding: 10px  6px 15px; font-size: 12px; line-height: 14px; color: #ffffff;">' + teamDataCountPerc[index] +'% / ' + teamDataCount[index] + 'шт</div></td></tr></div>';
				});
				innerHtml += '</tbody>';
				var tableRoot = tooltipEl.querySelector('table');
				tableRoot.innerHTML = innerHtml;
			}

			// `this` will be the overall tooltip
			var position = this._chart.canvas.getBoundingClientRect();

			// Display, position, and set styles for font
			tooltipEl.style.opacity = 1;
			tooltipEl.style.position = 'absolute';
			tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 48 + 'px';
			tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY  - 55 + 'px';
			tooltipEl.style.fontFamily = 'Arial';
			tooltipEl.style.fontSize = '12px';
			tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
			tooltipEl.style.padding = '10px ' +  '10px';
			tooltipEl.style.pointerEvents = 'none';
		}
	}
};

//options logistic Chart
var optionsLogistic = {
	responsive: true,
	maintainAspectRatio: true,
	cutoutPercentage: 70,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: '#D5D3D3',
				lineWidth: 1
			},
			ticks: {
                fontSize: 8
            }
		}],
		yAxes: [{
            barPercentage: 1.0,
            weight: 100,
			gridLines: {
				color: '#D5D3D3',
				lineWidth: 1
            },
            ticks: {
				min: 1,
				max: 6,
				stepSize: 1,
				callback: function(value, index, values) {
					return '               ';
				}
			}
		}],
	},
	elements: {
		line: {
			tension: 0.4,
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: '#BDDA1C',
		titleFontColor: '#000',
		caretSize: 10,
		cornerRadius: 10,
		xPadding: 10,
		yPadding: 10,
		yAlign: 'bottom',
		xAlign: 'center',
		enabled: false,
		custom: function(tooltipModel) {
			// Tooltip Element
			var tooltipEl = document.getElementById('chartjs-tooltip');
			// Create element on first render
			if (!tooltipEl) {
				tooltipEl = document.createElement('div');
				tooltipEl.id = 'chartjs-tooltip';
				tooltipEl.innerHTML = '<table></table>';
				document.body.appendChild(tooltipEl);
			}
			// Hide if no tooltip
			if (tooltipModel.opacity === 0) {
				tooltipEl.style.opacity = 0;
				return;
			}

			// Set caret Position
			tooltipEl.classList.remove('above', 'below', 'no-transform');
			if (tooltipModel.yAlign) {
				tooltipEl.classList.add(tooltipModel.yAlign);
			} else {
				tooltipEl.classList.add('no-transform');
			}

			function getBody(bodyItem) {
				return bodyItem.lines;
			}

			// Set Text
			if (tooltipModel.body) {
				var titleLines = tooltipModel.title || [];
				var bodyLines = tooltipModel.body.map(getBody);

				var innerHtml = '<thead>';
				innerHtml += '</thead><tbody>';
				bodyLines.forEach(function(body, i) {
					var index = tooltipModel.dataPoints[0].index;
					innerHtml +='<tr><td><div style="background-image:url(./../img/tooltip-bg2.svg); background-repeat: no-repeat; background-size: contain; background-position: center;">';
					innerHtml += '<div style="padding: 10px  6px 15px; font-size: 12px; line-height: 14px; color: #ffffff;">' + logisticDataCountPerc[index] +'% / ' + logisticDataCount[index] + 'шт</div></td></tr></div>';
				});
				innerHtml += '</tbody>';
				var tableRoot = tooltipEl.querySelector('table');
				tableRoot.innerHTML = innerHtml;
			}

			// `this` will be the overall tooltip
			var position = this._chart.canvas.getBoundingClientRect();

			// Display, position, and set styles for font
			tooltipEl.style.opacity = 1;
			tooltipEl.style.position = 'absolute';
			tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 48 + 'px';
			tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY  - 55 + 'px';
			tooltipEl.style.fontFamily = 'Arial';
			tooltipEl.style.fontSize = '12px';
			tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
			tooltipEl.style.padding = '10px ' +  '10px';
			tooltipEl.style.pointerEvents = 'none';
		}
	}
};

//options support Chart
var optionsSupport = {
	responsive: true,
	maintainAspectRatio: true,
	cutoutPercentage: 70,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			weight: 1,
			gridLines: {
				color: '#D5D3D3',
				lineWidth: 1,
			},
			ticks: {
                fontSize: 8
            }
		}],
		yAxes: [{
            barPercentage: 1.0,
            weight: 100,
			gridLines: {
				color: '#D5D3D3',
				lineWidth: 1
            },
            ticks: {
				
				min: 1,
				max: 6,
				stepSize: 1,
				callback: function(value, index, values) {
					return '               ';
				}
			}
		}],
	},
	elements: {
		line: {
			tension: 0.4,
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: '#BDDA1C',
		titleFontColor: '#000',
		caretSize: 10,
		cornerRadius: 10,
		xPadding: 10,
		yPadding: 10,
		yAlign: 'bottom',
		xAlign: 'center',
		enabled: false,
		custom: function(tooltipModel) {
			// Tooltip Element
			var tooltipEl = document.getElementById('chartjs-tooltip');
			// Create element on first render
			if (!tooltipEl) {
				tooltipEl = document.createElement('div');
				tooltipEl.id = 'chartjs-tooltip';
				tooltipEl.innerHTML = '<table></table>';
				document.body.appendChild(tooltipEl);
			}
			// Hide if no tooltip
			if (tooltipModel.opacity === 0) {
				tooltipEl.style.opacity = 0;
				return;
			}

			// Set caret Position
			tooltipEl.classList.remove('above', 'below', 'no-transform');
			if (tooltipModel.yAlign) {
				tooltipEl.classList.add(tooltipModel.yAlign);
			} else {
				tooltipEl.classList.add('no-transform');
			}

			function getBody(bodyItem) {
				return bodyItem.lines;
			}

			// Set Text
			if (tooltipModel.body) {
				var titleLines = tooltipModel.title || [];
				var bodyLines = tooltipModel.body.map(getBody);

				var innerHtml = '<thead>';
				innerHtml += '</thead><tbody>';
				bodyLines.forEach(function(body, i) {
					var index = tooltipModel.dataPoints[0].index;
					innerHtml +='<tr><td><div style="background-image:url(./../img/tooltip-bg3.svg); background-repeat: no-repeat; background-size: contain; background-position: center;">';
					innerHtml += '<div style="padding: 10px  6px 15px; font-size: 12px; line-height: 14px; color: #ffffff;">' + supportDataCountPerc[index] +'% / ' + supportDataCount[index] + 'шт</div></td></tr></div>';
				});
				innerHtml += '</tbody>';
				var tableRoot = tooltipEl.querySelector('table');
				tableRoot.innerHTML = innerHtml;
			}

			// `this` will be the overall tooltip
			var position = this._chart.canvas.getBoundingClientRect();

			// Display, position, and set styles for font
			tooltipEl.style.opacity = 1;
			tooltipEl.style.position = 'absolute';
			tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 48 + 'px';
			tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY  - 55 + 'px';
			tooltipEl.style.fontFamily = 'Arial';
			tooltipEl.style.fontSize = '12px';
			tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
			tooltipEl.style.padding = '10px ' +  '10px';
			tooltipEl.style.pointerEvents = 'none';
		}
	}
};

//options document Chart
var optionsDocument = {
	responsive: true,
	maintainAspectRatio: true,
	cutoutPercentage: 70,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			weight: 1,
			gridLines: {
				color: '#D5D3D3',
				lineWidth: 1,
			},
			ticks: {
                fontSize: 8
            }
		}],
		yAxes: [{
            barPercentage: 1.0,
            weight: 100,
			gridLines: {
				color: '#D5D3D3',
				lineWidth: 1
            },
            ticks: {
				
				min: 1,
				max: 6,
				stepSize: 1,
				callback: function(value, index, values) {
					return '               ';
				}
			}
		}],
	},
	elements: {
		line: {
			tension: 0.4,
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: '#BDDA1C',
		titleFontColor: '#000',
		caretSize: 10,
		cornerRadius: 10,
		xPadding: 10,
		yPadding: 10,
		yAlign: 'bottom',
		xAlign: 'center',
		enabled: false,
		custom: function(tooltipModel) {
			// Tooltip Element
			var tooltipEl = document.getElementById('chartjs-tooltip');
			// Create element on first render
			if (!tooltipEl) {
				tooltipEl = document.createElement('div');
				tooltipEl.id = 'chartjs-tooltip';
				tooltipEl.innerHTML = '<table></table>';
				document.body.appendChild(tooltipEl);
			}
			// Hide if no tooltip
			if (tooltipModel.opacity === 0) {
				tooltipEl.style.opacity = 0;
				return;
			}

			// Set caret Position
			tooltipEl.classList.remove('above', 'below', 'no-transform');
			if (tooltipModel.yAlign) {
				tooltipEl.classList.add(tooltipModel.yAlign);
			} else {
				tooltipEl.classList.add('no-transform');
			}

			function getBody(bodyItem) {
				return bodyItem.lines;
			}

			// Set Text
			if (tooltipModel.body) {
				var titleLines = tooltipModel.title || [];
				var bodyLines = tooltipModel.body.map(getBody);

				var innerHtml = '<thead>';
				innerHtml += '</thead><tbody>';
				bodyLines.forEach(function(body, i) {
					var index = tooltipModel.dataPoints[0].index;
					innerHtml +='<tr><td><div style="background-image:url(./../img/tooltip-bg4.svg); background-repeat: no-repeat; background-size: contain; background-position: center;">';
					innerHtml += '<div style="padding: 10px  6px 15px; font-size: 12px; line-height: 14px; color: #ffffff;">' + documentDataCountPerc[index] +'% / ' + documentDataCount[index] + 'шт</div></td></tr></div>';
				});
				innerHtml += '</tbody>';
				var tableRoot = tooltipEl.querySelector('table');
				tableRoot.innerHTML = innerHtml;
			}

			// `this` will be the overall tooltip
			var position = this._chart.canvas.getBoundingClientRect();

			// Display, position, and set styles for font
			tooltipEl.style.opacity = 1;
			tooltipEl.style.position = 'absolute';
			tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 48 + 'px';
			tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY  - 55 + 'px';
			tooltipEl.style.fontFamily = 'Arial';
			tooltipEl.style.fontSize = '12px';
			tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
			tooltipEl.style.padding = '10px ' +  '10px';
			tooltipEl.style.pointerEvents = 'none';
		}
	}
};

//options cooperation Chart
var optionsCooperation = {
	responsive: true,
	maintainAspectRatio: true,
	cutoutPercentage: 70,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			weight: 1,
			gridLines: {
				color: '#D5D3D3',
				lineWidth: 1,
			},
			ticks: {
                fontSize: 8
            }
		}],
		yAxes: [{
            barPercentage: 1.0,
            weight: 100,
			gridLines: {
				color: '#D5D3D3',
				lineWidth: 1
            },
            ticks: {
				min: 1,
				max: 6,
				stepSize: 1,
				callback: function(value, index, values) {
					return '               ';
				}
			}
		}],
	},
	elements: {
		line: {
			tension: 0.4,
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: '#BDDA1C',
		titleFontColor: '#000',
		caretSize: 10,
		cornerRadius: 10,
		xPadding: 10,
		yPadding: 10,
		yAlign: 'bottom',
		xAlign: 'center',
		enabled: false,
		custom: function(tooltipModel) {
			// Tooltip Element
			var tooltipEl = document.getElementById('chartjs-tooltip');
			// Create element on first render
			if (!tooltipEl) {
				tooltipEl = document.createElement('div');
				tooltipEl.id = 'chartjs-tooltip';
				tooltipEl.innerHTML = '<table></table>';
				document.body.appendChild(tooltipEl);
			}
			// Hide if no tooltip
			if (tooltipModel.opacity === 0) {
				tooltipEl.style.opacity = 0;
				return;
			}

			// Set caret Position
			tooltipEl.classList.remove('above', 'below', 'no-transform');
			if (tooltipModel.yAlign) {
				tooltipEl.classList.add(tooltipModel.yAlign);
			} else {
				tooltipEl.classList.add('no-transform');
			}

			function getBody(bodyItem) {
				return bodyItem.lines;
			}

			// Set Text
			if (tooltipModel.body) {
				var titleLines = tooltipModel.title || [];
				var bodyLines = tooltipModel.body.map(getBody);

				var innerHtml = '<thead>';
				innerHtml += '</thead><tbody>';
				bodyLines.forEach(function(body, i) {
					var index = tooltipModel.dataPoints[0].index;
					innerHtml +='<tr><td><div style="background-image:url(./../img/tooltip-bg5.svg); background-repeat: no-repeat; background-size: contain; background-position: center;">';
					innerHtml += '<div style="padding: 10px  6px 15px; font-size: 12px; line-height: 14px; color: #ffffff;">' + cooperationDataCountPerc[index] +'% / ' + cooperationDataCount[index] + 'шт</div></td></tr></div>';
				});
				innerHtml += '</tbody>';
				var tableRoot = tooltipEl.querySelector('table');
				tableRoot.innerHTML = innerHtml;
			}

			// `this` will be the overall tooltip
			var position = this._chart.canvas.getBoundingClientRect();

			// Display, position, and set styles for font
			tooltipEl.style.opacity = 1;
			tooltipEl.style.position = 'absolute';
			console.log(position.left);
			console.log(window.pageXOffset);
			console.log(tooltipModel.caretX);
			console.log(tooltipModel.width);
			tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 48 + 'px';
			tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY  -  55 + 'px';
			tooltipEl.style.fontFamily = 'Arial';
			tooltipEl.style.fontSize = '12px';
			tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
			tooltipEl.style.padding = '10px ' +  '10px';
			tooltipEl.style.pointerEvents = 'none';
		}
	}
};
/**
 *   function create chart
 */
function generateCharts() {
	
	var chartTeam    = document.getElementById('teamChart').getContext('2d'),
	gradient = chartTeam.createLinearGradient(0, 0, 0, 450);

	gradient.addColorStop(0, '#E6EC00');
	gradient.addColorStop(0.3, 'rgba(189,218,28, 0.25)');
	gradient.addColorStop(0.4, 'rgba(178, 221, 106, 0)');

	
	//data for team chart
	var teamData  = {
		labels: teamDataLabels,
		datasets: [{
				label: 'Custom Label Name',
				backgroundColor: gradient,
				pointBackgroundColor: 'white',
				borderWidth: 1,
				borderColor: '#BDDA1C',
				data: teamDataRatings
		}]
	};

	chartInstanceTeam = new Chart(chartTeam, {
		type: 'ShadowLineGreen',
		data: teamData,
		responsive: true,
		plugins: [{
			afterDraw: chartTeam => {      
			  var ctx = chartTeam.chart.ctx; 
			  var yAxis = chartTeam.scales['y-axis-0'];
			  yAxis.ticks.forEach((data, index) => {  
				var y = yAxis.getPixelForTick(index);  
				var image = new Image();
				image.src = images[index];
				var imageline = new Image();
				imageline.src = './../img/line.svg';
				ctx.drawImage(image, 0,  y - 15);
				ctx.drawImage(imageline, 0,  y);
			  });      
			}
		}],
		options: optionsTeam
	});

	
	var chartLogistic    = document.getElementById('logisticsChart').getContext('2d'),
	gradient = chartLogistic.createLinearGradient(0, 0, 0, 450);

	gradient.addColorStop(0, 'rgba(0, 149, 197, 1)');
	gradient.addColorStop(0.3, 'rgba(0, 149, 197, 0.25)');
	gradient.addColorStop(0.4, 'rgba(0, 149, 197, 0)');

	
	//data for logistic chart
	var logisticData  = {
		labels: logisticDataLabels,
		datasets: [{
				label: 'Custom Label Name',
				backgroundColor: gradient,
				pointBackgroundColor: 'white',
				borderWidth: 1,
				borderColor: '#006B9F',
				data: logisticDataRatings
		}]
	};

	chartInstanceLogistic = new Chart(chartLogistic, {
		type: 'ShadowLineBlue',
		data: logisticData,
		responsive: true,
		plugins: [{
			afterDraw: chartLogistic => {      
			  var ctx = chartLogistic.chart.ctx; 
			  var yAxis = chartLogistic.scales['y-axis-0'];
			  yAxis.ticks.forEach((data, index) => {  
				var y = yAxis.getPixelForTick(index);  
				var image = new Image();
				image.src = images[index];
				var imageline = new Image();
				imageline.src = './../img/line.svg';
				ctx.drawImage(image, 0,  y - 15);
				ctx.drawImage(imageline, 0,  y);
			  });      
			}
		}],
		options: optionsLogistic
	});

	
	
	var chartSupport    = document.getElementById('supportChart').getContext('2d'),
	gradient = chartSupport.createLinearGradient(0, 0, 0, 450);

	gradient.addColorStop(0, 'rgba(116, 206, 158, 1)');
	gradient.addColorStop(0.2, 'rgba(116, 206, 158, 0.25)');
	gradient.addColorStop(0.35, 'rgba(116, 206, 158, 0)');

	
	//data for Support chart
	var supportData  = {
		labels: supportDataLabels,
		datasets: [{
				label: 'Custom Label Name',
				backgroundColor: gradient,
				pointBackgroundColor: 'white',
				borderWidth: 1,
				borderColor: '#00BBE4',
				data: supportDataRatings
		}]
	};

	chartInstanceSupport = new Chart(chartSupport, {
		type: 'ShadowLineLightBlue',
		data: supportData,
		responsive: true,
		plugins: [{
			afterDraw: chartSupport => {      
			  var ctx = chartSupport.chart.ctx; 
			  var yAxis = chartSupport.scales['y-axis-0'];
			  yAxis.ticks.forEach((data, index) => {  
				var y = yAxis.getPixelForTick(index);  
				var image = new Image();
				image.src = images[index];
				var imageline = new Image();
				imageline.src = './../img/line.svg';
				ctx.drawImage(image, 0,  y - 15);
				ctx.drawImage(imageline, 0,  y);
			  });      
			}
		}],
		options: optionsSupport
	});

		
	var chartDocument    = document.getElementById('documentChart').getContext('2d'),
	gradient = chartDocument.createLinearGradient(0, 0, 0, 450);

	gradient.addColorStop(0, 'rgba(106, 185, 56, 1)');
	gradient.addColorStop(0.3, 'rgba(106, 185, 56, 0.25)');
	gradient.addColorStop(0.4, 'rgba(106, 185, 56, 0)');

	
	//data for Document chart
	var documentData  = {
		labels: documentDataLabels,
		datasets: [{
				label: 'Custom Label Name',
				backgroundColor: gradient,
				pointBackgroundColor: 'white',
				borderWidth: 1,
				borderColor: '#009F3F',
				data: documentDataRatings
		}]
	};

	chartInstanceDocument = new Chart(chartDocument, {
		type: 'ShadowLineDarkGreen',
		data: documentData,
		responsive: true,
		plugins: [{
			afterDraw: chartDocument => {      
			  var ctx = chartDocument.chart.ctx; 
			  var yAxis = chartDocument.scales['y-axis-0'];
			  yAxis.ticks.forEach((data, index) => {  
				var y = yAxis.getPixelForTick(index);  
				var image = new Image();
				image.src = images[index];
				var imageline = new Image();
				imageline.src = './../img/line.svg';
				ctx.drawImage(image, 0,  y - 15);
				ctx.drawImage(imageline, 0,  y);
			  });      
			}
		}],
		options: optionsDocument
	});


			
	var chartCooperation    = document.getElementById('cooperationChart').getContext('2d'),
	gradient = chartCooperation.createLinearGradient(0, 0, 0, 450);
	gradient.addColorStop(0, '#006B9F');
	gradient.addColorStop(0.3, 'rgba(0, 107, 159, 0.25)');
	gradient.addColorStop(0.4, 'rgba(0, 107, 159, 0)');

	
	//data for cooperation chart
	var cooperationData  = {
		labels: cooperationDataLabels,
		datasets: [{
				label: 'Custom Label Name',
				backgroundColor: gradient,
				pointBackgroundColor: 'white',
				borderWidth: 1,
				borderColor: '#005E94',
				data: cooperationDataRatings
		}]
	};

	chartInstanceCooperation = new Chart(chartCooperation, {
		type: 'ShadowLineDarkBlue',
		data: cooperationData,
		responsive: true,
		plugins: [{
			afterDraw: chartCooperation => {      
			  var ctx = chartCooperation.chart.ctx; 
			  var yAxis = chartCooperation.scales['y-axis-0'];
			  yAxis.ticks.forEach((data, index) => {  
				var y = yAxis.getPixelForTick(index);  
				var image = new Image();
				image.src = images[index];
				var imageline = new Image();
				imageline.src = './../img/line.svg';
				ctx.drawImage(image, 0,  y - 15);
				ctx.drawImage(imageline, 0,  y);
			  });      
			}
		}],
		options: optionsCooperation
	});
}
/**
 *   function generate new charts
 */
function setNewPosition() {
    // kill old charts
    if(chartInstanceTeam){
        chartInstanceTeam.destroy();
	}
	if(chartInstanceLogistic){
        chartInstanceLogistic.destroy();
	}
	if(chartInstanceSupport){
        chartInstanceSupport.destroy();
	}
	if(chartInstanceDocument){
        chartInstanceDocument.destroy();
	}
	if(chartInstanceCooperation){
        chartInstanceCooperation.destroy();
    }
    var chartArr = [
        $('#teamChart'),
        $('#logisticsChart'),
        $('#supportsChart'),
        $('#documentsChart'),
        $('#cooperationsChart'),
    ];

    chartArr.forEach(function (item) {
        var id = $(item).attr('id');
        var parent = $(item).parent();
        $(item).remove();
        $(parent).append('<canvas id="' + id + '"><canvas>');
    });

    // set width and height
    setSize();
    // generate chart
    generateCharts();

    if(chartInstanceTeam){
        chartInstanceTeam.update();
	}
	if(chartInstanceLogistic){
        chartInstanceLogistic.update();
	}
	if(chartInstanceSupport){
        chartInstanceSupport.update();
	}
	if(chartInstanceDocument){
        chartInstanceDocument.update();
	}
	if(chartInstanceCooperation){
        chartInstanceCooperation.update();
    }
} // set new width and height for charts
function getmediaPeriod(w) {
    var mediaperiodsArr = [  // media array
        [1700, 2900],
        [1600, 1700],
        [1500, 1600],
        [1400, 1500],
        [1350, 1400],
        [1300, 1350],
        [1200, 1300],
        [1000, 1200],
        [767, 1000],
        [600, 767],
        [0, 600]
    ];

    for (var i = 0; i < mediaperiodsArr.length; i++) {
        if (w > mediaperiodsArr[i][0]) {
            return mediaperiodsArr[i];
            break;
        }
    } // return Media Period

}

/**
 *   function check id media period was chenget
 *   if period was changed set new width
 *   @param{Integer} width
 *   @param{Array} period
 */
function checkMedia(w, period) {

    if (w < period[0] || w > period[1]) {
        setNewPosition();
        realDW = w;
    }

} // check is media period changed
/**
 *   function set new width for canvas
 */


function setSize() {
	if ($(document).width() > 1800) {
        //line chart
        $('#teamChart').attr('width', 800);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 800);
		$('#logisticsChart').attr('height', 200);
		
		$('#supportChart').attr('width', 1200);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 1200);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 1200);
        $('#cooperationChart').attr('height', 200);

    }
    if ($(document).width() > 1700) {
        //line chart
        $('#teamChart').attr('width', 680);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 680);
        $('#logisticsChart').attr('height', 200);

		$('#supportChart').attr('width', 1200);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 1200);
		$('#documentChart').attr('height', 200);
				
		$('#cooperationChart').attr('width', 1200);
        $('#cooperationChart').attr('height', 200);
    }
    else if ($(document).width() > 1600) {
        $('#teamChart').attr('width', 700);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 700);
		$('#logisticsChart').attr('height', 200);
		
		
		$('#supportChart').attr('width', 1000);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 1000);
		$('#documentChart').attr('height', 200);
				
		$('#cooperationChart').attr('width', 1000);
        $('#cooperationChart').attr('height', 200);
    }
    else if ($(document).width() > 1500) {
        $('#teamChart').attr('width', 700);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 700);
		$('#logisticsChart').attr('height', 200);
		
		$('#supportChart').attr('width', 900);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 900);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 900);
        $('#cooperationChart').attr('height', 200);

    }
    else if ($(document).width() > 1400) {
        $('#teamChart').attr('width', 600);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 600);
		$('#logisticsChart').attr('height', 200);
		
		$('#supportChart').attr('width', 800);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 800);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 800);
        $('#cooperationChart').attr('height', 200);

    }
    else if ($(document).width() > 1350) {
        $('#teamChart').attr('width', 500);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 500);
		$('#logisticsChart').attr('height', 200);
		
		$('#supportChart').attr('width', 800);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 800);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 800);
        $('#cooperationChart').attr('height', 200);

    }
    else if ($(document).width() > 1300) {
        $('#teamChart').attr('width', 450);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 450);
		$('#logisticsChart').attr('height', 200);
		
		$('#supportChart').attr('width', 800);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 800);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 800);
        $('#cooperationChart').attr('height', 200);

    }
    else if ($(document).width() > 1200) {
        $('#teamChart').attr('width', 450);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 450);
		$('#logisticsChart').attr('height', 200);
		
		$('#supportChart').attr('width', 800);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 800);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 800);
        $('#cooperationChart').attr('height', 200);

    }
    else if ($(document).width() > 1000) {
        $('#teamChart').attr('width', 400);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 400);
		$('#logisticsChart').attr('height', 200);


		$('#supportChart').attr('width', 800);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 800);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 800);
        $('#cooperationChart').attr('height', 200);

	}
	else if ($(document).width() > 900) {
        $('#teamChart').attr('width', 300);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 300);
		$('#logisticsChart').attr('height', 200);
		
		$('#supportChart').attr('width', 800);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 800);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 800);
        $('#cooperationChart').attr('height', 200);

    }
    else if ($(document).width() > 767) {
        $('#teamChart').attr('width', 600);
		$('#teamChart').attr('height', 200);
		
		$('#logisticsChart').attr('width', 600);
		$('#logisticsChart').attr('height', 200);
		
				
		$('#supportChart').attr('width', 800);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 800);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 800);
        $('#cooperationChart').attr('height', 200);

    }
    else if ($(document).width() > 600) {
        $('#teamChart').attr('width', 400);
		$('#teamChart').attr('height', 150);
		
		$('#logisticsChart').attr('width', 400);
		$('#logisticsChart').attr('height', 150);
		
				
		$('#supportChart').attr('width', 800);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 500);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 800);
        $('#cooperationChart').attr('height', 200);

    }
    else {
        $('#teamChart').attr('width', 350);
		$('#teamChart').attr('height', 150);
		
		$('#logisticsChart').attr('width', 350);
		$('#logisticsChart').attr('height', 150);
		
				
		$('#supportChart').attr('width', 800);
		$('#supportChart').attr('height', 200);
		
		$('#documentChart').attr('width', 500);
		$('#documentChart').attr('height', 200);
		
		$('#cooperationChart').attr('width', 800);
        $('#cooperationChart').attr('height', 200);
    }

} // add media sizes
