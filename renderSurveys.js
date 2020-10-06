
function renderSurveys(surveys) {
    
    var surveyCard = surveys.map(function(survey){
        let htmlTitle = renderSurveyTitle(survey.title);
        let htmlFields = renderSurveyFields(survey.fields);
        let htmlSubmitButton = renderSubmitButton(survey.submitButtonText);
        return htmlTitle + htmlFields + htmlSubmitButton;
    })
    return` 
        <div class="text-center mt-5 surveyCard"> 
         <div class="surveyCard">
            ${surveyCard.join(' ')}
         </div>
        </div>`
}

function renderSurveyTitle(title){
    return `
    <div class="surveyCard">
     <div id="surveyTitle">
     <h1>${title}</h1>
     <hr>
     </div>
    </div>`
}

function renderSurveyFields(fields) {
    let fieldCard = fields.map(function(field){
        let htmlFields =`
        <span>${field.label}</span><br>
        `
        let htmlOptions = ` `;
        if (field.options) {
            htmlOptions = renderFieldOptions(field.options);
        }
        if (field.type === 'text') {
            htmlOptions = '<textarea></textarea>'
        }
        return`${htmlFields + htmlOptions}<br>`;
    })
    return fieldCard.join(' ');
}

function renderFieldOptions(options){
    let htmlOptions = options.map(function(option){
        return `
        <input type="radio"></input>
        <label>${option}</label>`
    })
    return htmlOptions.join(' ')
}

function renderSubmitButton(button){
    return `<button type="submit">${button}</button>`
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}