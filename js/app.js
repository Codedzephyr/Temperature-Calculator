const form = document.getElementById('temperature-form');
const tired = document.getElementById('intelligent');
const report = document.getElementById('celsiustof');
const fall = document.getElementById('farenheitof');
const carry = document.getElementById('fool');


// Listen for submit
report.addEventListener('click',secondphase2);
fall.addEventListener('click',thirdphase3);
carry.addEventListener('click',fifthphase);
tired.addEventListener('click',firstphase);



function firstphase(e){
    //Hide results
document.getElementById('results').style.display = 'none';

//show loader

document.getElementById('loading').style.display = 'block';

setTimeout(CalculateResults,2000);
e.preventDefault();
}



function secondphase(e){
    //Hide results
    document.getElementById('farenheittocelsius').style.display = 'block';

    document.getElementById('celsiustofarenheit').style.display = 'none';

    document.getElementById('response').style.display = 'none';

    document.getElementById('down').style.display = 'none';

}

function secondphase2(e){    
    document.getElementById('celsiustofarenheit').style.display = 'none';
    document.getElementById('response').style.display = 'none';
    document.getElementById('farenheittocelsius').style.display = 'none';
    document.getElementById('down').style.display = 'block';
    setTimeout(secondphase,1000);
    e.preventDefault();
}


function thirdphase(e){
    document.getElementById('celsiustofarenheit').style.display = 'block';

    document.getElementById('farenheittocelsius').style.display = 'none';

    document.getElementById('results').style.display = 'none';

    document.getElementById('down').style.display = 'none';

}

function thirdphase3(e){
    document.getElementById('celsiustofarenheit').style.display = 'none';
    document.getElementById('farenheittocelsius').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('down').style.display = 'block';
    setTimeout(thirdphase,1000);
    e.preventDefault();

}


function fifthphase(e){
    //Hide results
document.getElementById('response').style.display = 'none';

//show loader

document.getElementById('loading').style.display = 'block';

setTimeout(Calculate,2000);
e.preventDefault();
}




// Calculate results
function CalculateResults(e){
    console.log('calculating...');
    //UI Vars
    const farenheit = document.getElementById('farenheit');
    const answer = document.getElementById('solution');

    const answe = parseFloat(farenheit.value);

    //Compute answer
    const random = (answe - 32);
    const final = random * 5 / 9; 
        if (isFinite(final)){
            answer.value = final.toFixed(4);
              //show results
        document.getElementById('results').style.display = 'block';
        
        //Hide loader
        document.getElementById('loading').style.display = 'none';

        document.getElementById('response').style.display = 'none';

        }
        else{
            showError('Please Check Your Numbers');
        }
     
    }

    function Calculate(e){
        console.log('calculating...');
        //UI Vars
        const celsius = document.getElementById('Celsius');
        const bang = document.getElementById('degree');

        const ans = parseFloat(Celsius.value);

        //compute answer
        const calc = (ans * 9 / 5);
        const temp = calc + 32;
        if(isFinite(temp)){
            bang.value = temp.toFixed(4);
            //show results
            document.getElementById('response').style.display = 'block';

            //hide loader
            document.getElementById('loading').style.display = 'none';

            document.getElementById('results').style.display = 'none';

        }
        else{
            showError('Please Check your numbers');

        }
     
        }
    

 
// Show Error
function showError(error){
    // Hide results
    document.getElementById('results').style.display = 'none';

    // hide loader
    document.getElementById('loading').style.display = 'none';
//Create a div
const errorDiv = document.createElement('div');

//Get elements
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');
// Add class
errorDiv.className = "alert alert-danger";

// create text node and append to div
errorDiv.appendChild(document.createTextNode(error));

//insert error above heading
card.insertBefore(errorDiv,heading);


// clear error after 3 seconds
setTimeout(clearError,3000);

//clear error
function clearError(){
    document.querySelector('.alert').remove();
}
}

