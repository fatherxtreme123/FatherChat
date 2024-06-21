function handleFiles(files) {
    const uploadArea = document.getElementById('upload-area');
    uploadArea.style.display = 'flex'; 

    for (const file of files) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.dataset.fileName = file.name;
        fileItem.dataset.fileType = file.type;
        fileItem.dataset.fileContent = URL.createObjectURL(file);

        if (file.type.startsWith('image/')) {
            fileItem.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="${file.name}" width="50" height="50"> <span class="remove-button" onclick="removeFile(this)">✖</span>`;
        } else {
            fileItem.innerHTML = `<div class="file-icon"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V8h-5V3H6zm2 4h8v2H8V8zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/></svg></div><div class="file-name">${file.name}</div>`;
        }

        uploadArea.appendChild(fileItem);
    }
}

function removeFile(element) {
    element.parentElement.remove();
    const uploadArea = document.getElementById('upload-area');
    if (uploadArea.children.length === 0) {
        uploadArea.style.display = 'none'; 
    }
}

function openSettings() {
    document.getElementById('settings-modal').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settings-modal').style.display = 'none';
}

function updateModelOptions() {
    const modelProvider = document.getElementById('model-provider').value;
    const modelSelect = document.getElementById('model');
    const apiHostInput = document.getElementById('api-host');
    modelSelect.innerHTML = ''; 
    let models = [];
    if (modelProvider === 'openai') {
        models = [
            "gpt-4o", "gpt-4o-2024-05-13", "gpt-4-turbo", "gpt-4-turbo-2024-04-09",
            "gpt-4-turbo-preview", "gpt-4-0125-preview", "gpt-4-1106-preview",
            "gpt-4-vision-preview", "gpt-4-1106-vision-preview", "gpt-4", "gpt-4-0613",
            "gpt-4-32k", "gpt-4-32k-0613", "gpt-3.5-turbo-0125", "gpt-3.5-turbo",
            "gpt-3.5-turbo-1106", "gpt-3.5-turbo-instruct", "gpt-3.5-turbo-16k",
            "gpt-3.5-turbo-0613", "gpt-3.5-turbo-16k-0613"
        ];
        apiHostInput.value = 'https://api.openai.com/v1';
    } else if (modelProvider === 'groq') {
        models = [
            "llama3-8b-8192", "llama3-70b-8192", "mixtral-8x7b-32768", "gemma-7b-it"
        ];
        apiHostInput.value = 'https://api.groq.com/openai/v1';
    }

    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

function restoreDefaults() {
    document.getElementById('model-provider').value = 'openai';
    document.getElementById('api-key').value = '';
    document.getElementById('api-host').value = 'https://api.openai.com/v1';
    document.getElementById('model').value = 'gpt-4o';
    document.getElementById('temperature').value = '0.0';
    document.getElementById('top-p').value = '0.0';
    document.getElementById('presence-penalty').value = '0.0';
    document.getElementById('frequency-penalty').value = '0.0';
}

function saveSettings() {
    alert('Settings saved!');
    closeSettings();
}

function renderMarkdown(markdownText) {
    const renderer = new marked.Renderer();

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        breaks: true,
        pedantic: false,
        smartLists: true,
        smartypants: false
    });

    const combinedText = markdownText.replace(/$$\n([\s\S]*?)\n$$/g, (match, p1) => {
        return `[${p1.replace(/\n/g, ' ')}]`;
    });

    const html = marked.parse(combinedText);

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = html;

    renderMathInElement(tempContainer, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }, 
            { left: "\\[", right: "\\]", display: true },
            { left: "\$", right: "\$", display: false }, 
            { left: "[", right: "]", display: false }, 
            { left: "[", right: "]", display: true }  
        ],
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"], 
        throwOnError: false 
    });

    return tempContainer.innerHTML;
}

function handleFiles(files) {
    const uploadArea = document.getElementById('upload-area');
    uploadArea.style.display = 'flex'; 

    for (const file of files) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.dataset.fileName = file.name;
        fileItem.dataset.fileType = file.type;
        fileItem.dataset.fileContent = URL.createObjectURL(file);

        if (file.type.startsWith('image/')) {
            fileItem.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="${file.name}" width="50" height="50"> <span class="remove-button" onclick="removeFile(this)">✖</span>`;
        } else {
            fileItem.innerHTML = `<div class="file-icon"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V8h-5V3H6zm2 4h8v2H8V8zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/></svg></div><div class="file-name">${file.name}</div>`;
        }

        uploadArea.appendChild(fileItem);
    }
}

function removeFile(element) {
    element.parentElement.remove();
    const uploadArea = document.getElementById('upload-area');
    if (uploadArea.children.length === 0) {
        uploadArea.style.display = 'none'; 
    }
}

function openSettings() {
    document.getElementById('settings-modal').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settings-modal').style.display = 'none';
}

function updateModelOptions() {
    const modelProvider = document.getElementById('model-provider').value;
    const modelSelect = document.getElementById('model');
    const apiHostInput = document.getElementById('api-host');
    modelSelect.innerHTML = ''; 
    let models = [];
    if (modelProvider === 'openai') {
        models = [
            "gpt-4o", "gpt-4o-2024-05-13", "gpt-4-turbo", "gpt-4-turbo-2024-04-09",
            "gpt-4-turbo-preview", "gpt-4-0125-preview", "gpt-4-1106-preview",
            "gpt-4-vision-preview", "gpt-4-1106-vision-preview", "gpt-4", "gpt-4-0613",
            "gpt-4-32k", "gpt-4-32k-0613", "gpt-3.5-turbo-0125", "gpt-3.5-turbo",
            "gpt-3.5-turbo-1106", "gpt-3.5-turbo-instruct", "gpt-3.5-turbo-16k",
            "gpt-3.5-turbo-0613", "gpt-3.5-turbo-16k-0613"
        ];
        apiHostInput.value = 'https://api.openai.com/v1';
    } else if (modelProvider === 'groq') {
        models = [
            "llama3-8b-8192", "llama3-70b-8192", "mixtral-8x7b-32768", "gemma-7b-it"
        ];
        apiHostInput.value = 'https://api.groq.com/openai/v1';
    }

    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

function restoreDefaults() {
    document.getElementById('model-provider').value = 'openai';
    document.getElementById('api-key').value = '';
    document.getElementById('api-host').value = 'https://api.openai.com/v1';
    document.getElementById('model').value = 'gpt-4o';
    document.getElementById('temperature').value = '0.0';
    document.getElementById('top-p').value = '0.0';
    document.getElementById('presence-penalty').value = '0.0';
    document.getElementById('frequency-penalty').value = '0.0';
}

function saveSettings() {
    alert('Settings saved!');
    closeSettings();
}

function renderMarkdown(markdownText) {
    const renderer = new marked.Renderer();

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        breaks: true,
        pedantic: false,
        smartLists: true,
        smartypants: false
    });

    const combinedText = markdownText.replace(/$$\n([\s\S]*?)\n$$/g, (match, p1) => {
        return `[${p1.replace(/\n/g, ' ')}]`;
    });

    const html = marked.parse(combinedText);

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = html;

    renderMathInElement(tempContainer, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }, 
            { left: "\\[", right: "\\]", display: true },
            { left: "\$", right: "\$", display: false }, 
            { left: "[", right: "]", display: false }, 
            { left: "[", right: "]", display: true }  
        ],
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"], 
        throwOnError: false 
    });

    return tempContainer.innerHTML;
}

async function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
    const uploadArea = document.getElementById('upload-area');
    const files = Array.from(uploadArea.children);

    if (messageText === '' && files.length === 0) return;

    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'message user-message';

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-5 w-5 shrink-0"><path fill="currentColor" fill-rule="evenodd" d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M10.968 14.002a1 1 0 0 1-.719 1.218C7.467 15.937 5.5 18.29 5.5 21a1 1 0 1 1-2 0c0-3.729 2.69-6.8 6.25-7.717a1 1 0 0 1 1.218.72" clip-rule="evenodd"></path><path fill="currentColor" d="M17.25 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M17.25 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0"></path></svg>`;

    const content = document.createElement('div');
    content.className = 'content';

    const imagePromises = files.map(fileItem => {
        const fileType = fileItem.dataset.fileType;
        const fileName = fileItem.dataset.fileName;
        const fileContent = fileItem.dataset.fileContent;

        if (fileType.startsWith('image/')) {
            return fetch(fileContent)
                .then(response => response.blob())
                .then(blob => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                }))
                .then(base64 => {
                    const img = document.createElement('img');
                    img.src = base64;
                    img.alt = fileName;
                    img.width = 150;
                    img.height = 150;
                    img.style.cursor = 'pointer';
                    img.onclick = () => openImageModal(base64);
                    content.appendChild(img);
                    return { type: 'image_url', image_url: { url: base64 } };
                });
        } else {
            const fileLink = document.createElement('div');
            fileLink.className = 'file-item';
            fileLink.textContent = fileName;
            content.appendChild(fileLink);
            return null;
        }
    });

    const imageUrls = await Promise.all(imagePromises);

    if (messageText !== '') {
        const textElement = document.createElement('div');
        textElement.innerHTML = renderMarkdown(messageText);
        content.appendChild(textElement);
    }

    const messageButtons = document.createElement('div');
    messageButtons.className = 'message-buttons';
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>`;
    copyButton.onclick = () => copyToClipboard(messageText, copyButton);
    messageButtons.appendChild(copyButton);

    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-md"><path fill="currentColor" fill-rule="evenodd" d="M13.293 4.293a4.536 4.536 0 1 1 6.414 6.414l-1 1-7.094 7.094A5 5 0 0 1 8.9 20.197l-4.736.79a1 1 0 0 1-1.15-1.151l.789-4.736a5 5 0 0 1 1.396-2.713zM13 7.414l-6.386 6.387a3 3 0 0 0-.838 1.628l-.56 3.355 3.355-.56a3 3 0 0 0 1.628-.837L16.586 11zm5 2.172L14.414 6l.293-.293a2.536 2.536 0 0 1 3.586 3.586z" clip-rule="evenodd"></path></svg>`;
    editButton.onclick = () => editMessage(messageElement, messageText, imageUrls);
    messageButtons.appendChild(editButton);

    content.appendChild(messageButtons);

    messageElement.appendChild(avatar); 
    messageElement.appendChild(content);
    messagesContainer.appendChild(messageElement);

    messageInput.value = '';
    uploadArea.innerHTML = '';
    uploadArea.style.display = 'none';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    const aiMessageElement = document.createElement('div');
    aiMessageElement.className = 'message ai-message';

    const aiAvatar = document.createElement('div');
    aiAvatar.className = 'avatar';
    aiAvatar.innerHTML = `<img src="https://i.ibb.co/KWBWTs3/95709f7a9dda44a38e7cbb9b6cef95e5-png-tplv-0es2k971ck-image.png" alt="AI Avatar">`;

    const aiContent = document.createElement('div');
    aiContent.className = 'content';

    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    aiContent.appendChild(typingIndicator);

    aiMessageElement.appendChild(aiAvatar);
    aiMessageElement.appendChild(aiContent);
    messagesContainer.appendChild(aiMessageElement);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    aiMessageElement.aiResponses = [];
    aiMessageElement.userMessages = [messageText]; 
    aiMessageElement.currentResponseIndex = 0;

    await getAIResponse(messageText, imageUrls.filter(url => url !== null), aiContent, typingIndicator, aiMessageElement);
}

async function getAIResponse(userMessage, imageUrls, aiContent, typingIndicator, aiMessageElement) {
    const apiKey = document.getElementById('api-key').value;
    const apiHost = document.getElementById('api-host').value;
    const model = document.getElementById('model').value;
    const temperature = parseFloat(document.getElementById('temperature').value);
    const topP = parseFloat(document.getElementById('top-p').value);
    const presencePenalty = parseFloat(document.getElementById('presence-penalty').value);
    const frequencyPenalty = parseFloat(document.getElementById('frequency-penalty').value);

    const messages = [
        { role: 'system', content: 'You are a helpful assistant. You must add "$" or "$$" to any mathematical answer, such as ()[] or others, this is for Latex display.' },
        { role: 'user', content: [{ type: 'text', text: userMessage }, ...imageUrls] }
    ];

    const response = await fetch(`${apiHost}/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            messages: messages,
            temperature: temperature,
            top_p: topP,
            presence_penalty: presencePenalty,
            frequency_penalty: frequencyPenalty,
            stream: true
        })
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let aiResponse = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });

        const lines = chunk.split('\n');
        for (const line of lines) {
            if (line.trim().startsWith('data:')) {
                const jsonStr = line.trim().substring(5).trim();
                if (jsonStr !== '[DONE]') {
                    try {
                        const json = JSON.parse(jsonStr);
                        const delta = json.choices[0].delta.content;
                        if (delta) {
                            aiResponse += delta;
                            aiContent.innerHTML = renderMarkdown(aiResponse);
                            aiContent.appendChild(typingIndicator); 

                            messagesContainer.scrollTop = messagesContainer.scrollHeight;
                        }
                    } catch (e) {
                        console.error('Error parsing JSON:', e);
                    }
                }
            }
        }
    }

    typingIndicator.remove();

    aiMessageElement.aiResponses.push(aiResponse);
    aiMessageElement.userMessages.push(userMessage); // Store the user message
    aiMessageElement.currentResponseIndex = aiMessageElement.aiResponses.length - 1;

    const messageButtons = document.createElement('div');
    messageButtons.className = 'message-buttons';

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>`;
    copyButton.onclick = () => copyToClipboard(aiMessageElement.aiResponses[aiMessageElement.currentResponseIndex], copyButton);
    messageButtons.appendChild(copyButton);

    const regenerateButton = document.createElement('button');
    regenerateButton.className = 'regenerate-button';
    regenerateButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" d="M3.07 10.876C3.623 6.436 7.41 3 12 3a9.15 9.15 0 0 1 6.012 2.254V4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H15a1 1 0 1 1 0-2h1.957A7.15 7.15 0 0 0 12 5a7 7 0 0 0-6.946 6.124 1 1 0 1 1-1.984-.248m16.992 1.132a1 1 0 0 1 .868 1.116C20.377 17.564 16.59 21 12 21a9.15 9.15 0 0 1-6-2.244V20a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7.043A7.15 7.15 0 0 0 12 19a7 7 0 0 0 6.946-6.124 1 1 0 0 1 1.116-.868"></path></svg>`;
    regenerateButton.onclick = () => regenerateMessage(aiMessageElement.userMessages[aiMessageElement.currentResponseIndex], imageUrls, aiContent, aiMessageElement);
    messageButtons.appendChild(regenerateButton);

    aiContent.appendChild(messageButtons);

    if (aiMessageElement.aiResponses.length > 1) {
        const messageNavigation = document.createElement('div');
        messageNavigation.className = 'message-navigation';

        const previousButton = document.createElement('button');
        previousButton.className = 'previous-button';
        previousButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" fill-rule="evenodd" d="M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0" clip-rule="evenodd"></path></svg>`;
        previousButton.onclick = () => navigateMessage(previousButton, 'previous', aiMessageElement);
        messageNavigation.appendChild(previousButton);

        const messageIndex = document.createElement('span');
        messageIndex.className = 'message-index';
        messageIndex.textContent = `${aiMessageElement.currentResponseIndex + 1}/${aiMessageElement.aiResponses.length}`;
        messageNavigation.appendChild(messageIndex);

        const nextButton = document.createElement('button');
        nextButton.className = 'next-button';
        nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" fill-rule="evenodd" d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0" clip-rule="evenodd"></path></svg>`;
        nextButton.onclick = () => navigateMessage(nextButton, 'next', aiMessageElement);
        messageNavigation.appendChild(nextButton);

        aiContent.appendChild(messageNavigation);
    }

    updateNavigationButtons(aiMessageElement);
}

function navigateMessage(button, direction, aiMessageElement) {
    if (direction === 'previous' && aiMessageElement.currentResponseIndex > 0) {
        aiMessageElement.currentResponseIndex--;
    } else if (direction === 'next' && aiMessageElement.currentResponseIndex < aiMessageElement.aiResponses.length - 1) {
        aiMessageElement.currentResponseIndex++;
    }

    const aiContent = button.closest('.content');
    aiContent.innerHTML = renderMarkdown(aiMessageElement.aiResponses[aiMessageElement.currentResponseIndex]);

    const messageNavigation = document.createElement('div');
    messageNavigation.className = 'message-navigation';

    const previousButton = document.createElement('button');
    previousButton.className = 'previous-button';
    previousButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" fill-rule="evenodd" d="M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0" clip-rule="evenodd"></path></svg>`;
    previousButton.onclick = () => navigateMessage(previousButton, 'previous', aiMessageElement);
    messageNavigation.appendChild(previousButton);

    const messageIndex = document.createElement('span');
    messageIndex.className = 'message-index';
    messageIndex.textContent = `${aiMessageElement.currentResponseIndex + 1}/${aiMessageElement.aiResponses.length}`;
    messageNavigation.appendChild(messageIndex);

    const nextButton = document.createElement('button');
    nextButton.className = 'next-button';
    nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" fill-rule="evenodd" d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0" clip-rule="evenodd"></path></svg>`;
    nextButton.onclick = () => navigateMessage(nextButton, 'next', aiMessageElement);
    messageNavigation.appendChild(nextButton);

    aiContent.appendChild(messageNavigation);

    const messageButtons = document.createElement('div');
    messageButtons.className = 'message-buttons';

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>`;
    copyButton.onclick = () => copyToClipboard(aiMessageElement.aiResponses[aiMessageElement.currentResponseIndex], copyButton);
    messageButtons.appendChild(copyButton);

    const regenerateButton = document.createElement('button');
    regenerateButton.className = 'regenerate-button';
    regenerateButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" d="M3.07 10.876C3.623 6.436 7.41 3 12 3a9.15 9.15 0 0 1 6.012 2.254V4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H15a1 1 0 1 1 0-2h1.957A7.15 7.15 0 0 0 12 5a7 7 0 0 0-6.946 6.124 1 1 0 1 1-1.984-.248m16.992 1.132a1 1 0 0 1 .868 1.116C20.377 17.564 16.59 21 12 21a9.15 9.15 0 0 1-6-2.244V20a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7.043A7.15 7.15 0 0 0 12 19a7 7 0 0 0 6.946-6.124 1 1 0 0 1 1.116-.868"></path></svg>`;
    regenerateButton.onclick = () => regenerateMessage(aiMessageElement.userMessages[aiMessageElement.currentResponseIndex], [], aiContent, aiMessageElement);
    messageButtons.appendChild(regenerateButton);

    aiContent.appendChild(messageButtons);

    updateNavigationButtons(aiMessageElement);

    // Update the user message display
    const userMessageElement = aiMessageElement.previousElementSibling;
    const userMessageContent = userMessageElement.querySelector('.content');
    userMessageContent.innerHTML = renderMarkdown(aiMessageElement.userMessages[aiMessageElement.currentResponseIndex]);
}

function updateNavigationButtons(aiMessageElement) {
    const aiContent = aiMessageElement.querySelector('.content');
    const previousButton = aiContent.querySelector('.previous-button');
    const nextButton = aiContent.querySelector('.next-button');
    const messageIndex = aiContent.querySelector('.message-index');

    if (aiMessageElement.currentResponseIndex === 0) {
        previousButton.classList.add('disabled');
    } else {
        previousButton.classList.remove('disabled');
    }

    if (aiMessageElement.currentResponseIndex === aiMessageElement.aiResponses.length - 1) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }

    messageIndex.textContent = `${aiMessageElement.currentResponseIndex + 1}/${aiMessageElement.aiResponses.length}`;
}

function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M7 12l4 4 6-8"/></svg>`;
        setTimeout(() => {
            button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>`;
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

async function regenerateMessage(userMessage, imageUrls, aiContent, aiMessageElement) {
    aiContent.innerHTML = ''; 
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    aiContent.appendChild(typingIndicator);

    await getAIResponse(userMessage, imageUrls, aiContent, typingIndicator, aiMessageElement);
}

function openImageModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <span class="close" onclick="closeImageModal(this)">&times;</span>
            <img src="${imageSrc}" alt="Expanded Image">
        </div>
    `;
    document.body.appendChild(modal);
}

function closeImageModal(element) {
    element.parentElement.parentElement.remove();
}

function editMessage(messageElement, originalMessage, imageUrls) {
    const content = messageElement.querySelector('.content');
    const editArea = document.createElement('div');
    editArea.className = 'edit-area';

    const editTextarea = document.createElement('textarea');
    editTextarea.value = originalMessage;
    editTextarea.className = 'edit-textarea';

    const sendButton = document.createElement('button');
    sendButton.className = 'btn relative btn-primary';
    sendButton.innerHTML = '<div class="flex items-center justify-center">Send</div>';
    sendButton.onclick = async () => {
        const newMessage = editTextarea.value.trim();
        if (newMessage === '') return;

        content.innerHTML = renderMarkdown(newMessage);
        messageElement.dataset.originalMessage = newMessage;

        const aiMessageElement = messageElement.nextElementSibling;
        const aiContent = aiMessageElement.querySelector('.content');
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        aiContent.innerHTML = '';
        aiContent.appendChild(typingIndicator);

        await getAIResponse(newMessage, imageUrls, aiContent, typingIndicator, aiMessageElement);

        const messageButtons = document.createElement('div');
        messageButtons.className = 'message-buttons';

        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>`;
        copyButton.onclick = () => copyToClipboard(newMessage, copyButton);
        messageButtons.appendChild(copyButton);

        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-md"><path fill="currentColor" fill-rule="evenodd" d="M13.293 4.293a4.536 4.536 0 1 1 6.414 6.414l-1 1-7.094 7.094A5 5 0 0 1 8.9 20.197l-4.736.79a1 1 0 0 1-1.15-1.151l.789-4.736a5 5 0 0 1 1.396-2.713zM13 7.414l-6.386 6.387a3 3 0 0 0-.838 1.628l-.56 3.355 3.355-.56a3 3 0 0 0 1.628-.837L16.586 11zm5 2.172L14.414 6l.293-.293a2.536 2.536 0 0 1 3.586 3.586z" clip-rule="evenodd"></path></svg>`;
        editButton.onclick = () => editMessage(messageElement, newMessage, imageUrls);
        messageButtons.appendChild(editButton);

        content.appendChild(messageButtons);
    };

    const cancelButton = document.createElement('button');
    cancelButton.className = 'btn relative btn-secondary';
    cancelButton.innerHTML = '<div class="flex items-center justify-center">Cancel</div>';
    cancelButton.onclick = () => {
        content.innerHTML = renderMarkdown(originalMessage);
        const messageButtons = document.createElement('div');
        messageButtons.className = 'message-buttons';

        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>`;
        copyButton.onclick = () => copyToClipboard(originalMessage, copyButton);
        messageButtons.appendChild(copyButton);

        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-md"><path fill="currentColor" fill-rule="evenodd" d="M13.293 4.293a4.536 4.536 0 1 1 6.414 6.414l-1 1-7.094 7.094A5 5 0 0 1 8.9 20.197l-4.736.79a1 1 0 0 1-1.15-1.151l.789-4.736a5 5 0 0 1 1.396-2.713zM13 7.414l-6.386 6.387a3 3 0 0 0-.838 1.628l-.56 3.355 3.355-.56a3 3 0 0 0 1.628-.837L16.586 11zm5 2.172L14.414 6l.293-.293a2.536 2.536 0 0 1 3.586 3.586z" clip-rule="evenodd"></path></svg>`;
        editButton.onclick = () => editMessage(messageElement, originalMessage, imageUrls);
        messageButtons.appendChild(editButton);

        content.appendChild(messageButtons);
    };

    editArea.appendChild(editTextarea);
    editArea.appendChild(cancelButton);
    editArea.appendChild(sendButton);
    content.innerHTML = ''; 
    content.appendChild(editArea);
}

document.addEventListener('DOMContentLoaded', updateModelOptions);

document.addEventListener('DOMContentLoaded', () => {
    const closeSidebarButton = document.querySelector('.close-sidebar');
    const newChatButton = document.querySelector('.new-chat');
    const sidebar = document.querySelector('.sidebar');
    const sidebarContent = document.querySelector('.sidebar-content');
    const sidebarFooter = document.querySelector('.sidebar-footer');

    closeSidebarButton.addEventListener('click', () => {
        sidebar.classList.toggle('minimized');
        sidebarContent.style.display = sidebar.classList.contains('minimized') ? 'none' : 'block';
        sidebarFooter.style.display = sidebar.classList.contains('minimized') ? 'none' : 'block';
        newChatButton.style.display = sidebar.classList.contains('minimized') ? 'block' : 'inline-block';
        closeSidebarButton.setAttribute('title', sidebar.classList.contains('minimized') ? 'Open Sidebar' : 'Close Sidebar');
    });

    closeSidebarButton.setAttribute('title', 'Close Sidebar');
});