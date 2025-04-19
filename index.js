const fs = require("fs");
const { exec } = require("child_process");
const axios = require("axios");
const readlineSync = require("readline-sync");


const API_KEY = "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";
const MODEL = "openai/gpt-3.5-turbo"; 

async function askAI(prompt) {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: MODEL,
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.choices[0].message.content;
}

async function runAgent() {
    const userTask = readlineSync.question("💬 What task should the AI perform? ");
  
    let basePrompt = `
  You're an AI assistant. Your job is to complete this task:
  "${userTask}"
  
  You MUST respond with valid language code ONLY not mention the name of lannguage .
  This will run directly using Node.js , this will result in any language, do not use tripledots and don't mentions the name languge .
  `;
  
    let attempts = 0;
    let isTaskDone = false;
  
    while (!isTaskDone) {
      attempts++;
      console.log(`\n🔁 Attempt ${attempts}:\n`);
  
      const aiResponse = await askAI(basePrompt);
      const match = aiResponse.match(/```(?:js)?\n([\s\S]*?)```/);
      const code = match ? match[1] : aiResponse;
  
      console.log("\n📋 AI-generated code:\n" + code);
  
      const approve = readlineSync.question("\n✅ Approve and run this code? (yes/no): ");
      if (approve.toLowerCase() !== "yes") {
        console.log("❌ Cancelled.");
        return;
      }
  
      fs.writeFileSync("task.js", code);
      console.log("\n🚀 Running task.js...\n");
  
      const success = await new Promise((resolve) => {
        exec("node task.js", (err, stdout, stderr) => {
          if (err || stderr) {
            console.error("❌ Error:\n" + (stderr || err.message));
            resolve(false);
          } else {
            console.log("✅ Output:\n" + stdout);
            resolve(true);
          }
        });
      });
  
      if (success) {
        const happy = readlineSync.question("🎯 Are you satisfied with the result? (yes/no): ");
        if (happy.toLowerCase() === "yes") {
          console.log("🎉 Task completed successfully!");
          isTaskDone = true;
        } else {
          const reason = readlineSync.question("🛠️ What should be improved or changed? ");
          basePrompt = `\n\n correct this ${code} according to user as user want to ${reason}\n\n Update the code accordingly.`;
        }
      } else {
        const reason = readlineSync.question("🛠️ What went wrong? Describe the issue: ");
        basePrompt = `\n\n improve the code according to above condition ${reason}\n\n Fix the issue and try again.`;
      }
    }
  }
  
runAgent();
