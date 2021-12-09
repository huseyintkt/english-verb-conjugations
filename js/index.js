let verbsContainer = getElementById('verbs-container');

/**
 * Tum fiilleri render eder.
 */
verbsContainer.innerHTML = verbList
    .map((verb) => {
        return `
    <tr>
        <th>${verb.verb1Name}</th>
        <td>${verb.verb2Name}</td>
        <td>${verb.verb3Name}</td>
        <td>${verb.verb1Pronunciation}</td>
        <td>${verb.verb2Pronunciation}</td>
        <td>${verb.verb3Pronunciation}</td>
        <td>${verb.verbTurkish}</td>
    </tr>
    `;
    })
    .join('');
