console.log("hehe");

const cloudName = 'freshlysteven';
const tag = 'porsche';


const url = `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`

const mainImage = document.querySelector('#main-img img');



fetch(url)
    .then(res => res.json())
    .then(data => {
        const gallery = document.querySelector('#gallery');

        data.resources.forEach(img => {
            const imgEl = document.createElement('img')
            imgEl.src = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/w_300,c_scale/${img.public_id}.${img.format}`;
            
            imgEl.addEventListener('click', () => {
                mainImage.src = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/${img.public_id}.${img.format}`;
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })

            })
            
            gallery.appendChild(imgEl);     
        })
    })