export type AlumniDetails = {
  src: string;
  name: string;
  degree: 'B Tech' | 'M Tech' | 'Dual Degree' | 'M Des' | 'PhD';
  year: number;
  department: 'CSE' | 'ECE' | 'MECH' | 'SM' | 'CSAI';
};

export type MemberData = {
  imagePath: string;
  name: string;
  position:
    | 'Professor In Charge'
    | 'Secretary'
    | 'Joint Secretary'
    | 'Coordinator';
  email: string;
};

// ? types generated from supabase
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      activities: {
        Row: {
          id: number;
          time: string;
          title: string;
        };
        Insert: {
          id?: number;
          time: string;
          title: string;
        };
        Update: {
          id?: number;
          time?: string;
          title?: string;
        };
        Relationships: [];
      };
      carousel: {
        Row: {
          alt_text: string;
          height: number;
          id: number;
          link: string;
          width: number;
        };
        Insert: {
          alt_text: string;
          height: number;
          id?: number;
          link: string;
          width: number;
        };
        Update: {
          alt_text?: string;
          height?: number;
          id?: number;
          link?: string;
          width?: number;
        };
        Relationships: [];
      };
      gallery: {
        Row: {
          alt_text: string;
          height: number;
          id: number;
          link: string;
          width: number;
        };
        Insert: {
          alt_text: string;
          height: number;
          id?: number;
          link: string;
          width: number;
        };
        Update: {
          alt_text?: string;
          height?: number;
          id?: number;
          link?: string;
          width?: number;
        };
        Relationships: [];
      };
      newsroom: {
        Row: {
          content: string[];
          created_at: string;
          id: number;
          image_link: string;
          summary_for_seo: string;
          title: string;
          video_link: string | null;
        };
        Insert: {
          content: string[];
          created_at?: string;
          id?: number;
          image_link: string;
          summary_for_seo: string;
          title: string;
          video_link?: string | null;
        };
        Update: {
          content?: string[];
          created_at?: string;
          id?: number;
          image_link?: string;
          summary_for_seo?: string;
          title?: string;
          video_link?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
