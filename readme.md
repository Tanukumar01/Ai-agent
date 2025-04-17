# 🤖 AI-Agent: Task-Automating Code Generator

This is a terminal-based Node.js project that acts as an AI assistant. It takes a user's natural language task, generates JavaScript code using OpenRouter AI models, and executes it — all with interactive approval and iteration.

---

## 🚀 Features

- Accepts task input from the user via terminal
- Uses OpenRouter API (GPT-3.5, Claude, Mixtral, etc.) to generate JavaScript code
- Shows the generated code for user approval before execution
- Runs the code using Node.js and displays the result
- Supports iteration based on feedback until the user is satisfied

---

## 📦 Installation

```bash
git clone https://github.com/Tanukumar01/Ai-agent.git
cd Ai-agent
npm install
```

---

## 🔐 Setup

1. Get your OpenRouter API key from [openrouter.ai](https://openrouter.ai)
2. Create a `.env` file in the root directory and add your API key:

```env
OPENROUTER_API_KEY=sk-your-api-key-here
```

---

## ▶️ Usage

```bash
npm start
```

Follow the prompts in your terminal to enter a task, review AI-generated code, and execute it if approved.

---

## 📄 Example

```bash
💬 What task should the AI perform?
> Create a function that returns the square of a number

🔁 Attempt 1:

📋 AI-generated code:

function square(num) {
  return num * num;
}

console.log(square(5));

✅ Approve and run this code? (yes/no): 
> yes

🚀 Running task.js...

✅ Output:
25

🎯 Are you satisfied with the result? (yes/no):
> yes

🎉 Task completed successfully!
```

---

## 🛠️ Technologies Used

- Node.js  
- OpenRouter API  
- Axios  
- Readline-Sync  
- dotenv

---

## ⚠️ Warning

This script runs AI-generated JavaScript code locally using `node`. Always review the code before approving it to avoid any unintended behavior.

---

## 🐛 Issues & Contributions

Have feedback or ideas to improve this tool?  
Feel free to [open an issue](https://github.com/Tanukumar01/Ai-agent/issues) or submit a pull request.

---

## 📄 License

This project is licensed under the ISC License.
```

---

Let me know if you'd like the example to be more advanced (like a file operation or API request), or if you'd like to add GIF/screenshots next!