import React, { useState, useRef, useEffect } from 'react';
import { Send, ChevronUp } from 'lucide-react';
import styles from './ChatWidget.module.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el asistente virtual de 3KODE. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  /* Cerrado por defecto — se abre al hacer clic en el header */
  const [isMinimized, setIsMinimized] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isMinimized]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Como experto en 3KODE, puedo decirte que nuestras soluciones de IA y n8n pueden ahorrarte hasta un 40% de tiempo operativo. ¿Te gustaría agendar una breve llamada para analizar tu caso?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className={styles.chatWrapper}>
      <div className={styles.chatWindow} style={{ height: isMinimized ? 'auto' : '480px' }}>
        <div className={styles.chatHeader} onClick={() => setIsMinimized(!isMinimized)} style={{ cursor: 'pointer' }}>
          <div className={styles.headerInfo}>
            <h3>Agente 3KODE IA</h3>
            {/* Estado: En construcción — cambiar a styles.statusOnline cuando el agente esté activo */}
            <span className={styles.statusUnderConstruction}>En construcción</span>
          </div>
          {/* El chevron rota 180° cuando el widget está expandido */}
          <button className={styles.closeButton} aria-label={isMinimized ? 'Expandir chat' : 'Minimizar chat'}>
            <ChevronUp size={20} style={{ transform: isMinimized ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
          </button>
        </div>

        {!isMinimized && (
          <>
            <div className={styles.chatMessages}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.message} ${
                    msg.sender === 'bot' ? styles.botMessage : styles.userMessage
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className={`${styles.message} ${styles.botMessage}`}>
                  El agente está escribiendo...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className={styles.chatInputArea}>
              <input
                type="text"
                placeholder="Escribe tu consulta..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSend} className={styles.sendButton}>
                <Send size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;
