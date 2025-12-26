import { type User, type InsertUser, type ContactSubmission, type InsertContact, type Verse, users, contactSubmissions } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getRandomVerse(): Verse;
}

const verses: Verse[] = [
  { text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.", reference: "Jean 3:16" },
  { text: "L'Éternel est mon berger: je ne manquerai de rien.", reference: "Psaume 23:1" },
  { text: "Je puis tout par celui qui me fortifie.", reference: "Philippiens 4:13" },
  { text: "Ne crains point, car je suis avec toi; Ne t'effraie point, car je suis ton Dieu.", reference: "Ésaïe 41:10" },
  { text: "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.", reference: "Matthieu 11:28" },
  { text: "Confie-toi en l'Éternel de tout ton cœur, Et ne t'appuie pas sur ta sagesse.", reference: "Proverbes 3:5" },
  { text: "L'Éternel est ma lumière et mon salut: De qui aurais-je crainte?", reference: "Psaume 27:1" },
  { text: "Et nous savons que toutes choses concourent au bien de ceux qui aiment Dieu.", reference: "Romains 8:28" },
  { text: "Mais ceux qui se confient en l'Éternel renouvellent leur force.", reference: "Ésaïe 40:31" },
  { text: "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur.", reference: "Jérémie 29:11" },
  { text: "En toutes choses rendez grâces; car c'est à votre égard la volonté de Dieu en Jésus-Christ.", reference: "1 Thessaloniciens 5:18" },
  { text: "Soyez forts et courageux. N'ayez pas peur et ne soyez pas effrayés devant eux.", reference: "Deutéronome 31:6" },
  { text: "Ta parole est une lampe à mes pieds, Et une lumière sur mon sentier.", reference: "Psaume 119:105" },
  { text: "L'amour est patient, il est plein de bonté; l'amour n'est point envieux.", reference: "1 Corinthiens 13:4" },
  { text: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.", reference: "Matthieu 6:33" },
];

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const [submission] = await db.insert(contactSubmissions).values(insertContact).returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions);
  }

  getRandomVerse(): Verse {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
  }
}

export const storage = new DatabaseStorage();
