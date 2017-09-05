
$(function() {

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	var collectCrystals = randomNumber(19, 100);
	$('#computer-crystals').text(collectCrystals);

	var score = 0;
	var wins = 0;
	var losses = 0;

	var gemstone = {
		amber: {
			name: "Amber",
			value: 0
		},
		diamond: {
			name: "Diamond",
			value: 0
		},
		emerald: {
			name: "Emerald",
			value: 0
		},
		sapphire: {
			name: "Sapphire",
			value: 0
		}
	};

	var countCrystal = function(gemstone) {
		score = score + gemstone.value;
	};

	$('#amber').click(function() {
		score++;
		return $('#score').text(randomNumber(1, 12));
	});

	$('#diamond').click(function() {
		score++;
		$('#score').text(randomNumber(1, 12));
	});

	$('#emerald').click(function() {
		score++;
		$('#score').text(randomNumber(1, 12));
	});

	$('#sapphire').click(function() {
		score++;
		$('#score').text(randomNumber(1, 12));
	});

	$("#startover").click(function() {
		score = 0;
		$("#score").text(score);
	});

	$("#startover").click(function() {
		collectCrystals = randomNumber(19, 100);
		$('#computer-crystals').text(collectCrystals);
	});

});