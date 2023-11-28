// import modules: use {} when they don't import by default.
// (e.g : export defalut a,  they are not import by defalut export{b,c,d} ).
import a1, {b,c,d} from './module2.mjs'
console.log(a1);
console.log(b);
console.log(c);
console.log(d);