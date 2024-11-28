import { create } from 'zustand';
import { Content } from '../validation/contentSchema';
import { loadContent, saveContent } from '../api/content';

interface EditorState {
  isEditing: boolean;
  content: Content;
  isLoading: boolean;
  error: string | null;
  setEditing: (isEditing: boolean) => void;
  setContent: (content: Content) => void;
  loadContent: (token: string) => Promise<void>;
  saveContent: (content: Content, token: string) => Promise<void>;
}

export const useEditorStore = create<EditorState>((set) => ({
  isEditing: false,
  isLoading: false,
  error: null,
  content: {
    content: [],
    root: { title: 'EcoVenture' },
  },
  setEditing: (isEditing) => set({ isEditing }),
  setContent: (content) => set({ content }),
  loadContent: async (token) => {
    set({ isLoading: true, error: null });
    try {
      const content = await loadContent(token);
      set({ content, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  saveContent: async (content, token) => {
    set({ isLoading: true, error: null });
    try {
      await saveContent(content, token);
      set({ content, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
}));