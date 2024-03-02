import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    organization: import.meta.env.VITE_OPENAI_ORGANIZATION_ID,
    dangerouslyAllowBrowser: true
});

async function generateText() {
    try {
        const inputText = document.getElementById('inputText').value;
        
        console.log('Generating text...');
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: inputText }],
            model: "gpt-3.5-turbo",
        });

        console.log('Generated text:', completion.choices[0]);

        const answer = completion.choices[0].message.content;
        document.getElementById('outputText').innerText = answer;
    } catch (error) {
        console.error('Error:', error);
    }
}

console.log('main.js loaded');

document.getElementById('generateButton').addEventListener('click', generateText);
