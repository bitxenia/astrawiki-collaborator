import { createAstrachat } from "@bitxenia/astrachat";
import { FsBlockstore } from "blockstore-fs";
import { FsDatastore } from "datastore-fs";

const DATASTORE_DIR = "/app/data/astrachat/datastore";
const BLOCKSTORE_DIR = "/app/data/astrachat/blockstore";
const DATA_DIR = "/app/data/astrachat";

const node = await createAstrachat({
  chatSpace: "bitxenia-chat",
  isCollaborator: true,
  datastore: new FsDatastore(DATASTORE_DIR),
  blockstore: new FsBlockstore(BLOCKSTORE_DIR),
  publicIp: process.env.PUBLIC_IP,
  dataDir: DATA_DIR,
  logLevel: "debug",
});
