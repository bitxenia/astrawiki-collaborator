import { createAstrachat } from "@bitxenia/astrachat";
import { FsBlockstore } from "blockstore-fs";
import { FsDatastore } from "datastore-fs";

const DATASTORE_DIR = "/app/data/datastore";
const BLOCKSTORE_DIR = "/app/data/blockstore";
const ORBITDB_DIR = "/app/data/bitxenia-chat";

const node = await createAstrachat({
  chatSpace: "bitxenia-chat",
  isCollaborator: true,
  datastore: new FsDatastore(DATASTORE_DIR),
  blockstore: new FsBlockstore(BLOCKSTORE_DIR),
  publicIp: process.env.PUBLIC_IP,
  dataDir: ORBITDB_DIR,
  logLevel: "debug",
});
