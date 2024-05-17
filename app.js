document.addEventListener("DOMContentLoaded",function(){

    const profilePicture = document.getElementById('profile-picture')
    const fileInput = document.getElementById('file-input')

    // Load pfp from local storage
    function loadPfp(){
        const savedImage = localStorage.getItem("profilePicture")
        if(savedImage){
            profilePicture.src = savedImage
        }
    }

    // Trigger file input click when pfp is clicked
    profilePicture.addEventListener("click", function() {
        fileInput.click()
    })


    // Handle file selection 
    fileInput.addEventListener("change", function(e){
        const file = e.target.files[0]
        if(file){
            const reader = new FileReader()
            reader.onload = function(e) {
                const result = e.target.result
                profilePicture.src = result
                localStorage.setItem("profilePicture",result)
            }
            reader.readAsDataURL(file)
        }
    })
    loadPfp()
})