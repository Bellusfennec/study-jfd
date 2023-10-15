let win = null;
for (let i = 1016; i <= 1937; i++) {
  if (!(i % 3 === 0)) continue;
  if (!(i % 7 === 0)) continue;
  if (i % 5 === 0) continue;
  if (i % 2 === 0) continue;
  win = i;
}
console.log(win);
