

function displayFragments(event){
    
    const checkboxes = document.getElementById("nameInput").getElementsByTagName('input')
    for( const checkbox of checkboxes){
        const fragmentDisplay = document.querySelector("."+checkbox.name)
        if(checkbox.checked){
            fragmentDisplay.classList.remove('hidden')
        }
        else{
            fragmentDisplay.classList.add('hidden')
        }
    }
}


// const charWidth = 5
// const charHeight = 10

// const background_set = '▓▒░▘▞▙▟▛▚▜▞▘▟▘▜▐▌█▊ '.split()
// function moveBackground(){
//     function generateStringFromSet(len, set){
//         let str = ''
//         for (let i = 0; i < len; i++) {
//             str = str + set[~~(Math.random() * set.length)];;
//         }
//         return str
//     }
//     var height = document.body.clientHeight;
//     var width = document.body.clientWidth;
//     const background_len = height/charHeight * width/charWidth
    
//     document.querySelector('.background').innerHTML = generateStringFromSet(background_len, background_set)
    
// }


// setInterval(moveBackground, 1000); // Move fish every 1 second

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener("change", displayFragments);