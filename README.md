# 🎧 Ms Alex's Classroom Corner

An interactive classroom management web application featuring live sound/noise monitoring and customizable timer tools designed for elementary and middle school settings.

---

## 🌟 Features

* **Live Noise Meter**: Uses the Web Audio API to detect classroom ambient volume levels in real-time.
* **Interactive Visual Themes**:
  * **🌤️ Young Learners**: A bright sun with animated rays that changes expressions based on noise level and awards stars only when students maintain complete quietness.
  * **🐲 Dragons & Books**: A dragon-themed bookshelf scene where ambient noise wakes up the dragons and causes books to slide and fall off the shelf.
* **Built-in Timers**: Preset 1, 4, 8, and 15-minute quick timers with extension controls (+1m / +2m), pause/resume features, and finished sound alerts.
* **Interactive Controls**: Includes a noise test button to preview sound thresholds and audio effects without needing actual classroom noise.
* **Privacy-First Design**: Processes all audio locally inside the browser—no sound data is ever recorded, saved, or transmitted to any server.

---

## 🚀 Live Demo & Testing

Once GitHub Pages is enabled on this repository, you can test the application live in your browser:
`https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/`

> **Note on Microphone Access:** Browsers require an `https://` context or localhost to grant microphone permissions. Ensure you access the tool via your live GitHub Pages link rather than opening local file paths directly (`file://`).

---

## 🧩 Embedding in e-me / LMS / WordPress

To embed this interactive tool inside your **e-me** post, content page, or any LMS/WordPress site:

### Method 1: Custom HTML Block / IFrame (Recommended)
Add a **Custom HTML** block in your editor and paste the code below (replace `YOUR_GITHUB_PAGES_URL` with your actual live link):

```html
<iframe 
  src="YOUR_GITHUB_PAGES_URL" 
  width="100%" 
  height="800px" 
  style="border: none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" 
  allow="microphone" 
  allowfullscreen>
</iframe>
