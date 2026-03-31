const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://josegaspard.dev/api';

function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export function setToken(token: string) {
  localStorage.setItem('token', token);
}

export function removeToken() {
  localStorage.removeItem('token');
}

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || `HTTP ${res.status}`);
  }
  if (res.status === 204) return {} as T;
  return res.json();
}

export const authApi = {
  login: (username: string, password: string) =>
    fetchApi<{ access_token: string; user: { id: number; username: string; email: string; role: string } }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }),
};

export const contentApi = {
  getAll: () => fetchApi<any[]>('/content'),
  getPortfolio: () => fetchApi<any[]>('/content/portfolio'),
  getBySlug: (slug: string) => fetchApi<any>(`/content/slug/${slug}`),
  getById: (id: number) => fetchApi<any>(`/content/${id}`),
  create: (data: any) => fetchApi<any>('/content', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: any) => fetchApi<any>(`/content/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: number) => fetchApi<void>(`/content/${id}`, { method: 'DELETE' }),
};

export const dashboardApi = {
  getStats: () => fetchApi<any>('/dashboard/stats'),
};

export const contactApi = {
  send: (data: { name: string; email: string; company?: string; service?: string; message: string }) =>
    fetchApi<any>('/contact-messages', { method: 'POST', body: JSON.stringify(data) }),
  getAll: () => fetchApi<any[]>('/contact-messages'),
  markAsRead: (id: number) => fetchApi<any>(`/contact-messages/${id}/read`, { method: 'PUT' }),
  reply: (id: number, reply: string) =>
    fetchApi<any>(`/contact-messages/${id}/reply`, { method: 'POST', body: JSON.stringify({ reply }) }),
  delete: (id: number) => fetchApi<void>(`/contact-messages/${id}`, { method: 'DELETE' }),
};

export const newsletterApi = {
  subscribe: (email: string, name?: string) =>
    fetchApi<any>('/newsletter/subscribe', { method: 'POST', body: JSON.stringify({ email, name, source: 'website' }) }),
  getSubscribers: () => fetchApi<any[]>('/newsletter/subscribers'),
  getStats: () => fetchApi<any>('/newsletter/stats'),
};

export const analyticsApi = {
  trackEvent: (type: string, url?: string, payload?: any) =>
    fetchApi<any>('/analytics/event', { method: 'POST', body: JSON.stringify({ type, url, payload }) }),
  getStats: () => fetchApi<any>('/analytics/stats'),
};

export const mediaApi = {
  getAll: () => fetchApi<any[]>('/media'),
  create: (data: any) => fetchApi<any>('/media', { method: 'POST', body: JSON.stringify(data) }),
  delete: (id: number) => fetchApi<void>(`/media/${id}`, { method: 'DELETE' }),
};

export const settingsApi = {
  getAll: () => fetchApi<any[]>('/settings'),
  update: (key: string, value: string) =>
    fetchApi<any>('/settings', { method: 'POST', body: JSON.stringify({ key, value }) }),
  clearCache: () => fetchApi<any>('/settings/clear-cache', { method: 'POST' }),
};

export const emailApi = {
  sendReply: (messageId: number, reply: string) =>
    fetchApi<any>('/email/reply', { method: 'POST', body: JSON.stringify({ messageId, reply }) }),
  sendBulk: (subject: string, content: string, emails: string[]) =>
    fetchApi<any>('/email/bulk', { method: 'POST', body: JSON.stringify({ subject, content, emails }) }),
};

export const commentsApi = {
  getByPost: (postId: number) => fetchApi<any[]>(`/comments/post/${postId}`),
  create: (data: any) => fetchApi<any>('/comments', { method: 'POST', body: JSON.stringify(data) }),
  approve: (id: number) => fetchApi<any>(`/comments/${id}/approve`, { method: 'PUT' }),
  delete: (id: number) => fetchApi<void>(`/comments/${id}`, { method: 'DELETE' }),
};
