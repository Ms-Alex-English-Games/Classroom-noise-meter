# 🎧 Ms Alex's Classroom Corner

An interactive classroom management web application featuring live sound/noise monitoring and customizable timer tools designed for elementary and middle school settings.

---

## 🌟 Features

* **Live Noise Meter**: Uses Web Audio API to detect classroom ambient volume levels in real-time.
* **Interactive Visual Themes**:
  * **🌤️ Little Learners**: A friendly sun graphic that adjusts its expression and awards stars for maintaining quiet working environments.
  * **🐲 Mythical Kingdom**: A dragon-themed bookshelf scene where excessive noise causes books to slide and fall.
* **Built-in Timers**: Preset 1, 4, 8, and 15-minute quick timers with extra time extension controls (+1 min / +2 min) and finished alerts.
* **Privacy-First Design**: Processes all audio locally in the client browser—no sound data is recorded, saved, or transmitted to any server.

---

## 🚀 Live Demo & Testing

Once GitHub Pages is enabled on this repository, you can test the application live in your browser:
`https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/`

> **Note on Microphone Access:** Browsers require a secure `https://` context to grant microphone permissions[cite: 1]. Ensure you are accessing the tool via your live GitHub Pages link rather than opening local file paths directly (`file://`)[cite: 1].

---

## 🧩 Embedding in e-me / WordPress

To embed this interactive tool inside your **e-me** blog post, page, or WordPress site:

### Method 1: WordPress Custom HTML Block (Recommended)
Add a **Custom HTML** block in the editor and paste the code below (replace `YOUR_GITHUB_PAGES_URL` with your actual live link):

```html
<iframe 
  src="YOUR_GITHUB_PAGES_URL" 
  width="100%" 
  height="750px" 
  style="border: none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" 
  allow="microphone" 
  allowfullscreen>
</iframe>
