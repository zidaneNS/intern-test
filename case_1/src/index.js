const fruits = [
    {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10
    },
    {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20
    },
    {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50
    },
    {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100
    },
    {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
    },
    {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20
    },
    {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150
    }
    ];

const namaBuah = [...new Set(fruits.map(fruit => fruit.fruitName.toLowerCase()))];
const tipeBuah = [...new Set(fruits.map(fruit => fruit.fruitType))];

function main() {
    console.log('1. Buah yang dimiliki andi adalah', namaBuah.join(','));

    console.log('2. & 3. Jumlah wadah yang diperoleh adalah ', tipeBuah.length);
    console.log('dengan macam buahnya masing" adalah: ');
    tipeBuah.forEach(tipe => {
        const buahSesuaiTipe = [...new Set(fruits.filter(fruit => fruit.fruitType === tipe).map(item => {
            return {
                ...item,
                fruitName: item.fruitName.toLowerCase()
            }
        }))];

        const namaBuahSesuaiTipe = [...new Set(buahSesuaiTipe.map(buah => buah.fruitName.toLocaleLowerCase()))];
        const jumlahStockSesuaiTipe = fruits.filter(fruit => fruit.fruitType === tipe).reduce((total, fruit) => total + fruit.stock, 0);

        console.log(`${tipe} : ${namaBuahSesuaiTipe}`);
        console.log(`Jumlah stock buah ${tipe} adalah ${jumlahStockSesuaiTipe}`);
    });

    console.log('4. soal yang diberikan cocok untuk digunakan sebagai test pemahaman terkait pemrograman javascript terutama dalam penggunaan built-in functionnya');
}

main();