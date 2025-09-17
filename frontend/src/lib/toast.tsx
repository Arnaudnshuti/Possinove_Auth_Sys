import { motion } from 'framer-motion';

// Simple toast implementation without external dependencies
export const showInfoToast = (message: string) => {
  const toast = document.createElement('div');
  toast.className = 'fixed top-4 right-4 z-50 max-w-sm w-full bg-blue-600 text-white rounded-md shadow-lg p-3 transform transition-all duration-300';
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">ℹ️</div>
      <div class="text-sm font-medium">${message}</div>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
    toast.style.opacity = '1';
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
};

export const showSuccessToast = (message: string) => {
  const toast = document.createElement('div');
  toast.className = 'fixed top-4 right-4 z-50 max-w-sm w-full bg-green-600 text-white rounded-md shadow-lg p-3 transform transition-all duration-300';
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
      <div class="text-sm font-medium">${message}</div>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
    toast.style.opacity = '1';
  }, 10);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
};

export const showErrorToast = (message: string) => {
  const toast = document.createElement('div');
  toast.className = 'fixed top-4 right-4 z-50 max-w-sm w-full bg-red-600 text-white rounded-md shadow-lg p-3 transform transition-all duration-300';
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✕</div>
      <div class="text-sm font-medium">${message}</div>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
    toast.style.opacity = '1';
  }, 10);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
};


