const etl = {
    easy: '1',
    to: '2',
    learn: '3',
    a:'s'
};
const toArray = Object.entries(etl);
toArray.forEach(([key, value]) => {
    console.log('Key %s memiliki value %s', key, value);
});
console.log("\n\nObject etl memiliki key sebanyak %d", toArray.length);
