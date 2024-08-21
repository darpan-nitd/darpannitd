import { db } from "@vercel/postgres";
import { MemberInfo } from "./definations";

export async function getMembers() {
  const client = await db.connect();
  try {
    const sqlQuery = `SELECT * FROM member_details`;
    const members = await client.query<MemberInfo>(sqlQuery);
    return members.rows;
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
}

export async function getEventImages() {
  const client = await db.connect();
  try {
    const sqlQuery = `SELECT * FROM event_images 
    WHERE is_active = true 
    ORDER BY id ASC`;
    const images = await client.query(sqlQuery);
    return images.rows;
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
}

export async function getEventPoster() {
  const client = await db.connect();
  try {
    const sqlQuery = `SELECT * FROM event_images
    WHERE is_active = true AND is_poster = true`;
    const images = await client.query(sqlQuery);
    return images.rows;
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
}

export async function getCollageImages() {
  const client = await db.connect();
  try {
    const sqlQuery = `SELECT * FROM event_images
    WHERE is_active = true AND is_poster = false`;
    const images = await client.query(sqlQuery);
    return images.rows;
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
}
