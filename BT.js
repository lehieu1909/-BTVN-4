// Câu 1: Cho array sau arr1 = [1,2,3,5]. Hãy duplicate array cho bên trên bằng ít nhất 2 cách; trong đó có 1 cách dùng Spread Operator.

// let array = [1,2,3,5];
// let array1 = [];
// for (let i = 0; i < array.length; i++) {     
//     array1.push(array[i]);
// }
// let array2 = [... arr];
// console.log(array1);
// console.log(array2);

// Câu 2: Cho 2 array như sau: arrA = [“Hello”, “ Xin chào”]; arrB = [“Bonjour”, “Olá”]. Hãy tạo ra một array mới có tên là waysToSayHello, trong array này sẽ chứa toàn bộ các phần tử của arrA và arrB. Làm bằng 2 cách; trong đó có 1 cách sử dụng Spread Operator.

// let arrayA = ['Hello', 'Xin chào'];
// let arrayB = ['Bonjour', 'Olá'];
// let waysToSayHello = [];

// for (let i = 0; i < 2; i++) {
    //     waysToSayHello.push(arrA[i],arrB[i]);
    // }

// let waysToSayHello1 = [...arrA, ...arrB];
// console.log(waysToSayHello);
// console.log(waysToSayHello1);

// Câu 3: Cho arrX = [0,1,2,3,4,5,6,7,8]. 
// Hãy tạo ra arrSquare, chứa các giá trị của phần tử trong arrX đã được bình phương. 
// Hãy tạo ra arrOdds chứa các phần tử là số lẻ nằm trong arrX.

// let arrayX = [0,1,2,3,4,5,6,7,8];

// let arraySquare = arrayX;

// let arrayOdds = arrayX;

// console.log(arraySquare);
// console.log(arrayOdds);

// Câu 4: Viết một hàm filterRange(arr, a, b), với arr là 1 mảng có > 4 phần tử; 0<= a,b < arr.length. Tìm kiếm giá trị các phần tử nằm giữa arr[a] và arr[b]. Chú ý, mảng cũ phải không bị thay đổi. VD: arr= [1,5,4,6], a= 0, b = 2; => filteredArr = [1,5].

// function filterRange(arr, a, b) {
//     let filterArray = [];

// }

// console.log(filterArray);

// Câu 5: Tương tự bài 4, tuy nhiên sau khi chạy hàm filterRange(arr, a,b) sẽ hiển thị ra giá trị phần tử > a và < b. VD: filteredArr = [1]. 
// Phải tạo ra mảng mới, mảng cũ không thay đổi.
// Không tạo ra mảng mới, mảng cũ bị thay đổi.

// Câu 6:
// Cau a: nhap tuoi va in ra name cua nhung ai co so tuoi da nhap
// cau b: Nhap so thich, và in ra toàn bộ sở thích và name của những ai có chứa sở thích đó.
// Câu c: Lọc ra những ai có sở thich là study và in ra nó.
// Cau d: thay doi toan bo nhung ai co tuoi == 11 thành 15. (sử dụng map.

// let student = [
// 	{
// 		name: "Duong",
// 		age: 11,
// 		hobbies: ["video game", "sleep", "learn"]
// 	},
// 	{
// 		name: "Dong",
// 		age: 12,
// 		hobbies: ["video game", "sick", "study"]
// 	},
// 	{
// 		name: "Minh",
// 		age: 13,
// 		hobbies: ["video game", "sick", "learn"]
// 	},
// 	{
// 		name: "Thanh",
// 		age: 9,
// 		hobbies: ["play game", "sleep", "learn"]
// 	},
// 	{
// 		name: "Hung",
// 		age: 11,
// 		hobbies: ["play game", "sick", "study"]
// 	}
// ]