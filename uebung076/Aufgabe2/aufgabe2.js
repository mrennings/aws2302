const zahlen = process.argv.slice(2);

if (zahlen.length === 3) {
    console.log(`Größte Zahl: ${Math.max(...zahlen)}`);
    console.log(`Kleinste Zahl: ${Math.min(...zahlen)}`);
} else {
    console.error("Bitte genau drei Zahlen angeben!")
}