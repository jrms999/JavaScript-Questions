(function() {

	angular
		.module("cssSelectorQuiz", ['ngRoute']);

})();

(function() {

	angular
		.module("cssSelectorQuiz")
		.controller("listCtrl", ListController);

		function ListController() {
			//view model
			var vm = this;
			
			vm.data = selectors;
			vm.activeSelector = {};
			vm.changeActiveSelector = changeActiveSelector;
			vm.activeOption = {};
			vm.changeActiveOption = changeActiveOption;

			function changeActiveSelector(index) {
				vm.activeSelector = index;
			}
			function changeActiveOption(index) {
				vm.activeOption = index;

			}
		}

		var selectors = [
			{
				selector: "1",
				option1: {
					"answer": "header .nav #socialIcons",
					"isCorrect": false
				},
				option2: {
					"answer": "header #socialIcons",
					"isCorrect": true
				},
				option3: {
					"answer": "header div.socialIcons",
					"isCorrect": false
				},
				option4: {
					"answer": "header#socialIcons",
					"isCorrect": false
				},
        image: "http://res.cloudinary.com/irrelevantevan/image/upload/v1504748842/CSS%20Selectors/A.jpg"
			},
			{
				selector: "2",
				option1: {
					"answer": "header .nav #links li",
					"isCorrect": false
				},
				option2: {
					"answer": ".header .nav #links li:nth-child(2)",
					"isCorrect": false
				},
				option3: {
					"answer": "header .nav #links li:nth-child(2)",
					"isCorrect": true
				},
				option4: {
					"answer": "header .nav #links li:second-child",
					"isCorrect": false
				},
        image: "http://res.cloudinary.com/irrelevantevan/image/upload/v1504748842/CSS%20Selectors/B.jpg"
			},
			{
				selector: "3",
				option1: {
					"answer": "header nav #branding a",
					"isCorrect": false
				},
				option2: {
					"answer": "header .nav branding img",
					"isCorrect": false
				},
				option3: {
					"answer": "header .nav #branding #about",
					"isCorrect": false
				},
				option4: {
					"answer": "header .nav #branding a",
					"isCorrect": true
				},
        image: "http://res.cloudinary.com/irrelevantevan/image/upload/v1504748842/CSS%20Selectors/C.jpg"
			},
			{
				selector: "4",
				option1: {
					"answer": "header #main",
					"isCorrect": false
				},
				option2: {
					"answer": "header .main",
					"isCorrect": false
				},
				option3: {
					"answer": "header main",
					"isCorrect": true
				},
				option4: {
					"answer": "header div.main",
					"isCorrect": false
				},
        image: "http://res.cloudinary.com/irrelevantevan/image/upload/v1504748842/CSS%20Selectors/D.jpg"
			},
			{
				selector: "5",
				option1: {
					"answer": "header main button span",
					"isCorrect": true
				},
				option2: {
					"answer": "header main button",
					"isCorrect": false
				},
				option3: {
					"answer": "header > button span",
					"isCorrect": false
				},
				option4: {
					"answer": "header main > span",
					"isCorrect": false
				},
        image: "http://res.cloudinary.com/irrelevantevan/image/upload/v1504748842/CSS%20Selectors/E.jpg"
			},
			{
				selector: "6",
				option1: {
					"answer": "header .nav #branding a.img",
					"isCorrect": false
				},
				option2: {
					"answer": "header nav #branding a img",
					"isCorrect": false
				},
				option3: {
					"answer": "header > .nav > #branding > img",
					"isCorrect": false
				},
				option4: {
					"answer": "header > .nav > #branding > a > img",
					"isCorrect": true
				},
        image: "http://res.cloudinary.com/irrelevantevan/image/upload/v1504748842/CSS%20Selectors/F.jpg"
			},
			{
				selector: "7",
				option1: {
					"answer": "header .nav #links > li:nth-child(1) a",
					"isCorrect": false
				},
				option2: {
					"answer": "header .nav #links ul > li a",
					"isCorrect": false
				},
				option3: {
					"answer": "header .nav #links ul li:first-child a",
					"isCorrect": true
				},
				option4: {
					"answer": "header nav #links ul li:nth-child(1)",
					"isCorrect": false
				},
        image: "http://res.cloudinary.com/irrelevantevan/image/upload/v1504748842/CSS%20Selectors/G.jpg"
			},
			{
				selector: "8",
				option1: {
					"answer": "header .nav #socialIcons ul li i:nth-child(4)",
					"isCorrect": false
				},
				option2: {
					"answer": "header .nav #socialIcons ul li i.github",
					"isCorrect": false
				},
				option3: {
					"answer": "header .nav #socialIcons ul li i.fa",
					"isCorrect": false
				},
				option4: {
					"answer": "header .nav #socialIcons ul li i.fa-github",
					"isCorrect": true
				},
        image: "http://res.cloudinary.com/irrelevantevan/image/upload/v1504748842/CSS%20Selectors/H.jpg"
			},
			{
				selector: "9",
				option1: {
					"answer": "header > div#socialIcons",
					"isCorrect": false
				},
				option2: {
					"answer": "header .nav div#socialIcons",
					"isCorrect": true
				},
				option3: {
					"answer": "header .nav main#socialIcons",
					"isCorrect": false
				},
				option4: {
					"answer": "header nav #socialIcons",
					"isCorrect": false
				},
        image: "http://res.cloudinary.com/irrelevantevan/image/upload/v1504748842/CSS%20Selectors/A.jpg"
			},
			{
				selector: "10",
				option1: {
					"answer": "header socialIcons",
					"isCorrect": false
				},
				option2: {
					"answer": "header .socialIcons",
					"isCorrect": false
				},
				option3: {
					"answer": "header #socialIcons",
					"isCorrect": true
				},
				option4: {
					"answer": "header div.socialIcons",
					"isCorrect": false
				},
        image: "http://res.cloudinary.com/irrelevantevan/image/upload/v1504748842/CSS%20Selectors/A.jpg"
			}
		];

})();