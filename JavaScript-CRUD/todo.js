let form = document.querySelector("form");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li")
let btn1 = document.querySelectorAll(".btn1")
let btn2 = document.querySelectorAll(".btn2");

//add the value
form.addEventListener("submit", e => {
    e.preventDefault();
    let value = e.target[0].value;
    let list = document.createElement("li");
    list.innerHTML = `<input type="text" id="cls-input" value="${value}">
    <button class="btn1">Edit</button> <button class="btn2">Delete</button>`;
    ul.appendChild(list);

    let test = list.childNodes[4]
    console.log(test);
    console.dir(list);
    test.addEventListener("click", e => {
        e.target.parentElement.remove()
    })
    let edit = list.children[3]
    console.log(edit);
    console.dir(list);
    edit.addEventListener("click", e => {
       let tog = e.target.classList.toggle("active");
       if (tog) {
         e.target.previousElementSibling.removeAttribute("disabled");
         e.target.previousElementSibling.style.background = "cadetBlue";
         e.target.previousElementSibling.style.color = "gold";
       } else {
         e.target.previousElementSibling.setAttribute("disabled",true);
         e.target.previousElementSibling.style.background = "lightGrey";
         e.target.previousElementSibling.style.color = "navy";
       }
     });

});

//removing the delete button
let remove = document.querySelectorAll(".btn2");
remove.forEach(val => {
    val.addEventListener("click", e => {
        e.target.parentElement.remove();
    });
});


//editing the content

let edit = document.querySelectorAll(".btn1");
console.log(edit)
edit.forEach(val => {
    val.addEventListener("click", e => {
        let tog = e.target.classList.toggle("active");
        if (tog) {
            e.target.previousElementSibling.removeAttribute("disabled");
            e.target.previousElementSibling.style.background = "cadetBlue";
            e.target.previousElementSibling.style.color = "gold";
        }
        else {
            e.target.previousElementSibling.setAttribute("disabled",true);
            e.target.previousElementSibling.style.background = "lightGrey";
            e.target.previousElementSibling.style.color = "navy";
        }
    })
})

//!=============================================

// let form = document.querySelector("form");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");
// let btn1 = document.querySelectorAll(".btn1");
// let btn2 = document.querySelectorAll(".btn2");


// form.addEventListener("submit", e => {
//     e.preventDefault();
//     let value = e.target[0].value;
//     let list = document.createElement("li")
//     list.innerHTML = `<input type="text" id="cls-input" disabled value="${value}"/> <button class="btn1">Edit</button> <button class="btn2">delete</button>`;
//     ul.appendChild(list);

//     let test = list.childNodes[4];
//     console.log(test);
//     test.addEventListener("click", e => {
//       e.target.parentElement.remove();
//     });

//     let edit = list.childNodes[2];
//     console.log(edit)
//      edit.addEventListener("click", e => {
//        let toggle = e.target.classList.toggle("active");
//          if (toggle) {
//            e.target.previousElementSibling.removeAttribute("disabled");
//          }
//          else {
//              e.target.previousElementSibling.setAttribute("disabled", true);
//        }
//      });
// });

// btn2.forEach(val => {
//     val.addEventListener("click", e => {
//         e.target.parentElement.remove();
//     })
// })

// btn1.forEach(val => {
//     val.addEventListener("click", e => {
//         let toggle = e.target.classList.toggle("active");
//         if (toggle) {
//             e.target.previousElementSibling.removeAttribute("disabled")
//         }
//         else {
//             e.target.previousElementSibling.setAttribute("disabled", false);
//         }
//     })
// })




// let button = document.querySelector("button")
// let Shyam = document.querySelector(".Shyam");

// button.addEventListener("click", e => {
//     let tog = e.target.classList.toggle("active");
//     if (!tog) {
//         Shyam.style.backgroundColor = "red";
//     } else {
//         Shyam.style.backgroundColor = "green";
//     }
// });

// let btn = document.querySelector(".btn");
// let para = document.querySelectorAll(".anil");

// // para[0].style.color = "red"

// btn.addEventListener("click", e => {
    
//     para[1].style.color="red"
// })











