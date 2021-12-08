const exercisesAllIrregularVerbs = getElementById(
    'exercises-all-irregular-verbs'
);

const btnGetRandomVerbForExercises = getElementById(
    'get-random-verb-for-exercises'
);

const btnShow = getElementById('btn-show');
const btnClear = getElementById('btn-clear');

const inputV1 = getElementById('input-v1');
const inputV2 = getElementById('input-v2');
const inputV3 = getElementById('input-v3');

const verbForExercises = getElementById('verb-for-exercises');

exercisesAllIrregularVerbs.innerHTML = verbList
    .map((verb, index) => {
        return `
        <div class="col-lg-2 mb-3">
           <a onClick='getVerbForExercises(${index})' href='#'>${verb.verb1Name}</a>
        </div>
    `;
    })
    .join('');

btnGetRandomVerbForExercises.addEventListener('click', function () {
    getRandomVerbForExercises();
});

btnShow.addEventListener('click', function () {
    console.log('btn show');
});

btnClear.addEventListener('click', function () {
    clearInputs();
});

function getVerbForExercises(pVerbIndex) {
    verbForExercises.innerHTML = verbList[pVerbIndex].verbTurkish;
}

function getRandomVerbForExercises() {
    let randomNumber = getRandomNumber(verbList.length);
    let randomVerb = verbList[randomNumber];
    verbForExercises.innerHTML = randomVerb.verbTurkish;
}

function clearInputs() {
    inputV1.value = '';
    inputV2.value = '';
    inputV3.value = '';
}

getRandomVerbForExercises();
