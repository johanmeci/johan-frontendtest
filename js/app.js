const iconsAction = document.querySelectorAll('.icon');
const divComments = document.querySelector('#commentsCard');
const inputComment = document.querySelector('#comment');
const btnPostComment = document.querySelector('#btnPost');

//Load Listeners
document.addEventListener('DOMContentLoaded', function() {
    
    //Icon like animation
    iconsAction.forEach(icon => {

        icon.addEventListener('click', () => {

            if (icon.classList.contains('like')) {

                if (icon.classList.contains('active')) {
                    icon.classList.remove('active');
                } else {
                    icon.classList.add('active');
                }
            }
        });

    });

    //Post comment action
    btnPostComment.addEventListener('click', () => {

        if (inputComment.value !== '') {

            //Create HTML comment
            let divComment = document.createElement('div');
            divComment.classList.add('comment');

            let txtComment = document.createElement('p');
            txtComment.innerHTML = `<span class='userName'>comment</span> ${inputComment.value}`;
            
            //Add comment text in div
            divComment.appendChild(txtComment);

            //Add comment to comments container
            divComments.appendChild(divComment);

            //Clean input comment
            inputComment.value = '';

            return;

        }
    });

});