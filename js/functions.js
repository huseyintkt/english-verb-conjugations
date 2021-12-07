function getElementById(pId) {
    return document.getElementById(pId);
}

function getRandomNumber(pLength) {
    return Math.floor(Math.random() * pLength);
}

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
