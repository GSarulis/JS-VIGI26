const salaryCheckerForm = document.querySelector("form");
console.log(salaryCheckerForm);

salaryCheckerForm.addEventListener("submit", handleSalaryCheckerForm);

function handleSalaryCheckerForm(event) {
  event.preventDefault();
  const field = document.querySelector("select[name=workingfield]").value;
  const gender = document.querySelector("input[name=gender]:checked").value;
  const position = document.querySelector("input[name='position']".value);
  const expierence = document.querySelector("input[name=experience]").value;

  //   console.log(field.value);
  //   console.log(gender.value);
  //   console.log(position.value);
  //   console.log(expierence.value);

  // managment 48000, IT 91000, construction 66000, pharmacy 128000
  // women gets 17% less tehn man
  // 0-2 minus 50%, 2-5, +5 plius 50%
  if (field === "management") {
    const genderSalary = calculateGenderSalary(gender, 48000);
    const finalSalary = experienceSalary(expierence, genderSalary);
    alert(`Avarage salary is $${finalSalary}`);
  } else if (field === "it") {
    const genderSalary = calculateGenderSalary(gender, 91000);
    const finalSalary = experienceSalary(expierence, genderSalary);
    alert(`Avarage salary is $${finalSalary}`);
  } else if (field === "construction") {
    const genderSalary = calculateGenderSalary(gender, 66000);
    const finalSalary = experienceSalary(expierence, genderSalary);
    alert(`Avarage salary is $${finalSalary}`);
  } else {
    const genderSalary = calculateGenderSalary(gender, 128000);
    const finalSalary = experienceSalary(expierence, genderSalary);
    alert(`Avarage salary is $${finalSalary}`);
  }
}

function calculateGenderSalary(gender, salary) {
  if (gender === "male") {
    return salary;
  } else if (gender === "female") {
    return salary * 0.83;
  } else {
    return salary * 0.91;
  }
}

function experienceSalary(experience, salary) {
  const flooredExperience = Math.floor(experience);
  if (experience >= 0 && experience <= 2) {
    return salary * 0.5;
  } else if (flooredExperience >= 3 && flooredExperience <= 5) {
    return salary;
  } else {
    return salary * 1.5;
  }
}
