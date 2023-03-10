document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        chrome.tabs.update({ url: 'camera.html' });
      }
    });
  });