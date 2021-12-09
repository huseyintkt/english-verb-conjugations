/**
 * Containers
 */
const allVerbsContainer = getElementById('all-verb-container');
const verbContainer = getElementById('verb-container');

/**
 * Tum fiilleri render eder.
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
            <h5>${verb.verbTurkish}</h5>
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
                id="input-v1"
                type="text"
                class="form-control input-verb"
                onkeyup="handleChangeV1(${index})"
            />
            <span id="check-icon-v1" class="input-group-text">
                <i class="fas fa-times-circle"></i>
            </span>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">V2</span>
            <input
                id="input-v2"
                type="text"
                class="form-control input-verb"
                onkeyup="handleChangeV2(${index})"
            />
            <span id="check-icon-v2" class="input-group-text">
                <i class="fas fa-times-circle"></i>
            </span>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">V3</span>
            <input
                id="input-v3"
                type="text"
                class="form-control input-verb"
                onkeyup="handleChangeV3(${index})"
            />
            <span id="check-icon-v3" class="input-group-text">
                <i class="fas fa-times-circle"></i>
            </span>
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
 *
 * @param {Number} pVerbIndex
 * Bu fonksiyon, V1 icin input'a girilen degerin dogrulugunu kontrol eder.
 */
function handleChangeV1(pVerbIndex) {
    let verb = verbList[pVerbIndex];
    let input = getElementById('input-v1');
    let iconContainer = getElementById('check-icon-v1');
    if (verb.verb1Name === input.value) {
        iconContainer.innerHTML = `<i class="fas fa-check-circle"></i>`;
    } else {
        iconContainer.innerHTML = `<i class="fas fa-times-circle"></i>`;
    }
}

/**
 *
 * @param {Number} pVerbIndex
 * Bu fonksiyon, V2 icin input'a girilen degerin dogrulugunu kontrol eder.
 */
function handleChangeV2(pVerbIndex) {
    let verb = verbList[pVerbIndex];
    let input = getElementById('input-v2');
    let iconContainer = getElementById('check-icon-v2');
    if (verb.verb2Name === input.value) {
        iconContainer.innerHTML = `<i class="fas fa-check-circle"></i>`;
    } else {
        iconContainer.innerHTML = `<i class="fas fa-times-circle"></i>`;
    }
}

/**
 *
 * @param {Number} pVerbIndex
 * Bu fonksiyon, V3 icin input'a girilen degerin dogrulugunu kontrol eder.
 */
function handleChangeV3(pVerbIndex) {
    let verb = verbList[pVerbIndex];
    let input = getElementById('input-v3');
    let iconContainer = getElementById('check-icon-v3');
    if (verb.verb3Name === input.value) {
        iconContainer.innerHTML = `<i class="fas fa-check-circle"></i>`;
    } else {
        iconContainer.innerHTML = `<i class="fas fa-times-circle"></i>`;
    }
}

/**
 * Bu fonksiyon, input lari temizler.
 */
function clearInputs() {
    let inputs = document.getElementsByClassName('input-verb');
    for (input of inputs) {
        input.value = '';
    }
    renderFalseIcons();
}

/**
 * Bu fonksiyon, input lara dogru cevaplari yazar.
 */
function showAnswers(pVerbIndex) {
    let verb = verbList[pVerbIndex];
    let inputs = document.getElementsByClassName('input-verb');
    inputs[0].value = verb.verb1Name;
    inputs[1].value = verb.verb2Name;
    inputs[2].value = verb.verb3Name;
    renderTrueIcons();
}

/**
 * Bu fonksiyon 'fa-check-circle' ikonlarini render eder
 */
function renderTrueIcons() {
    getElementById(
        'check-icon-v1'
    ).innerHTML = `<i class="fas fa-check-circle"></i>`;
    getElementById(
        'check-icon-v2'
    ).innerHTML = `<i class="fas fa-check-circle"></i>`;
    getElementById(
        'check-icon-v3'
    ).innerHTML = `<i class="fas fa-check-circle"></i>`;
}

/**
 * Bu fonksiyon 'fa-times-circle' ikonlarini render eder
 */
function renderFalseIcons() {
    getElementById(
        'check-icon-v1'
    ).innerHTML = `<i class="fas fa-times-circle"></i>`;
    getElementById(
        'check-icon-v2'
    ).innerHTML = `<i class="fas fa-times-circle"></i>`;
    getElementById(
        'check-icon-v3'
    ).innerHTML = `<i class="fas fa-times-circle"></i>`;
}

/**
 * Random bir fiil render edilir.
 */
getVerb();
