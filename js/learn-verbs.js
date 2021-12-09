let verbContainer = getElementById('verb-container');
let btnNewVerb = getElementById('new-verb');
let randomNumber = getRandomNumber(verbList.length);

verbContainer.innerHTML = getNewVerb(randomNumber);

btnNewVerb.addEventListener('click', function () {
    let randomNumber = getRandomNumber(verbList.length);
    verbContainer.innerHTML = getNewVerb(randomNumber);
});

/**
 *
 * @param {Number} pRandomNumber
 * @returns
 * Bu fonksiyon, kendisine parametre olarak gonderilen index numarasina gore fiili render eder.
 */
function getNewVerb(pRandomNumber) {
    return `
        <tr>
            <td class="bg-primary text-white">Verb</td>
            <td>${verbList[pRandomNumber].verb1Name}</td>
            <td>${verbList[pRandomNumber].verb2Name}</td>
            <td>${verbList[pRandomNumber].verb3Name}</td>
        </tr>
        <tr>
            <td class="bg-primary text-white">Pron.</td>
            <td>${verbList[pRandomNumber].verb1Pronunciation}</td>
            <td>${verbList[pRandomNumber].verb2Pronunciation}</td>
            <td>${verbList[pRandomNumber].verb3Pronunciation}</td>
        </tr>
        <tr>
            <td class="bg-primary text-white">Turkish</td>
            <td colspan="3">${verbList[pRandomNumber].verbTurkish}</td>
        </tr>
    `;
}
