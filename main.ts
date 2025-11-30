let resume =document.querySelector("button");
resume?.addEventListener( "click",(even)=>{
even.preventDefault();
let Name=document.getElementById("name") as HTMLInputElement;
let Email=document.getElementById("email") as HTMLInputElement;
let Phone=document.getElementById("phone") as HTMLInputElement;
let Company=document.getElementById("company") as HTMLInputElement;
let CompanyDescrib=document.getElementById("companydescription") as HTMLInputElement;
let Education=document.getElementById("Education") as HTMLInputElement;
let Skills=document.getElementById("Skills") as HTMLInputElement;

if(
Name&&
Email&&
Phone&&
Company&&
CompanyDescrib&&
Education&&
Skills

){
let NameValue=Name.value;
let EmailValue=Email.value;
let PhoneValue=Phone.value;
let CompanyValue=Company.value;
let CompanyDescribValue=CompanyDescrib.value;
let EducationValue=Education.value;
let SkillsValue=Skills.value






// input
let resumeOutput=`
<h2>RESUME</h2>
<br>
<h3>INFORMATION</h3>
<p>Name:${NameValue}  </p>
<p>Email: ${EmailValue}</p>
<p>Phone:${PhoneValue}  </p>

<br>

<h3>EXPERIENCE</h3>
<p>Company: ${CompanyValue}  </p>
<p>Company Description: ${CompanyDescribValue}  </p>
<br>
<h3>EDUCATION</h3>
<p>Education: ${EducationValue}  </p>



<br>
<h3>SKILLS</h3>
<p>Skills: ${SkillsValue} </p>
`

let resumeOutputElement=document.getElementById("output-resume")
if(resumeOutputElement){
    resumeOutputElement.innerHTML=resumeOutput

}else{
    console.error('The resume output element is missing');
}



}
console.log(resume);
























}
)