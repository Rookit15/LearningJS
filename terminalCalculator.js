function main() {
    const prompt = require('prompt-sync')({ sigint: true });
    numbers = []
    while (true) {
        console.log('What you want to do')
        console.log('1) add numbers\n2) subtract numbers\n3) multiply numbers\n4) divide numbers')
        let number = prompt('Give number: ');
        number = Number(number);

    }
}

main();
// IN PROGRESS