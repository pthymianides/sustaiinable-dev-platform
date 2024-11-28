import { Content } from '../validation/contentSchema';
import { ApiError, ApiErrorResponse } from '../types/api';

const API_URL = import.meta.env.VITE_API_URL;

export async function saveContent(content: Content, token: string): Promise<void> {
  const response = await fetch(`${API_URL}/api/content`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(content),
  });

  if (!response.ok) {
    const error = await response.json() as ApiErrorResponse;
    throw new ApiError(
      error.message || 'Failed to save content',
      response.status,
      error.code
    );
  }
}

export async function loadContent(token: string): Promise<Content> {
  const response = await fetch(`${API_URL}/api/content`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json() as ApiErrorResponse;
    throw new ApiError(
      error.message || 'Failed to load content',
      response.status,
      error.code
    );
  }

  return response.json();
}