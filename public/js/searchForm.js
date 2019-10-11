/*    <li>{{ this.origin }}</li>
    <li>{{ this.destination }}</li>
    <li>{{ this.value }}</li>
    <li>{{ this.depart_date }}</li>
    <li>{{ this.return_date }}</li>
    <li>{{ this.number_of_changes }}</li>
*/

let toPlace = document.getElementById('toPlace');
let dateFrom = document.getElementById('dateFrom');
let surprise = document.getElementById('surprise');
let minDays = document.getElementById('minDays');
let maxDays = document.getElementById('maxDays');

function updateForm(surpriseMode){
    dateFrom.style.visibility = surpriseMode ? 'hidden' : 'visible';
    toPlace.style.visibility = surpriseMode ? 'hidden' : 'visible';
    minDays.style.visibility =  !surpriseMode ? 'hidden' : 'visible';
    maxDays.style.visibility =  !surpriseMode ? 'hidden' : 'visible';
};

surprise.addEventListener('change', e => {
    updateForm(e.currentTarget.checked)
});

updateForm(false)
