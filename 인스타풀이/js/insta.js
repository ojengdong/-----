let signin_form = document.getElementById("signin-form");
let btn_login = document.getElementById("btn-login");
let darkmode_toggle = document.getElementById("darkmode-toggle");

// 화살표 함수(arrow function)
// 정규 함수 표현식보다 훨씬 간결하게 함수를 만들 수 있다.

// let num = function(x,y) {
//     return x + y;
// }

// let num = (x,y) => x + y;

document.querySelectorAll(".animate-input").forEach((e) => {
    // e : .animate-input이라는 class
    let input = e.querySelector("input");
    let button = e.querySelector("button");

    // onkeyup
    // 사용자가 키보드의 키를 눌렀다가 떼었을 때 발생하는 이벤트
    // trim() : 공백을 제거하는 함수
    input.onkeyup = () => {
        if(input.value.trim().length > 0) {
            e.classList.add("active");
        } else {
            e.classList.remove("active");
        }

        if(input.value.length != 0) {
            btn_login.removeAttribute("disabled");
        } else {
            btn_login.setAttribute("disabled", "true");
        }
    }

    // 비밀번호 표시 / 숨기기
    if(button) {
        button.onclick = () => {
            if(input.getAttribute("type") === "text") {
                input.setAttribute("type", "password");
                button.innerHTML = "비밀번호 표시";
            } else {
                input.setAttribute("type", "text");
                button.innerHTML = "비밀번호 숨기기";
            }
        }
    }
})

// darkmode toggle
darkmode_toggle.onclick = (e) => {
    e.preventDefault();
    let body = document.querySelector("body");
    body.classList.toggle("dark");

    // 삼항연산자
    darkmode_toggle.innerHTML = body.classList.contains("dark") ? "Lightmode" : "Darkmode";
}