import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import {Toast} from "bootstrap"
//import logo from "./bootstrap-logo.svg"
const logo = require("./bootstrap-logo.svg")

console.log("Hello World!")

window.addEventListener("load",() => {
    const root = document.getElementById("root")
    root.innerHTML = `
        <button id=b1 type="button" class="btn btn-primary">Hello Webpack!</button>
        <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img src=${logo} width=30 class="rounded me-2" alt="logo">
                    <strong class="me-auto"><i class="bi bi-book-half"></i> Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div>
    `
    const b1 = document.getElementById("b1")
    b1.addEventListener("click",(e)=>{
        console.log(e)
        window.alert((e.target as HTMLButtonElement).innerText)
    })
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', function () {
            const toast = new Toast(toastLiveExample)
            toast.show()
        })
    }
})
