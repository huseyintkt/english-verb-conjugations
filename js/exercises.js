/**
 * Containers
 */
const allVerbsContainer = getElementById('all-verb-container');
const verbContainer = getElementById('verb-container');

/**
 * Tum fiiller render edilir.
 */
allVerbsContainer.innerHTML = verbList
    .map((verb, index) => {
        return `
        <div class="col-lg-2 mb-3">
           <a onClick='getVerb(${index})' href='#'>${verb.verb1Name}</a>
        </div>
    `;
    })
    .join('');

/**
 * Bu fonksiyon, random veya index numarasina gore fiili render eder.
 */
function getVerb(pVerbIndex) {
    let index;
    if (pVerbIndex === undefined) {
        index = getRandomNumber(verbList.length);
    } else {
        index = pVerbIndex;
    }

    let verb = verbList[index];
    verbContainer.innerHTML = `
        <div class="d-flex justify-content-between mb-3">
            <h5 id="verb-turkish">${verb.verbTurkish}</h5>
            <button
                class="btn btn-primary"
                onclick="getVerb()"
            >
                New
            </button>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">V1</span>
            <input
                type="text"
                class="form-control input-verb"
                aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">X</span>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">V2</span>
            <input
                type="text"
                class="form-control input-verb"
                aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">X</span>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">V3</span>
            <input
                type="text"
                class="form-control input-verb"
                aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">X</span>
        </div>
        <div class="d-flex justify-content-between mb-3">
            <button class="btn btn-primary" onclick="showAnswers(${index})">
                Show
            </button>
            <button class="btn btn-primary" onclick="clearInputs()">
                Clear
            </button>
        </div>
    `;
}

/**
 * Bu fonksiyon, input lari temizler.
 */
function clearInputs() {
    let inputs = document.getElementsByClassName('input-verb');
    for (input of inputs) {
        input.value = '';
    }
}

function showAnswers(pIndex) {
    let verb = verbList[pIndex];
    let inputs = document.getElementsByClassName('input-verb');
    inputs[0].value = verb.verb1Name;
    inputs[1].value = verb.verb2Name;
    inputs[2].value = verb.verb3Name;
}

getVerb();
