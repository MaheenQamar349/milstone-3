var resume = document.querySelector("button");
resume === null || resume === void 0 ? void 0 : resume.addEventListener("click", function (even) {
    even.preventDefault();
    var Name = document.getElementById("name");
    var Email = document.getElementById("email");
    var Phone = document.getElementById("phone");
    var Company = document.getElementById("company");
    var CompanyDescrib = document.getElementById("companydescription");
    var Education = document.getElementById("Education");
    var Skills = document.getElementById("Skills");
    if (Name &&
        Email &&
        Phone &&
        Company &&
        CompanyDescrib &&
        Education &&
        Skills) {
        var NameValue = Name.value;
        var EmailValue = Email.value;
        var PhoneValue = Phone.value;
        var CompanyValue = Company.value;
        var CompanyDescribValue = CompanyDescrib.value;
        var EducationValue = Education.value;
        var SkillsValue = Skills.value;
        // input
        var resumeOutput = "\n<h2>RESUME</h2>\n<br>\n<h3>INFORMATION</h3>\n<p>Name:".concat(NameValue, "  </p>\n<p>Email: ").concat(EmailValue, "</p>\n<p>Phone:").concat(PhoneValue, "  </p>\n\n<br>\n\n<h3>EXPERIENCE</h3>\n<p>Company: ").concat(CompanyValue, "  </p>\n<p>Company Description: ").concat(CompanyDescribValue, "  </p>\n<br>\n<h3>EDUCATION</h3>\n<p>Education: ").concat(EducationValue, "  </p>\n\n\n\n<br>\n<h3>SKILLS</h3>\n<p>Skills: ").concat(SkillsValue, " </p>\n");
        var resumeOutputElement = document.getElementById("output-resume");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    console.log(resume);
});
