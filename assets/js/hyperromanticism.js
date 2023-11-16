const visibleTextStyle = ''
const invisibleTextStyle = 'text-indent: 100%;white-space: nowrap; overflow: hidden;'

function displayFragment(event){
    const oldFragmentDisplay = document.querySelector(".activeDisplay")
    if(oldFragmentDisplay != null){
        oldFragmentDisplay.classList.remove('activeDisplay')
        oldFragmentDisplay.style = invisibleTextStyle
    }
    const name = event.target.value;
    const fragmentDisplay = document.querySelector("."+name)
    fragmentDisplay.style = visibleTextStyle
    fragmentDisplay.classList.add('activeDisplay')
}


const nameInput = document.getElementById("nameInput");
nameInput.onchange = displayFragment