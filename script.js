function calculateSalary() {
    const experience = document.getElementById("experience").value;
    const jobType = document.getElementById("job-type").value;
    const post = document.getElementById("post").value;
    const location = document.getElementById("location").value;

    let baseSalary = 0;

    // Determine base salary based on job type and post
    if (jobType === "IT") {
        if (post === "junior") baseSalary = 40000;
        else if (post === "mid") baseSalary = 60000;
        else if (post === "senior") baseSalary = 80000;
    } else if (jobType === "Healthcare") {
        if (post === "junior") baseSalary = 35000;
        else if (post === "mid") baseSalary = 55000;
        else if (post === "senior") baseSalary = 75000;
    } else if (jobType === "Education") {
        if (post === "junior") baseSalary = 30000;
        else if (post === "mid") baseSalary = 50000;
        else if (post === "senior") baseSalary = 70000;
    }

    // Adjust salary based on years of experience
    baseSalary += experience * 1000;

    // Adjust salary based on location
    if (location === "urban") baseSalary *= 1.2;
    else if (location === "suburban") baseSalary *= 1.1;
    else if (location === "rural") baseSalary *= 1.0;

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = `Estimated Salary: ₹${baseSalary.toLocaleString()}`;
}
