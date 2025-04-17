# 🤖 AI-Agent: Task-Automating Code Generator

This project is an interactive Node.js-based AI agent that generates, reviews, and runs code using OpenRouter's AI models (like GPT-3.5, Claude, Mixtral). It allows users to input a task and automatically generates a runnable JavaScript solution using AI.

## 🚀 Features

- Takes natural language task input from user
- Uses OpenRouter API to generate code with models like GPT-3.5, Claude, Mixtral, etc.
- Lets the user approve or reject the code before execution
- Executes the code using Node.js and displays the output
- Provides an iterative loop to refine or retry until the task is done

---

## 🧠 How It Works

1. You describe the task you want to automate.
2. The AI generates JavaScript code to perform the task.
3. You review and approve the code.
4. The code is executed directly in Node.js.
5. You can give feedback or retry until you're satisfied.

---

## 📦 Installation

```bash
git clone https://github.com/Tanukumar01/Ai-agent.git
cd Ai-agent
npm install
```

---

## 🔐 Setup

1. Get your free OpenRouter API key from [openrouter.ai](https://openrouter.ai)
2. Create a `.env` file in the root of the project:

```env
OPENROUTER_API_KEY=sk-your-key-here
```

---

## ▶️ Usage

```bash
npm start
```

Follow the prompts in the terminal to input your task, approve generated code, and execute it.

---

## 🛠️ Technologies Used

- Node.js
- OpenRouter API
- Axios
- Readline-Sync
- Puppeteer (for future browser automation)
- dotenv (for secure API key management)

---

## ⚠️ Disclaimer

This agent executes AI-generated code on your local machine. Be careful and review the code before execution. Malicious or buggy code may cause unintended behavior.

---

## 🧪 Example

```bash
💬 What task should the AI perform?
> Scrape the title of https://example.com

📋 AI-generated code:
const puppeteer = require('puppeteer');
...

✅ Approve and run this code? (yes/no):
> yes

✅ Output:
Example Domain
```

---

## 🐛 Issues / Contribute

Feel free to open issues or submit PRs to improve the project.

GitHub: [Tanukumar01/Ai-agent](https://github.com/Tanukumar01/Ai-agent)

---

## 📄 License

This project is licensed under the ISC License.

---

```

Let me know if you’d like a shorter version or if you’re adding more features (like support for other languages or sandboxing)—we can update it accordingly!