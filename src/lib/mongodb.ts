import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

declare global {
  // 개발 모드 HMR 시 연결이 계속 새로 생기지 않도록 전역에 캐시
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  return global._mongoClientPromise;
}

type ClickDoc = { _id: string; count: number };

async function getCollection() {
  const clientPromise = getClientPromise();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client.db(dbName).collection<ClickDoc>("clicks");
}

export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const collection = await getCollection();
    if (!collection) return {};
    const docs = await collection.find().toArray();
    return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return {};
  }
}

export async function incrementClick(linkId: string): Promise<boolean> {
  const collection = await getCollection();
  if (!collection) return false;
  await collection.updateOne(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true },
  );
  return true;
}
