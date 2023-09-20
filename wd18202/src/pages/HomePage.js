const HomePage = () => `<div>Home Page</div>`;
export default HomePage;

// export default function Sum(a, b) {
//   return a + b;
// }

// const Sum2 = (a, b) => {
//   return a + b;
// };
// export default Sum2;

/**
 * 1. Tính năng module hoá chỉ hoạt động với file js có type="module"
 * 2. Export default chỉ hoạt động với naming function và biến, không thể viết cùng 1 dòng lệnh với arrow function
 * 3. Export default chỉ export được 1 biến duy nhất trong 1 file js
 * 4. Export default thì khi import có thể tuỳ ý đổi tên.
 * 5. Export và import nêú không phải mặc định thì tham số truyền vào phải sử dụng "{ }"
 * 6. Khi sử dụng export thường thì có thể đổi tên bằng cú pháp: import { tên_cũ as tên_mới } from "./xxx/yyy.js"
 *
 */
