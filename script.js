function getSolution() {
  const problem = document.getElementById("problemInput").value;
  const answerBox = document.getElementById("answerBox");
  const solutionText = document.getElementById("solutionText");

  if (problem.trim() === "") {
    alert("كتب المشكل ديالك أولاً");
    return;
  }

  // حلول تجريبية (MVP)
  let solution = "حاول تعاود تشغيل الجهاز، و تسد البرامج لي خدامة فالخلفية.";

  if (problem.toLowerCase().includes("pc")) {
    solution = "✔️ سد البرامج الثقيلة\n✔️ دير Restart\n✔️ نقّي الـ Temp files\n✔️ نقص Startup apps";
  }

  solutionText.innerText = solution;
  answerBox.classList.remove("hidden");
}
