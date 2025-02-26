// Quiz 1. 배열 분할 및 결합하기

function splitAndCombine(arr) {
  let arr1 = arr.slice(0,4);
  let arr2 = arr.slice(4,8);
  return arr2.concat(arr1);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

// 출력 결과 :
// [4,5,6,7,0,1,2,3]

// Quiz 2. 클릭 이벤트 로그 처리하기

function printClickEventLogs(logs) {
    // 여기에 코드를 작성하세요 ...
    logs.forEach((el) => {
      if(el.type === "click") {
        console.log(`${el.type} :: ${new Date(el.date).toLocaleString()}`);
      }
    });
  }
  
  printClickEventLogs([
    {
      type: "click",
      date: "2023-01-01T12:00:00Z",
    },
    {
      type: "hover",
      date: "2023-01-01T12:10:00Z",
    },
    {
      type: "scroll",
      date: "2023-01-01T12:15:00Z",
    },
    {
      type: "click",
      date: "2023-01-01T12:20:00Z",
    },
  ]);
  
  // 출력 결과
  // click :: 2023. 1. 1. 오후 9:00:00
  // click :: 2023. 1. 1. 오후 9:20:00

  // Quiz 3. 카페 할인 이벤트

  function getDiscountedMenus(menus) {
    // 여기에 코드를 작성하세요 ...
    // menus.forEach((el) => {
    //   el.discountedPrice = el.price-500;
    //   console.log(el);
    // });
    return menus.map((el) => ({
      ...el,
      discountedPrices: el.price-500,
    }));
  }
  
  const discountedMenus = getDiscountedMenus([
    { itemId: 1, name: "아메리카노", price: 3000 },
    { itemId: 2, name: "라떼", price: 3500 },
    { itemId: 3, name: "초콜릿 케이크", price: 5000 },
    { itemId: 4, name: "크로와상", price: 2800 },
  ]);

  console.log(discountedMenus);
  // 출력 결과 :
  // { itemId: 1, name: '아메리카노', price: 3000, discountedPrice: 2500 },
  // { itemId: 2, name: '라떼', price: 3500, discountedPrice: 3000 },
  // { itemId: 3, name: '초콜릿 케이크', price: 5000, discountedPrice: 4500 },
  // { itemId: 4, name: '크로와상', price: 2800, discountedPrice: 2300 }

  // Quiz 4. 도서 정리하기

  function getSortedBooks(books) {
    // 여기에 코드를 작성하세요 ...
    return books.toSorted((a, b) => {
      const time1 = a.published.getTime();
      const time2 = b.published.getTime();
      return time2-time1;
    });
  }
  
  const sortedBooks = getSortedBooks([
    {
      title: "한입 리액트",
      published: new Date("2023. 04. 06"),
    },
    {
      title: "웹 프론트엔드 첫 걸음",
      published: new Date("2024. 04. 30"),
    },
    {
      title: "이펙티브 타입스크립트",
      published: new Date("2021. 06. 27"),
    },
    {
      title: "클린코드",
      published: new Date("2013. 12. 24"),
    },
  ]);
  
  console.log(sortedBooks);
  // 출력 결과 :
  // { title: '웹 프론트엔드 첫 걸음', published: 2024-04-29T15:00:00.000Z},
  // { title: '한입 리액트', published: 2023-04-05T15:00:00.000Z },
  // { title: '이펙티브 타입스크립트', published: 2021-06-26T15:00:00.000Z},
  // { title: '클린코드', published: 2013-12-23T15:00:00.000Z }