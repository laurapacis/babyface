window.alert("The following site is for educational purposes only! In case you want to start using a new skincare product please talk to your dematologist first.");

const userInput = document.getElementById('input')

const checkerIngredients = "oxybenzones, avobenzone, octinoxate, homosalate, octisalate, octocrylene, fragrance, hydrogen peroxide, sodium lauryl sulfate, sodium silicate, sodium hydroxide, sodium metabisulfite, sodium sulfite, sodium thioglycolate, SD alcohol 40-2, SD alcohol, sodium bisulfite, sodium borate, sodium carbonate, zinc carbonate, zinc sulfate, petrolatum, petroleum jelly, paraffin oil, mineral oil, white petrolatum, petrolem. oil, paraffinium, dimethicone, methicone, trimethicone, cyclomethicone, amodimethicone, trimethylsilylamodimethicone siloxane, cyclopentasiloxane, polydimethylsiloxane conol, ethyl paraben, nutylparaben, methylparaben, propylparaben, isobutylparaben, isopropylparaben, peg, ppg, isopropylparapen, isobutylparaben, propyl parapen, butylparaben, phthalate, dea, tea, perfume, aroma, fullerenes, micronized zinc oxide, nano zinc oxide, micronized titanium dioxide, micronized quartz silica, acetic acid, acetone, calamine, elecampane, english ivy extract, equisetum arvense, esculin, essential oil, ethanol, eucalyptus oil, eugenia aromatica, eugenol, eugenia caryophyllus, comfrey extract, denatured alcohol, fennel oil, fennel seed extract, ferula galbaniflua, fir needle oil, foeniculum vulgare extract, frankincense extract, galbanum, gardenia florida extract, geraniol, geranium oil, geranium pretense, ginger oil, isopropyl alcohol, jasmine oil, jasminium grandiflorum, jonquil extract, juniper berry, juniperus communis, kathon cg, kava-kava extract, kawa extract, kola nut, lavandin oil, lavandula angustifolia, lavandula officinalis, lavender extract, lavender oil, lemon, lemon balm, lemon juice, lemon oil, lemongrass extract, lemongrass oil, gold, grapefruit oil, parfum";

// transform string into an array
const arrOfCheckerIngredients = checkerIngredients.split(', ');

// transform the string given by the user into an array
const handleValue = (value) => {
    let newValue = value;
    let valueUserInput = newValue.toLowerCase().split(', ');
    return valueUserInput
}

// create an object with all the ingredients given by the user
const makelistOfIngredients = (valueUserInput) => {
    const listOfIngredients = {};
    for (let i = 0; i < valueUserInput.length; i++) {
        if (listOfIngredients[valueUserInput[i]] === undefined) {
            listOfIngredients[valueUserInput[i]] = true;
        }
    }
    return listOfIngredients
}

// create an array with the ingredients that match
const fillResult = (array, listOfIngredients) => {
    const result = []
    array.forEach((ingredient) => {
     if (ingredient in listOfIngredients) {
         result.push(ingredient);
     }
    })
    return result
}

// give an answer to the user
const outputForUser = (result) => {
    if (result != 0) {
        answer.innerText = (`Unfortunately it contains: ${result}. These ingredients may irritate your skin.`);
    } else {
        answer.innerText = (`Nice! It seems like all these ingredients are safe even for sensitive skin!`);
    }
}

// check if the user input matches our given ingredients 
const checkIngredients = (userInput, arrOfCheckerIngredients) => {
    let value = userInput.value
    let valueUserInput = handleValue(value)
    const listOfIngredients = makelistOfIngredients(valueUserInput)
    const result = fillResult(arrOfCheckerIngredients, listOfIngredients)
    
    answer.innerText = ""

    outputForUser(result)
};

// 'click' eventListener that activates the main function
const button = document.getElementById('button');
button.addEventListener('click', () => {
    checkIngredients(userInput, arrOfCheckerIngredients)
}
);