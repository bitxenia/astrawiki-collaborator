import { createAstrawikiNode } from "@bitxenia/astrawiki";
import { FsBlockstore } from "blockstore-fs";
import { FsDatastore } from "datastore-fs";

// Read PUBLIC_IP from env
const publicIp = process.env.PUBLIC_IP;

if (!publicIp) {
  console.error("Missing PUBLIC_IP environment variable");
  process.exit(1);
}

const blockstore = new FsBlockstore("/data/astrawiki_data/block-store");
const datastore = new FsDatastore("/data/astrawiki_data/data-store");

const node = await createAstrawikiNode({
  wikiName: "bitxenia-wiki",
  isCollaborator: true,
  datastore: datastore,
  blockstore: blockstore,
  publicIP: publicIp,
});
