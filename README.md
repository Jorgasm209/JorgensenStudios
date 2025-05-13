
# Jorgensen Studios – Tribute Album Site

This is a custom-built tribute album website created to honor the 13-year love story of Brian and Nancy, culminating in their wedding on October 25, 2025.

The site includes:
- A fully responsive, AMOLED-friendly album experience
- Synced lyrics (LRC) for each track
- Track notes, dedication, and engagement photo integration
- Guest message system and emoji reactions (frontend only)
- Individual and full-album downloads
- Future integration compatibility with LyricSync Pro

---

## 🌐 Project Structure

```
/public
  /tracks
    /01-that-kiss/
      ├── track.mp3
      ├── lyrics.lrc
      └── note.json
    /02-we-held-on/
    /03-more-than-just-october/
  /img
    ├── hero.jpg
    ├── album-cover.jpg
    └── logo.png                   # B&N tribute logo

/src
  └── components, layouts, player logic
README.md
.gitignore
package.json
```

---

## 🚀 How to Deploy (GitHub Desktop)

1. **Clone your GitHub repo** (if not already)
2. **Unzip the package contents** into your local repo folder
3. **Open GitHub Desktop**
4. Commit changes with message: `Initial tribute site build`
5. Push to `main`
6. Connect GitHub repo to **Cloudflare Pages**  
   - Build command: `npm run build`  
   - Output folder: `build`
   - Domain: `jorgensenstudios.net`

---

## 💬 Features

- Full audio playback with waveform animation
- LRC-synced lyric display
- Track-specific personal notes
- Downloadable MP3s + PDF lyric book
- Guestbook + reactions (frontend)
- Splash page with dedication preview

---

## 🎧 LyricSync Pro Integration (Future Ready)

This structure is compatible with the planned LyricSync Pro app, including:

- Default export format for new tracks
- Editable lyric and metadata files
- Easy folder overwrite for updates
- JSON-based track index for automation

---

## ✅ Build Integrity & Recovery Safeguards

- Modular, isolated track structure
- Checkpointed build steps
- ZIP created only from validated, tested files
- README and meta files managed separately
- Rebuild-ready and scalable for future tracks

---

## 📄 License

Personal project — not for redistribution without written permission from Jorgensen Studios.
