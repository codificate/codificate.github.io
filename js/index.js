'use strict';

window.chartColors = {
	red: 'rgb(233, 100, 70)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

(function(global) {
	var COLORS = [
		'#4dc9f6',
		'#f67019',
		'#f53794',
		'#537bc4',
		'#acc236',
		'#166a8f',
		'#00a950',
		'#58595b',
		'#8549ba'
	];

  var Samples = global.Samples || (global.Samples = {});
  var Color = global.Color;

	Samples.utils = {

		color: function(index) {
			return COLORS[index % COLORS.length];
		},

		transparentize: function(color, opacity) {
			var alpha = opacity === undefined ? 0.5 : 1 - opacity;
			return Color(color).alpha(alpha).rgbString();
		}
	};

}(this));

var ctx = document.querySelectorAll('#myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
			/*, 'MVP', 'MVVM', 'Rx.Java', 'Coroutines', 'Mockito', 'jUnit', 'Room'*/
        labels: ['Java', 'Kotlin'],
        datasets: [{
            label: 'Mobile',
            data: [4, 1.5],//, 2, 0.7, 1.5, 0.5, 1, 1, 0.7
            backgroundColor:[
              'rgba(247, 245, 243, 1)',
              'rgba(222, 222, 224, 1)',
              /*'rgba(191, 189, 185, 1)',
              'rgba(198, 188, 177, 1)',
              'rgba(53, 53, 60, 1)',
              'rgba(230, 226, 227, 1)',
              'rgba(53, 59, 70, 1)',
							'rgba(199, 199, 195, 1)',
							'rgba(86, 90, 100, 1)'*/
            ]
        }]
    },
    options: {
    		title: {
    			display: true,
    			text: 'Android'
    		},
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.labels[tooltipItem.index] || '';

                    if (label) {
                        label += ': ';
                    }

                    var duration = data.datasets[0].data[tooltipItem.index];
                    var duration_unit = (duration >= 1) ? " year" : " month";
                    duration_unit += (duration > 1) ? "s" : "";

                    label += data.datasets[0].data[tooltipItem.index] + duration_unit;
                    return label;
                }
            }
        }
    }
});

var randomScalingFactor = function() {
	return Math.round(Math.random() * 100);
};

var color = Chart.helpers.color;

var config = {
	type: 'radar',
	data: {
		labels: [['Spring boot', 'NodeJs'],
		['Mysql', 'Postgres'],
		['Github','Gitlab'],
		['React', 'jquery'],
		['Agile', 'Scrum'],
		['Docker'],
		['HTML5', 'Css']],
		datasets: [{
			label: "",
			backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
			borderColor: window.chartColors.red,
			pointBackgroundColor: window.chartColors.red,
			data: [
				80,
				75,
				65,
				60,
				75,
				40,
				50
			]
		}]
	},
	options: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Web'
		},
		scale: {
			ticks: {
				beginAtZero: true
			}
		},
		tooltips: {
				callbacks: {
						label: function(tooltipItem, data) {
								var label = data.datasets[0].data[tooltipItem.index] + "% trust.";
								return label;
						}
				}
		}
	}
};

window.onload = function() {
	window.myRadar = new Chart(document.querySelectorAll('#canvas'), config);
};

var android_libs = true;
function showAndroidDetail(){
	android_libs = !android_libs;
	$("#android_libraries").toggleClass( "android_libraries", android_libs );
	if (!android_libs) {
		$("#android_read_more").html("Close");
	} else {
		$("#android_read_more").html("Read More");
	}
}
