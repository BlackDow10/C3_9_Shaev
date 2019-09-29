'use strict';
let citySelect = document.querySelector("#setCity");
let cityText = document.querySelector("#cityDisplay");
let cityField = document.querySelector("#cityInput");

let checkSave = document.querySelector("#save");


let cityFlag = false;

if (getCookie("city")){
	setField();
}

if (getCookie("checkFlag")){
	setChecks();
}



function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

checkSave.onclick = () =>{
	setCookie("opros1", opros1.checked);
	setCookie("opros2", opros2.checked);
	setCookie("opros3", opros3.checked);
	setCookie("opros4", opros4.checked);
	setCookie("opros5", opros5.checked);
	setCookie("opros6", opros6.checked);
	setCookie("checkFlag", true);
}

setCity.onclick = ()=>{
	if (cityFlag) {
		deleteCookie("city");
		cityInput.style.display = 'block';
		cityDisplay.style.display = 'none';
		cityFlag = false;
		
	}
	else{
		let value = cityInput.value;
		setCookie("city", value);
		setField();
	}
}

function setField(){
	cityDisplay.innerHTML = "Ваш город- " + getCookie("city");
	cityDisplay.style.display = 'block';
	cityInput.style.display = 'none';
	cityFlag = true;
		
}

function setChecks(){
	opros1.checked = decoding(getCookie("opros1"));
	opros2.checked = decoding(getCookie("opros2"));
	opros3.checked = decoding(getCookie("opros3"));
	opros4.checked = decoding(getCookie("opros4"));
	opros5.checked = decoding(getCookie("opros5"));
	opros6.checked = decoding(getCookie("opros6"));
}

function decoding(data){
	if (data == "true"){
		return true;
	}
	else {
		return false;
	}
}