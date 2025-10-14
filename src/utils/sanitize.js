/**
 * Sanitization utilities for user input
 * Prevents XSS and injection attacks
 */

/**
 * Sanitizes general text input by removing dangerous characters and patterns
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (!input) return '';
  
  // Remove potentially dangerous characters and patterns
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers like onclick=
    .replace(/&lt;/g, '') // Remove encoded <
    .replace(/&gt;/g, '') // Remove encoded >
    .trim();
};

/**
 * Sanitizes email input
 * @param {string} email - The email to sanitize
 * @returns {string} - Sanitized email
 */
export const sanitizeEmail = (email) => {
  if (!email) return '';
  return email.toLowerCase().trim();
};

/**
 * Sanitizes phone number input
 * @param {string} phone - The phone number to sanitize
 * @returns {string} - Sanitized phone number
 */
export const sanitizePhone = (phone) => {
  if (!phone) return '';
  // Keep only digits, +, spaces, parentheses, and hyphens
  return phone.replace(/[^\d+\s()-]/g, '');
};

/**
 * Validates and sanitizes URL
 * @param {string} url - The URL to validate
 * @returns {string|null} - Sanitized URL or null if invalid
 */
export const sanitizeUrl = (url) => {
  if (!url) return null;
  
  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.href;
    }
    return null;
  } catch {
    return null;
  }
};
