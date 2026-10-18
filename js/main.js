
const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const loginButton = document.querySelector(".btn-login");

let isEmailVariable = false;

function handleEmailInput() {
  // console.log(this);
  // console.log(this.value)

  if (emailReg(this.value) !== true) {
    this.classList.add("is--invalid");

    isEmailVariable = false;
  } else {
    this.classList.remove("is--invalid");

    isEmailVariable = true;
  }
  // console.log(isEmailVariable);
}

let isPasswordVariable = false;

function handlePasswordInput() {

  if (pwReg(this.value) !== true) {
    this.classList.add("is--invalid");
    isPasswordVariable = false;
  } else {
    this.classList.remove("is--invalid");
    isPasswordVariable = true;
  }
}


function handleLoginClick(e) {
  e.preventDefault();

  try {
    if (!isEmailVariable || !isPasswordVariable){
      throw new Error('조건이 일치하지 않습니다');
    }

    if (userEmail.value !== user.id || userPassword.value !== user.pw) {
      throw new Error('아이디 또는 비밀번호가 일치하지 않습니다');
    }

    window.location.href = 'welcome.html';

  } catch (error) {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.')
  }
}

userEmail.addEventListener("input", handleEmailInput);
userPassword.addEventListener("input", handlePasswordInput);
loginButton.addEventListener("click", handleLoginClick);


//debounce...😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭