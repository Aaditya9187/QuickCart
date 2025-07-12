// config/inngest.js
import { Inngest } from "inngest";
import connectdb from "@/lib/connectdb";

export const inngest = new Inngest({ name: "QuickCart App" });

export const syncUserCreation = inngest.createFunction(
  { name: "Sync User Creation", event: "app/user.created" },
  async ({ event }) => {
    await connectdb();
    const { email, id } = event.data;

    console.log("User created:", email, id);
    // Your DB logic here
    return { status: "user creation synced" };
  }
);

export const syncUserUpation = inngest.createFunction(
  { name: "Sync User Upation", event: "app/user.updated" },
  async ({ event }) => {
    await connectdb();
    const { email, id } = event.data;

    console.log("User updated:", email, id);
    // Your DB update logic here
    return { status: "user update synced" };
  }
);

export const syncUserDeletion = inngest.createFunction(
  { name: "Sync User Deletion", event: "app/user.deleted" },
  async ({ event }) => {
    await connectdb();
    const { email, id } = event.data;

    console.log("User deleted:", email, id);
    // Your DB delete logic here
    return { status: "user deletion synced" };
  }
);
