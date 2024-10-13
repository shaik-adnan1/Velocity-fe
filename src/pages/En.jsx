import React, { useState } from 'react';
import './En.css'; // Custom CSS for the EN page

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
    { code: 'DE', name: 'Deutsch' },
    { code: 'ZH', name: '中文' },
    { code: 'JA', name: '日本語' },
    { code: 'RU', name: 'Русский' },
    { code: 'AR', name: 'العربية' },
    { code: 'HI', name: 'हिन्दी' },
    { code: 'PT', name: 'Português' },
    { code: 'IT', name: 'Italiano' },
    { code: 'KO', name: '한국어' },
    { code: 'NL', name: 'Nederlands' },
    { code: 'TR', name: 'Türkçe' },
    { code: 'VI', name: 'Tiếng Việt' },
    { code: 'PL', name: 'Polski' },
    { code: 'TH', name: 'ไทย' },
    { code: 'HE', name: 'עברית' },
    { code: 'SV', name: 'Svenska' },
    { code: 'FI', name: 'Suomi' },
    { code: 'DA', name: 'Dansk' },
    { code: 'NO', name: 'Norsk' },
    { code: 'EL', name: 'Ελληνικά' },
    { code: 'UK', name: 'Українська' },
    { code: 'HU', name: 'Magyar' },
    { code: 'CS', name: 'Čeština' },
    { code: 'RO', name: 'Română' },
    { code: 'ID', name: 'Bahasa Indonesia' },
    { code: 'MS', name: 'Bahasa Melayu' },
    { code: 'FA', name: 'فارسی' }
  ];

  const handleLanguageChange = (langCode) => {
    setSelectedLanguage(langCode);
  };

  return (
    <div className="language-container">
      <h1 className="language-heading">Select Your Language</h1>
      <div className="language-options">
        {languages.map((language) => (
          <button
            key={language.code}
            className={`language-btn ${selectedLanguage === language.code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.name}
          </button>
        ))}
      </div>
      <p className="selected-language">Selected Language: {languages.find(lang => lang.code === selectedLanguage)?.name}</p>
    </div>
  );
};

export default Language;
