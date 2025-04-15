# 💄 AI Makeup & AR Filter Studio

A mobile-first application that enables users to create and apply real-time augmented reality (AR) filters and AI-powered makeup enhancements using the [DeepAR SDK](https://docs.deepar.ai/). Users can also save, manage, and share their custom filter and makeup presets.

---

## ✨ Features

- 🎨 Create & apply real-time AR filters using DeepAR
- 🤖 AI-enhanced makeup: skin smoothing, lipstick, eyeliner, and more
- 🧑‍🎨 User-created filter + makeup presets
- 📁 Upload and store filters on AWS S3
- 🔐 Secure user authentication
- 🌐 REST API powered by Express.js
- 📱 Mobile frontend using React Native

---

## 📱 Tech Stack

| Layer        | Technology       |
|--------------|------------------|
| Frontend     | React Native     |
| AR & AI      | DeepAR SDK       |
| Backend API  | Express.js       |
| Database     | PostgreSQL / MySQL with Knex.js |
| Storage      | AWS S3           |
| Auth         | JWT              |

---

## 🧠 Database Schema Highlights

- `users`: registered users with avatars
- `filters`: uploaded AR filter files (ZIP) on S3
- `user_filters`: connects users to filters, handles visibility
- `makeup_presets`: user-defined makeup combinations
- `makeup_layers`: each makeup element (lipstick, blush, etc.)
- `user_filter_presets`: bridges filters and makeup presets

---

## 🏗️ Project Structure

📦 server/ ┣ 📂 migrations/ ┣ 📂 controllers/ ┣ 📂 routes/ ┗ 📄 index.js 📦 mobile/ ┣ 📂 src/ ┗ 📄 App.js

---

## 🚀 Getting Started

### Backend

```bash
cd server
npm install
npx knex migrate:latest
npm start
