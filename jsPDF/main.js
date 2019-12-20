// console.log('test');
// var doc = new jsPDF();
// console.log(doc);
// let asd= "123";
// // I know the proper spelling is colour ;)
// doc.setTextColor(100)
// doc.text(20, 20, 'This is gray.')

// doc.setTextColor(0)
// doc.text(`1\)${asd} lorem ipsum lorem ipsum lorem ipsum lorem 
// A) ipsum lorem ipsum lorem ipsum 
// B) lorem ipsum lorem ipsum lorem ipsum lorem 

// 2) ipsum lorem ipsum 
// A) lorem ipsum
// B) lorem ipsum`, 20, 30)

// doc.setTextColor(255, 0, 0)
// //doc.text(20, 40, 'This is red.')

// doc.setTextColor(0, 255, 0)
// //doc.text(20, 50, 'This is green.')

// doc.setTextColor(0, 0, 255)
// //doc.text(20, 60, 'This is blue.')

// let arr = [
// 	{
//   	question: 'Question 1',
//     answers: [
//         {
//             name: 'ans1',
//             isRight: false
//         },
//         {
//             name: 'ans2',
//             isRight: true
//         },
//         {
//             name: 'ans3',
//             isRight: false
//         }
//     ]
// 	},
// 	{
//   	question: 'Question 2',
//     answers: [
//         {
//             name: 'ans1',
//             isRight: true
//         },
//         {
//             name: 'ans2',
//             isRight: false
//         },
//         {
//             name: 'ans3',
//             isRight: false
//         }
//     ]
// 	},
// 	{
//   	question: 'Question 3',
//     answers: [
//         {
//             name: 'ans1',
//             isRight: false
//         },
//         {
//             name: 'ans2',
//             isRight: false
//         },
//         {
//             name: 'ans3',
//             isRight: true
//         }
//     ]
// 	}
// ];

// // arr.forEach((a,i) =>{
// // 	console.log(a);
// // 	console.log(a.answers);
// // 	document.write(`${i+1}) ${a.question}<br/>`);
// // 		a.answers.forEach((ans, ind) => {
// // 			document.write(`${ind+1}) ${ans.name}<br/>`);
// // 		});
// // })



// 2480 pixels x 3508 pixels

let html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		h1 {
			text-align: center;
		}

		div {
			margin-bottom: 30px;
		}

		div > .q {
			font-weight: bold;
		}
	</style>
</head>
<body>

<h1>Lorem ipsum dolor sit amet.</h1>
<h1>num 5</h1>

<div class="block">
	<p class="q">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam labore eos illum. Tempore praesentium omnis esse tempora asperiores dolorum consequatur!</p>

	<p class="a">A) lorem</p>
	<p class="a">B) lorem</p>
	<p class="a">C) lorem</p>
</div>

<div class="block">
	<p class="q">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam labore eos illum. Tempore praesentium omnis esse tempora asperiores dolorum consequatur!</p>

	<p class="a">A) lorem</p>
	<p class="a">B) lorem</p>
	<p class="a">C) lorem</p>
</div>

<div class="block">
	<p class="q">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam labore eos illum. Tempore praesentium omnis esse tempora asperiores dolorum consequatur!</p>

	<p class="a">A) lorem</p>
	<p class="a">B) lorem</p>
	<p class="a">C) lorem</p>
</div>

<div class="block">
	<p class="q">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam labore eos illum. Tempore praesentium omnis esse tempora asperiores dolorum consequatur!</p>

	<p class="a">A) lorem</p>
	<p class="a">B) lorem</p>
	<p class="a">C) lorem</p>
</div>

</body>
</html>
`;






var doc = new jsPDF();   

doc.fromHTML(html, 4, 4, {}, d => {
	console.log(d)
	// doc.save();
});

// doc.save();
