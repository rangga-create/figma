function changeActiveBox(nomor) {
    // console.log(nomor);
    document.querySelectorAll('.box').forEach (box => {
        box.classList.remove('bg-[#5CB26E]','h-[363px]','justify-between','flex');
        box.classList.add('bg-[#141D2B]','h-[300px]');
        box.querySelector('.deksripsi')?.remove();
        box.querySelector('.tombol')?.remove();           
    });

    const activeBox = document.getElementById(`box-${nomor}`);
    activeBox.classList.remove('bg-[#141D2B]','h-[300px]');
    activeBox.classList.add('bg-[#5CB26E]','h-[363px]','justify-between','flex');
    
    const dsc = document.createElement('p');
    dsc.className="deksripsi text-[16px] ";
    dsc.innerText= nomor === 1 ?"ini deksripsi 01": nomor === 2 ? "All accommodation, food , and destination facilities included in our package are included in the listed price" : "ini deksripsi 03";
    activeBox.appendChild(dsc);

    const tmbl = document.createElement('div');
    tmbl.className="tombol flex gap-10 items-center  ";
    tmbl.innerHTML="<p>Learn More</p><i class='fa-solid fa-chevron-right' ></i> "
    activeBox.appendChild(tmbl);
}


// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//         items:4,
//         loop:true,
//         margin:10,
//         autoplay:true,
//         autoplayTimeout:1000,
//         autoplayHoverPause:true
//     });
//     $('.play').on('click',function(){
//         owl.trigger('play.owl.autoplay',[1000])
//     })
//     $('.stop').on('click',function(){
//         owl.trigger('stop.owl.autoplay')
//     })
// })


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
       
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3.5
            }
        }
    })
})


const trips = document.querySelectorAll('[data-trip]');

function activeTrip(tripNumber) {
    trips.forEach((trip) => { 
        const circle = trip.querySelector(".trip-circle");
        const innerCircle = trip.querySelector(".trip-circle div"); 
        const text = trip.querySelector(".trip-text");

        if (trip.getAttribute("data-trip") === tripNumber.toString()) { 
            circle.classList.remove("bg-[#D9D9D9]");
            circle.classList.add("bg-[#5CB26E]");
            innerCircle.classList.remove("hidden");
            text.classList.remove("text-[#ffffff80]");
            text.classList.add("text-[#5CB26E]");
        } else {
            circle.classList.remove("bg-[#5CB26E]");
            circle.classList.add("bg-[#D9D9D9]");
            innerCircle.classList.add("hidden");
            text.classList.remove("text-[#5CB26E]");
            text.classList.add("text-[#ffffff80]");
        }
    });
}

trips.forEach((trip) => {
    trip.addEventListener("click", () => {
        activeTrip(trip.getAttribute("data-trip"));
    });
});

activeTrip("1");


const dayTrip = document.querySelectorAll(".days");
const listTrip = Array.from(dayTrip);
const tmblTrip = document.getElementById("tmblTrip");

listTrip.forEach((t) => {
  t.addEventListener("mouseover", () => {
    tmblTrip.classList.remove("hidden");
    tmblTrip.classList.add("flex");

    const index = listTrip.indexOf(t);
    tmblTrip.classList.remove("top-[0px]", "top-[125px]", "top-[250px]", "top-[375px]");

    // Menetapkan posisi top berdasarkan index
    if (index === 1) {
      tmblTrip.classList.add("top-[125px]");
    } else if (index === 2) {
      tmblTrip.classList.add("top-[250px]");
    } else if (index === 3) {
      tmblTrip.classList.add("top-[375px]");
    } else {
      tmblTrip.classList.add("top-[0px]");  // Posisi default
    }
  });

  t.addEventListener("mouseout", () => {
    tmblTrip.classList.remove("flex");
    tmblTrip.classList.add("hidden");
  });
});
