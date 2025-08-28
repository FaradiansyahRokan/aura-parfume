import React from 'react';

const Icon = ({ name, className }) => {
  const icons = { 'Sparkles': '✧', 'FlaskConical': '⚗️', 'MessageCircle': '“', 'Search': '⚲', 'Send': '→' };
  return <span className={className}>{icons[name] || '?'}</span>;
};

export default Icon;