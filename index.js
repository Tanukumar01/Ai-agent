const fs = require("fs");
const { exec } = require("child_process");
const axios = require("axios");
const readlineSync = require("readline-sync");

// Replace with your free OpenRouter API key
const API_KEY = "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";
const MODEL = "openai/gpt-3.5-turbo"; // Or try: "mistralai/mixtral-8x7b", "anthropic/claude-3-haiku"

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
  
    const basePrompt = `
  You're an AI assistant. Your job is to complete this task:
  "${userTask}"
  
  You MUST respond with valid language code ONLY .
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
          basePrompt += `\n\n📝 USER FEEDBACK: ${reason}\n\nUpdate the code accordingly.`;
        }
      } else {
        const reason = readlineSync.question("🛠️ What went wrong? Describe the issue: ");
        basePrompt += `\n\n📝 ERROR: ${reason}\n\nFix the issue and try again.`;
      }
    }
  }
  
runAgent();
