// Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

// 1. Uložte všechny údaje do vhodně pojmenovaných proměnných.
// 2. Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
// <address>
//   <p>Pod Stájemi 67</p>
//   <p>12754 Klysnov</p>
// </address>
// 3. Pomocí document.body.innerHTML vložte sestavené HTML do stránky.

const street = prompt("Zadej ulici:");
const houseNumber = prompt("Zadej číslo domu:");
const city = prompt("Zadej město:");
const zipCode = prompt("Zadej PSČ:");

document.body.innerHTML = `
    <address>
        <p>${street} ${houseNumber}</p>
        <p>${zipCode} ${city}
    </address>
`;