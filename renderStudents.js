
function renderStudents(students) {
    var tags = students.map(function(element){
        if(element.isPresent === true) {
        var present = `<div class="text-center mt-5">
                <div style=color:black;background-color:#00FF00;width:200px;height:80px>
                <h2>${element.name}<br><h4>Present</h4></h2> 
                </div>
            </div>`
            return present
        }else {
            var absent = `<div class="text-center mt-5">
                <div style=color:black;background-color:red;width:200px;height:80px>
                <h2>${element.name}<br><h4>Absent</h4></h2> 
                </div>
            </div>`
        }
        return absent
       })
       return tags.join(' ')
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}