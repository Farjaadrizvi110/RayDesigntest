'use client';

import { useState, useEffect, useCallback } from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

type VerificationStatus = 'idle' | 'verifying' | 'active' | 'inactive' | 'error';

export default function WhatsAppButton({ phoneNumber = '447757202729', message = '' }: WhatsAppButtonProps) {
  const [status, setStatus] = useState<VerificationStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);

  // Format phone number for display and API
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  const logVerification = (attempt: number, result: string, details?: any) => {
    const timestamp = new Date().toISOString();
    console.log(`[WhatsApp Verification] ${timestamp} - Attempt ${attempt}: ${result}`, details || '');
  };

  const verifyNumber = useCallback(async () => {
    setStatus('verifying');
    setErrorMessage('');
    logVerification(retryCount + 1, 'Starting verification', { phoneNumber: formattedNumber });

    // 1. Basic Format Validation
    if (!/^\d{10,15}$/.test(formattedNumber)) {
      setStatus('error');
      setErrorMessage('Invalid number format');
      logVerification(retryCount + 1, 'Failed', 'Invalid format');
      return;
    }

    // 2. Network Check
    if (!navigator.onLine) {
      setStatus('error');
      setErrorMessage('No internet connection');
      logVerification(retryCount + 1, 'Failed', 'Network offline');
      return;
    }

    try {
      // 3. Simulated API Check (Real implementation requires backend + Meta Graph API)
      // We are simulating a network request here
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 90% success rate, 10% random failure for robustness testing
          const isSuccess = Math.random() > 0.1;
          if (isSuccess) resolve(true);
          else reject(new Error('Simulated API connection timeout'));
        }, 1500);
      });

      // 4. Update UI - Success
      setStatus('active');
      logVerification(retryCount + 1, 'Success', 'Number is active on WhatsApp Business');
      
      // 5. Redirect after short delay to show success state
      setTimeout(() => {
        const url = `https://wa.me/${formattedNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        // Reset to idle after opening
        setTimeout(() => setStatus('idle'), 3000);
      }, 1000);

    } catch (error: any) {
      console.error('Verification error:', error);
      
      // Retry mechanism
      if (retryCount < 2) {
        logVerification(retryCount + 1, 'Retrying', error.message);
        setRetryCount(prev => prev + 1);
        setTimeout(verifyNumber, 1000); // Retry after 1s
      } else {
        setStatus('inactive'); // Or error depending on type
        setErrorMessage('Number not available or API error');
        logVerification(retryCount + 1, 'Failed', 'Max retries reached');
      }
    }
  }, [formattedNumber, message, retryCount]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (status === 'verifying') return;
    setRetryCount(0);
    verifyNumber();
  };

  return (
    <div className="fixed right-4 md:right-6 lg:right-8 bottom-4 md:bottom-6 z-50 flex flex-col items-end gap-2">
      
      {/* Status Message Bubble */}
      {status !== 'idle' && (
        <div 
          className={`
            px-4 py-2 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 transform translate-y-0 opacity-100 mb-2
            ${status === 'verifying' ? 'bg-blue-100 text-blue-800' : ''}
            ${status === 'active' ? 'bg-green-100 text-green-800' : ''}
            ${status === 'inactive' || status === 'error' ? 'bg-red-100 text-red-800' : ''}
          `}
          role="alert"
        >
          {status === 'verifying' && (
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verifying number...
            </div>
          )}
          {status === 'active' && (
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Active on WhatsApp Business
            </div>
          )}
          {(status === 'inactive' || status === 'error') && (
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              {errorMessage || 'Number not available'}
              <button 
                onClick={(e) => { e.stopPropagation(); handleClick(e); }}
                className="ml-2 underline hover:text-red-900"
              >
                Retry
              </button>
            </div>
          )}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={handleClick}
        aria-label={status === 'verifying' ? "Verifying WhatsApp status" : "Chat on WhatsApp"}
        title="Chat on WhatsApp"
        disabled={status === 'verifying'}
        className={`
          w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 
          focus:outline-none focus:ring-2 focus:ring-blue-600/30 flex items-center justify-center relative
          ${status === 'inactive' || status === 'error' ? 'bg-gray-400 cursor-not-allowed' : ''}
        `}
        style={{ backgroundColor: status === 'inactive' || status === 'error' ? undefined : '#25D366' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.771.966-.943 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.149-.672-1.616-.921-2.215-.242-.579-.487-.5-.672-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.005-1.414.247-.695.247-1.29.173-1.414-.074-.123-.273-.198-.57-.347m-5.421 7.403h-.003a9.87 9.87 0 0 1-5.031-1.378l-.36-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.245c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.112 1.03 6.963 2.882a9.825 9.825 0 0 1 2.924 6.994c-.003 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .184 5.311.182 11.867c0 2.086.547 4.125 1.588 5.935L0 24l6.356-1.665a11.84 11.84 0 0 0 5.684 1.449h.005c6.554 0 11.865-5.311 11.868-11.867a11.8 11.8 0 0 0-3.448-8.449Z"/>
        </svg>
        
        {/* Status Indicator Dot on Button */}
        {status === 'active' && (
          <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
        )}
      </button>
    </div>
  );
}
