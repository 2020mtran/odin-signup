document.body.style.margin = "0";
document.body.style.fontFamily = "Tahoma, sans-serif";


const page = document.querySelector(".page");

page.style.display = "flex";
page.style.flexDirection = "row";
page.style.height = "100vh";

const left = document.querySelector(".left");

left.style.display = "flex";
left.style.flexDirection = "column";
left.style.position = "relative";

const mainImg = document.createElement("img");

mainImg.src = "./images/VioletEvergarden.jpg";
mainImg.alt = "Image of Violet Evergarden the Movie";
mainImg.style.height = "100vh";

left.append(mainImg);

const credits = document.createElement("div");

const kyotoLink = document.createElement("a");

kyotoLink.href = "https://www.kyotoanimation.co.jp";
kyotoLink.textContent = "Kyoto Animation";
kyotoLink.style.color = "white";

credits.textContent = "Image by ";
credits.append(kyotoLink);
credits.style.color = "white";
credits.style.fontSize = "14px";
credits.style.position = "absolute";
credits.style.bottom = "20px";
credits.style.left = "50%";
credits.style.transform = "translateX(-55%)";
credits.style.textAlign = "center";
credits.style.fontFamily = "'Tahoma', sans-serif";

left.append(credits);

const right = document.querySelector(".right");

right.style.display = "flex";
right.style.flexDirection = "column";

const first = document.createElement("div");

first.style.display = "block"; // Change to block or remove flex properties
first.innerHTML = `This is not a real online service! You know you need something like this in your life to help you realize your deepest dreams. <br>
Sign up <em>now</em> to get started. <br>
<br>
You <em>know</em> you want to.`;
first.style.padding = "75px 200px 50px 50px";
first.style.fontSize = "24px";
first.style.fontWeight = "bold";

right.append(first);

const second = document.createElement("div");

second.style.display = "flex";
second.style.flexDirection = "column";

const secondTitle = document.createElement("div");

secondTitle.textContent = "Let's do this!";
secondTitle.style.padding = "0px 200px 25px 50px";
secondTitle.style.fontSize = "24px";
secondTitle.style.fontWeight = "bold";

second.append(secondTitle);

const secondForm = document.createElement("form");

secondForm.setAttribute("method", "post");
secondForm.style.padding = "0px 200px 50px 50px";
secondForm.style.display = "flex";
secondForm.style.flexDirection = "row";
secondForm.style.gap = "100px";
secondForm.style.flexWrap = "wrap";
secondForm.style.width = "700px";
secondForm.style.rowGap = "20px";

const firstNameDiv = document.createElement("div");

firstNameDiv.style.display = "flex";
firstNameDiv.style.flexDirection = "column";

const labelFirstName = document.createElement("label");

labelFirstName.setAttribute("for", "userFirstName");
labelFirstName.textContent = "First Name";

firstNameDiv.append(labelFirstName);

const firstName = document.createElement("input");
firstName.setAttribute("type", "text");
firstName.setAttribute("name", "userFirstName");
firstName.setAttribute("placeholder", "Violet");
firstName.setAttribute("required", "")
firstName.style.width = "250px";

firstNameDiv.append(firstName);
secondForm.append(firstNameDiv);

const lastNameDiv = document.createElement("div");

lastNameDiv.style.display = "flex";
lastNameDiv.style.flexDirection = "column";

const labelLastName = document.createElement("label");

labelLastName.setAttribute("for", "userLastName");
labelLastName.textContent = "Last Name";

lastNameDiv.append(labelLastName);

const lastName = document.createElement("input");
lastName.setAttribute("type", "text");
lastName.setAttribute("name", "userLastName");
lastName.setAttribute("placeholder", "Evergarden");
lastName.setAttribute("required", "")
lastName.style.width = "250px";

lastNameDiv.append(lastName);
secondForm.append(lastNameDiv);

const emailDiv = document.createElement("div");
emailDiv.style.display = "flex";
emailDiv.style.flexDirection = "column";

const labelEmail = document.createElement("label");
labelEmail.setAttribute("for", "userEmail");
labelEmail.textContent = "Email";

emailDiv.append(labelEmail);

const email = document.createElement("input");
email.setAttribute("type", "text");
email.setAttribute("email", "userEmail");
email.setAttribute("placeholder", "AutoMemoryDoll@gmail.com");
email.setAttribute("required", "")
email.style.width = "250px";

emailDiv.append(email);
secondForm.append(emailDiv);

const phoneDiv = document.createElement("div");
phoneDiv.style.display = "flex";
phoneDiv.style.flexDirection = "column";

const labelPhone = document.createElement("label");
labelPhone.setAttribute("for", "userPhone");
labelPhone.textContent = "Phone";

phoneDiv.append(labelPhone);

const phone = document.createElement("input");
phone.setAttribute("type", "text");
phone.setAttribute("name", "userPhone");
phone.setAttribute("placeholder", "383-742-7336");
phone.setAttribute("required", "")
phone.style.width = "250px";

phoneDiv.append(phone);
secondForm.append(phoneDiv);

const passwordDiv = document.createElement("div");
passwordDiv.style.display = "flex";
passwordDiv.style.flexDirection = "column";

const labelPassword = document.createElement("label");
labelPassword.setAttribute("for", "userPassword");
labelPassword.textContent = "Password";

passwordDiv.append(labelPassword);

const password = document.createElement("input");
password.setAttribute("type", "text");
password.setAttribute("password", "userPassword");
password.setAttribute("placeholder", "akatsuki!Kana");
password.setAttribute("required", "")
password.style.width = "250px";

passwordDiv.append(password);
secondForm.append(passwordDiv);

const passwordConfirmDiv = document.createElement("div");
passwordConfirmDiv.style.display = "flex";
passwordConfirmDiv.style.flexDirection = "column";

const labelPasswordConfirm = document.createElement("label");
labelPasswordConfirm.setAttribute("for", "userPasswordConfirm")
labelPasswordConfirm.textContent = "Confirm Password";

passwordConfirmDiv.append(labelPasswordConfirm);

const passwordConfirm = document.createElement("input");
passwordConfirm.setAttribute("type", "text");
passwordConfirm.setAttribute("password", "userPasswordConfirm");
passwordConfirm.setAttribute("placeholder", "akatasuki!Kana");
passwordConfirm.setAttribute("required", "")
passwordConfirm.style.width = "250px";

passwordConfirmDiv.append(passwordConfirm);
secondForm.append(passwordConfirmDiv);

second.append(secondForm);

right.append(second);

const third = document.createElement("div");

third.style.display = "flex";
third.style.flexDirection = "column";

const createAccountBtn = document.createElement("button");

createAccountBtn.style.display = "flex";
createAccountBtn.style.justifyContent = "center";
createAccountBtn.style.alignItems = "center";
createAccountBtn.style.backgroundColor = "#038cfc";
createAccountBtn.textContent = "Create Account";
createAccountBtn.style.fontFamily = "Tahoma, sans-serif";
createAccountBtn.style.fontWeight = "bold";
createAccountBtn.style.fontSize = "15px";
createAccountBtn.style.color = "white";
createAccountBtn.style.width = "225px";
createAccountBtn.style.padding = "15px 0";
createAccountBtn.style.margin = "0px 200px 20px 50px";
createAccountBtn.style.borderRadius = "10px";
createAccountBtn.style.borderColor = "#038cfc";

third.append(createAccountBtn);

const alreadyHave = document.createElement("div");

alreadyHave.textContent = "Already have an account?";
alreadyHave.style.padding = "0px 200px 25px 50px";

const toLogin = document.createElement("a");
toLogin.textContent = "Log in";
toLogin.style.color = "#038cfc";
toLogin.style.padding = "0 5px";

alreadyHave.append(toLogin);

third.append(alreadyHave);

right.append(third);

page.append(left);
page.append(right);