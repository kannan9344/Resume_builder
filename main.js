window.addEventListener("DOMContentLoaded", () => {
  const Name = document.querySelector("#name");
  const Role = document.querySelector("#role");
  const Summary = document.querySelector("#summary");
  const Number = document.querySelector("#number");
  const Email = document.querySelector("#email");
  const Address = document.querySelector("#address");
  const Year = document.querySelector("#year");
  const College = document.querySelector("#college");
  const Department = document.querySelector("#department");
  const Skill = document.querySelector("#skill");
  const ExperienceYear = document.querySelector("#exyear");
  const Companyname = document.querySelector("#cname");
  const Companyrole = document.querySelector("#crole");
  const Jobdes = document.querySelector("#des");
  const Plink = document.querySelector("#prolink");
  const Pname = document.querySelector("#proname");
  const Pdes = document.querySelector("#prodes");

  Name.addEventListener("keyup", (e) => {
    document.querySelector(".name").innerHTML = e.target.value;
  });
  Role.addEventListener("keyup", (e) => {
    document.querySelector(".role").innerHTML = e.target.value;
  });
  Summary.addEventListener("keyup", (e) => {
    document.querySelector(".summary").innerHTML = e.target.value;
  });
  Number.addEventListener("keyup", (e) => {
    document.querySelector(".number").innerHTML = "+91" + e.target.value;
  });
  Email.addEventListener("keyup", (e) => {
    document.querySelector(".mail").innerHTML = e.target.value;
  });
  Address.addEventListener("keyup", (e) => {
    document.querySelector(".address").innerHTML = e.target.value;
  });
  Year.addEventListener("keyup", (e) => {
    document.querySelector(".year").innerHTML = e.target.value;
  });
  College.addEventListener("keyup", (e) => {
    document.querySelector(".college").innerHTML = e.target.value;
  });
  Department.addEventListener("keyup", (e) => {
    document.querySelector(".department").innerHTML = e.target.value;
  });
  ExperienceYear.addEventListener("keyup", (e) => {
    document.querySelector(".exyear").innerHTML = e.target.value;
  });
  Companyname.addEventListener("keyup", (e) => {
    document.querySelector(".companyname").innerHTML = e.target.value;
  });
  Companyrole.addEventListener("keyup", (e) => {
    document.querySelector(".job-role").innerHTML = e.target.value;
  });
  Plink.addEventListener("keyup", (e) => {
    document.querySelector(".plink").innerHTML = e.target.value;
    document.querySelector(".plink").href = e.target.value;
  });
  Pname.addEventListener("keyup", (e) => {
    document.querySelector(".pname").innerHTML = e.target.value;
  });

  const file=document.querySelector("#image-file");
  file.addEventListener("change",()=>{
    document.querySelector(".user-image img").src=URL.createObjectURL(file.files[0]);
    document.querySelector(".plus").style.display="none"
  })
  let skills=[];
  const skillbtn=document.querySelector(".skill")
  const skillContainer=document.querySelector(".skill-container")
  skillbtn.addEventListener("click",()=>{
    checkList(Skill,skillContainer,skills)
  })
  let pdescriptions=[];
  const Projectbtn=document.querySelector(".projects")
  const projectContainer=document.querySelector(".pdes")
  Projectbtn.addEventListener("click",()=>{
    checkList(Pdes,projectContainer,pdescriptions)
  })
const company=[];
const desbtn=document.querySelector(".experience");
  const desContainer=document.querySelector(".ex-container");
  desbtn.addEventListener("click",()=>{
    checkList(Jobdes,desContainer,company)
  })
function checkList(element,container,list){
  container.innerHTML="";
  if(element.value!==""){
    let value=element.value;
    list.includes(value)?"":list.push(value);
    addSkilllist(list,container);
  }
}
function addSkilllist(skills,skillContainer){
  skills.map((skill)=>{
    skillContainer.innerHTML+=`<li>${skill}</li>`
  });
} 
const PrintCV=document.querySelector(".print-btn");
const resumeContainer=document.querySelector(".resume-tools");
PrintCV.addEventListener("click",()=>{
  PrintCV.style.display="none";
  resumeContainer.style.display="none";
  window.print();
  window.location.reload();
})

});
