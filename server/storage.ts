import { type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type ChecklistDownload, type InsertChecklistDownload } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  createChecklistDownload(download: InsertChecklistDownload): Promise<ChecklistDownload>;
  getChecklistDownloads(): Promise<ChecklistDownload[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Map<string, ContactInquiry>;
  private checklistDownloads: Map<string, ChecklistDownload>;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.checklistDownloads = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const contactInquiry: ContactInquiry = {
      ...inquiry,
      id,
      phone: inquiry.phone || null,
      company: inquiry.company || null,
      createdAt: new Date(),
    };
    this.contactInquiries.set(id, contactInquiry);
    return contactInquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createChecklistDownload(download: InsertChecklistDownload): Promise<ChecklistDownload> {
    const id = randomUUID();
    const checklistDownload: ChecklistDownload = {
      ...download,
      id,
      phone: download.phone || null,
      company: download.company || null,
      createdAt: new Date(),
    };
    this.checklistDownloads.set(id, checklistDownload);
    return checklistDownload;
  }

  async getChecklistDownloads(): Promise<ChecklistDownload[]> {
    return Array.from(this.checklistDownloads.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
