const iconsAction = document.querySelectorAll('.icon');

const swiperWrapper = document.querySelector('#swiper-wrapper');

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

    //Post comment listener
    btnPostComment.addEventListener('click', postComment);

});

//Post Comment Function
const postComment = () => {

    if (inputComment.value !== '') {

        //Create HTML comment
        const divComment = document.createElement('div');
        divComment.classList.add('comment');

        const txtComment = document.createElement('p');
        txtComment.innerHTML = `<span class='userName'>comment</span> ${inputComment.value}`;
        
        //Add comment text in div
        divComment.appendChild(txtComment);

        //Add comment to comments container
        divComments.appendChild(divComment);

        //Clean input comment
        inputComment.value = '';

        return;

    }

}

//Show images HTML
const showImgApi = (imgData) => {

    imgData.map(img => {
        // console.log(img.download_url);
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const slideImg = document.createElement('img');
        slideImg.src = img.download_url;

        swiperSlide.appendChild(slideImg);

        swiperWrapper.appendChild(swiperSlide);
    });
}


const urlAPI = 'https://picsum.photos/v2/list?page=1&limit=5';

fetch(urlAPI)
    .then( response => response.json() )
    .then( imgData => {

        while (swiperWrapper.firstChild) {
            swiperWrapper.removeChild(swiperWrapper.firstChild);
        }

        showImgApi(imgData);

        /* Images Card */
        const swiper = new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

    })
    .catch( error => console.log('Error API request:', error.message) );