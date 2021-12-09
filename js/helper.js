/**
 *
 * @param {String} pId
 * @returns
 * Bu fonksiyon, kendisine parametre olarak gonderilen id'ye gore ilgili Html elementini geri dondurur.
 */
function getElementById(pId) {
    return document.getElementById(pId);
}

/**
 *
 * @param {Number} pLength
 * @returns
 * Bu fonksiyon, 0 ile kendisine parametre olarak gonderilen deger arasinda random bir sayi dondurur.
 */
function getRandomNumber(pLength) {
    return Math.floor(Math.random() * pLength);
}
