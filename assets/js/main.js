jQuery(document).ready(function($) {
	

	function DemoProgressbars(){
	 // Demo 1

		$('#demoprogressbar1').LineProgressbar({
			percentage: 95
		});
		$('#demoprogressbar2').LineProgressbar({
			percentage: 74
		});
		$('#demoprogressbar3').LineProgressbar({
			percentage: 65
		});
		$('#demoprogressbar4').LineProgressbar({
			percentage: 25
		});



	 // Demo 2
		$('#demoprogressbar5').LineProgressbar({
			percentage: 49,
			fillBackgroundColor: '#1abc9c'
		});
		$('#demoprogressbar6').LineProgressbar({
			percentage: 36,
			fillBackgroundColor: '#9b59b6'
		});
		$('#demoprogressbar7').LineProgressbar({
			percentage: 85,
			fillBackgroundColor: '#e67e22'
		});
		$('#demoprogressbar8').LineProgressbar({
			percentage: 46,
			fillBackgroundColor: '#f1c40f'
		});


	 // Demo 3

		$('#demoprogressbar9').LineProgressbar({
			percentage: 25,
			fillBackgroundColor: '#1abc9c',
			height: '20px'
		});
		$('#demoprogressbar10').LineProgressbar({
			percentage: 20,
			fillBackgroundColor: '#9b59b6',
			height: '25px'
		});
		$('#demoprogressbar11').LineProgressbar({
			percentage: 91,
			fillBackgroundColor: '#e67e22',
			height: '35px'
		});
		$('#demoprogressbar12').LineProgressbar({
			percentage: 36,
			fillBackgroundColor: '#f1c40f',
			height: '50px'
		});

	 // Demo 4

		$('#demoprogressbar13').LineProgressbar({
			percentage: 25,
			fillBackgroundColor: '#1abc9c',
			height: '25px',
			radius: '0px'
		});
		$('#demoprogressbar14').LineProgressbar({
			percentage: 85,
			fillBackgroundColor: '#9b59b6',
			height: '25px',
			radius: '15px'
		});
		$('#demoprogressbar15').LineProgressbar({
			percentage: 72,
			fillBackgroundColor: '#e67e22',
			height: '53px',
			radius: '50px'
		});
		$('#demoprogressbar16').LineProgressbar({
			percentage: 98,
			fillBackgroundColor: '#f1c40f',
			height: '65px',
			radius: '50px'
		});

		// Demo 5
		$('#demoprogressbar17').LineProgressbar({
			percentage: 45,
			unit: 'km/h'
		});
		$('#demoprogressbar18').LineProgressbar({
			percentage: 85,
			unit: 'm/s'
		});

		//Demo 6
		$('#demoprogressbar19').LineProgressbar({
			percentage: 45,
			animation: true
		});

		$('#demoprogressbar20').LineProgressbar({
			percentage: 85,
			animation: false
		});
	}


	$('.progressbar-start').waypoint(function(){
		DemoProgressbars();
	},{
		offset: '25%',
		triggerOnce: true 
	}); // waypoint
	
	DemoProgressbars();
	hljs.initHighlightingOnLoad();

});
