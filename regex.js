// let reg = /boat|ship/;
//
// console.log(''.match(reg));
//
// /smitty|james|ar+/
//
// /[a-z0-9\s]+/i
// /[\w\s]+/i
//
// 'sara@example.com'.match(/^\w+@\w+\.(com|net|org|edu)$/i);
//
// /\b(ok(ay)?|sure|y(es)?)\b/i
//
//
// /[a-z\s,]+/i
// /^[^\d]+$/
//
// /\D{20,40}$/

let mmm = `1 Reindeer Lane, North Pole, AK 99705`.match(/^(\d+\s[\w\s]+(?:street|lane)),\s([\w\s]+),\s(\w{2})\s(\d{5})$/i);
// let mmm = `1 Reindeer Lane, North Pole, AK 99705`.match(/^(\d+\s[\w\s]+\w{4,6}),\s([\w\s]+),\s(\w{2})\s(\d{5})$/i);
console.log(mmm);


let matched = `King penguin
Emperor penguin
Wandering albatross
Arctic Tern
Narwhal
Rockhopper Penguin
Weddell seal`.match(/^\w+\spenguin|albatross|tern$/mig);

console.log(matched);