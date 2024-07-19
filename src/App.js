import React from 'react';
import './App.css'; // Import the custom CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite scroll your Google search result page</h1>
        <div className="made-by">
          <p>Made by Hritik</p>
          <div className="github-container">
            <p className="heart">❤️</p>
            <a
              href="https://github.com/rhrits/"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <img src="/github-icon.png" alt="GitHub" className="github-icon" />
            </a>
            <p className="check-my-github">Check my GitHub</p>
          </div>
        </div>
        <a
          href="/google-infinite-scroll-extension.zip"
          download
          className="download-button"
        >
          Download Extension
        </a>
        <div className="video-info">
          <h3>Follow the steps in the video</h3>
        </div>
        
        <div className="video-container">
          <video width="600" controls>
            <source src="/videos/steps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <br></br>
          <div className="instructions">
          <h2>Steps to use this extension</h2>
          <ul>
            <li>Click the "Download Extension" button.</li>
            <li>Unzip the downloaded file.</li>
              <li>Open Chrome and go to <code>chrome://extensions/</code>.</li>
              <li>Enable "Developer mode" by clicking the toggle switch at the top right.</li>
            <li>Click the "Load unpacked" button.</li>
            <li>Select the unzipped folder containing your extension files.</li>
            <li>Now refresh the page.</li>
            <li>You are ready to use the extension!</li>
          </ul>
          </div>

        
      </header>
    </div>
  );
}

export default App;
