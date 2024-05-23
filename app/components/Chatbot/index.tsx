'use client'
import { useEffect } from 'react';

declare global {
    interface Window {
        watsonAssistantChatOptions: any;
    }
}

// Componente responsável por integrar o chatbot nas páginas do projeto.
const WatsonChat = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.watsonAssistantChatOptions = {
                integrationID: "1accad11-a508-4f15-9b09-11084494e3fb", // The ID of this integration.
                region: "us-east",
                serviceInstanceID: "f69312cc-ff86-4038-a39e-75c55a32a9bc",
                onLoad: async (instance: any) => { await instance.render(); }
            };

            const scriptSrc = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
            if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
                const t = document.createElement('script');
                t.src = scriptSrc;
                document.head.appendChild(t);
            }
        }
    }, []);
    return null;
};

export default WatsonChat;