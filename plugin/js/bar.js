
$(document).ready(function() {

	var bar = $("#barchart");

	var info = {
		labels : ["January", "Febuary", "March"],
		datasets : [
					{
						label : "Abou",
						data : [18.990, 30, 15],
						backgroundColor : [
							"rgba(10, 20, 30, 0.3",
							"rgba(10, 20, 30, 0.3",
							"rgba(10, 20, 30, 0.3",
						],
						borderColor : [
							"rgba(10, 20, 30, 1",
							"rgba(10, 20, 30, 1",
							"rgba(10, 20, 30, 1",
						],
						borderWidth : 1
					},
					{
						label : "Edna",
						data : [50, 70, 45],
						backgroundColor : [
							"rgba(50, 150, 250, 0.3",
							"rgba(50, 150, 250, 0.3",
							"rgba(50, 150, 250, 0.3",
						],
						borderColor : [
							"rgba(50, 150, 250, 1",
							"rgba(50, 150, 250, 1",
							"rgba(50, 150, 250, 1",
						],
						borderWidth : 1
					}
				]
	};

	var details = {
		title : {
			display : true,
			position : "top",
			text : " Top Sales",
			fontsize : 80,
			fontcolor : "#333"     
		},
		legend : {
			display : true,
			position : "bottom",
		},
		scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}]
		}
	};

	var chart = new Chart( bar, {
		type : "bar",
		data : info,
		options : details,
	});

});
