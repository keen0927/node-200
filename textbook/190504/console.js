const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value'
        }
    }
};
console.time('ㅓㅓㄴ체 시간')
console.error('d에러메세지')
console.dir(obj, {colors: true, depth: 1});
function b() {
    console.trace('에러 위치 추적')
}
b();